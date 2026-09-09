// Minimal Google Sheets v4 client — service-account JWT → access token → REST.
// Hand-rolled instead of pulling in `googleapis` (a ~100MB dependency) for the
// four calls this app makes, matching how the Meta CAPI and Responder
// integrations are written.
import { createSign } from "crypto";

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const SCOPE = "https://www.googleapis.com/auth/spreadsheets";
const API = "https://sheets.googleapis.com/v4/spreadsheets";

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const SA_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
// Vercel's env UI stores either literal \n escapes or real newlines — normalise
// both. A key pasted with wrapping quotes breaks PEM parsing, so strip those too.
const SA_KEY = (process.env.GOOGLE_PRIVATE_KEY || "")
  .replace(/^["']|["']$/g, "")
  .replace(/\\n/g, "\n");
/** Tab to read. Defaults to the first tab in the spreadsheet. */
const TAB = process.env.GOOGLE_SHEET_TAB || "";

export const sheetsConfigured = Boolean(SHEET_ID && SA_EMAIL && SA_KEY);

function b64url(input: string | Buffer) {
  return Buffer.from(input).toString("base64url");
}

// Access tokens last an hour; cache in module scope so a warm lambda doesn't
// re-authenticate on every dashboard refresh.
let cachedToken: { value: string; expiresAt: number } | null = null;

async function getAccessToken() {
  if (cachedToken && cachedToken.expiresAt > Date.now() + 60_000) {
    return cachedToken.value;
  }
  if (!sheetsConfigured) {
    throw new Error(
      "Google Sheets לא מוגדר (GOOGLE_SHEET_ID / GOOGLE_SERVICE_ACCOUNT_EMAIL / GOOGLE_PRIVATE_KEY)"
    );
  }

  const iat = Math.floor(Date.now() / 1000);
  const claim = {
    iss: SA_EMAIL,
    scope: SCOPE,
    aud: TOKEN_URL,
    iat,
    exp: iat + 3600,
  };
  const unsigned = `${b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }))}.${b64url(
    JSON.stringify(claim)
  )}`;
  const signature = createSign("RSA-SHA256").update(unsigned).sign(SA_KEY);
  const assertion = `${unsigned}.${b64url(signature)}`;

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
    cache: "no-store",
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.access_token) {
    console.error("[sheets] token exchange failed:", data);
    throw new Error(
      data.error_description || data.error || "אימות מול Google נכשל — בדוק את המפתח"
    );
  }
  cachedToken = {
    value: data.access_token,
    expiresAt: Date.now() + Number(data.expires_in || 3600) * 1000,
  };
  return cachedToken.value;
}

async function call(path: string, init: RequestInit = {}) {
  const token = await getAccessToken();
  const res = await fetch(`${API}/${SHEET_ID}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
    cache: "no-store",
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    console.error("[sheets] API error:", res.status, data);
    throw new Error(data?.error?.message || `Sheets API ${res.status}`);
  }
  return data;
}

// Tab title + numeric sheetId (needed for row deletion). Cached per instance.
let cachedTab: { title: string; sheetId: number } | null = null;

async function getTab() {
  if (cachedTab) return cachedTab;
  const meta = await call("?fields=sheets.properties(sheetId,title)");
  const sheets: { properties: { sheetId: number; title: string } }[] = meta.sheets || [];
  if (!sheets.length) throw new Error("הגיליון ריק — לא נמצאו לשוניות");
  const match = TAB
    ? sheets.find((s) => s.properties.title === TAB)
    : sheets[0];
  if (!match) throw new Error(`הלשונית "${TAB}" לא נמצאה בגיליון`);
  cachedTab = { title: match.properties.title, sheetId: match.properties.sheetId };
  return cachedTab;
}

/** Quote a tab title for use in an A1 range. */
function range(title: string, a1: string) {
  return encodeURIComponent(`'${title.replace(/'/g, "''")}'!${a1}`);
}

/** Every populated row, plus the header row. */
export async function readSheet() {
  const tab = await getTab();
  const data = await call(`/values/${range(tab.title, "A1:ZZ")}`);
  const values: string[][] = data.values || [];
  const [headers = [], ...rows] = values;
  return { headers: headers.map((h) => String(h ?? "")), rows };
}

/** Column index (0-based) → A1 letter. */
export function colLetter(index: number) {
  let n = index + 1;
  let out = "";
  while (n > 0) {
    const rem = (n - 1) % 26;
    out = String.fromCharCode(65 + rem) + out;
    n = Math.floor((n - 1) / 26);
  }
  return out;
}

/** Write one cell. `rowNumber` is 1-based as shown in the Sheets UI. */
export async function writeCell(rowNumber: number, colIndex: number, value: string) {
  const tab = await getTab();
  const a1 = `${colLetter(colIndex)}${rowNumber}`;
  await call(`/values/${range(tab.title, a1)}?valueInputOption=RAW`, {
    method: "PUT",
    body: JSON.stringify({ values: [[value]] }),
  });
}

/** Permanently remove a row. `rowNumber` is 1-based. */
export async function deleteRow(rowNumber: number) {
  const tab = await getTab();
  await call(":batchUpdate", {
    method: "POST",
    body: JSON.stringify({
      requests: [
        {
          deleteDimension: {
            range: {
              sheetId: tab.sheetId,
              dimension: "ROWS",
              startIndex: rowNumber - 1, // 0-based, inclusive
              endIndex: rowNumber, // exclusive
            },
          },
        },
      ],
    }),
  });
}
