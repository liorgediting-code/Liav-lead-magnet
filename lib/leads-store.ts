// Lead store backed by the Google Sheet that /api/submit already writes to.
// No extra database: the sheet is the system of record, and the dashboard is
// just a nicer window onto it. Column mapping is header-driven, so whatever
// layout the Apps Script webhook produces keeps working.
import {
  deleteRow,
  readSheet,
  sheetsConfigured,
  writeCell,
} from "./google-sheets";

export { sheetsConfigured };

export const LEAD_STATUSES = ["new", "contacted", "booked", "won", "lost"] as const;
export type LeadStatus = (typeof LEAD_STATUSES)[number];

// Stored in the sheet in Hebrew so the column is readable to a human editing
// it directly. Anything unrecognised falls back to "new".
const STATUS_TO_SHEET: Record<LeadStatus, string> = {
  new: "חדש",
  contacted: "נוצר קשר",
  booked: "נקבעה שיחה",
  won: "נסגר",
  lost: "לא רלוונטי",
};
const SHEET_TO_STATUS = new Map(
  Object.entries(STATUS_TO_SHEET).map(([k, v]) => [v, k as LeadStatus])
);

export type Lead = {
  /** 1-based sheet row — the row number shown in the Sheets UI. */
  row: number;
  name: string;
  phone: string;
  email: string;
  source: string;
  status: LeadStatus;
  utmCampaign: string;
  utmContent: string;
  fbclid: string;
  landingPage: string;
  createdAt: string;
};

// Accepted header spellings per field, Hebrew and English. Matching is
// case-insensitive and ignores spaces/underscores/quotes.
const ALIASES: Record<keyof Omit<Lead, "row">, string[]> = {
  name: ["name", "שם", "שםמלא", "fullname"],
  phone: ["phone", "טלפון", "נייד", "מספרטלפון", "mobile"],
  email: ["email", "mail", "אימייל", "מייל", "דואל", "דואראלקטרוני"],
  source: ["source", "מקור", "דף"],
  status: ["status", "סטטוס", "מצב"],
  createdAt: ["timestamp", "תאריךיצירה", "תאריך", "date", "createdat", "created", "זמן"],
  utmCampaign: ["utmcampaign", "קמפיין"],
  utmContent: ["utmcontent"],
  fbclid: ["fbclid"],
  landingPage: ["landingpage", "דףנחיתה"],
};

const normalize = (s: string) =>
  String(s ?? "")
    .toLowerCase()
    .replace(/[\s_\-."'״׳]/g, "");

function mapColumns(headers: string[]) {
  const normalized = headers.map(normalize);
  const map = {} as Record<keyof Omit<Lead, "row">, number>;
  for (const [field, aliases] of Object.entries(ALIASES)) {
    map[field as keyof Omit<Lead, "row">] = normalized.findIndex((h) =>
      aliases.includes(h)
    );
  }
  return map;
}

export class SheetShapeError extends Error {}

/** Read every lead out of the sheet, newest first. */
export async function listLeads(): Promise<Lead[]> {
  const { headers, rows } = await readSheet();
  const col = mapColumns(headers);

  if (col.name < 0 && col.phone < 0 && col.email < 0) {
    throw new SheetShapeError(
      "לא זוהו עמודות בגיליון. ודא ששורה 1 מכילה כותרות כמו: שם, טלפון, אימייל, תאריך יצירה."
    );
  }

  const at = (row: string[], i: number) => (i >= 0 ? String(row[i] ?? "").trim() : "");

  const leads = rows
    .map((row, i) => ({
      // +2: row 1 is the header, and `i` is 0-based.
      row: i + 2,
      name: at(row, col.name),
      phone: at(row, col.phone),
      email: at(row, col.email),
      source: at(row, col.source),
      status: SHEET_TO_STATUS.get(at(row, col.status)) || ("new" as LeadStatus),
      utmCampaign: at(row, col.utmCampaign),
      utmContent: at(row, col.utmContent),
      fbclid: at(row, col.fbclid),
      landingPage: at(row, col.landingPage),
      createdAt: at(row, col.createdAt),
    }))
    // Skip blank rows left behind in the sheet.
    .filter((l) => l.name || l.phone || l.email);

  leads.sort((a, b) => {
    const ta = Date.parse(a.createdAt);
    const tb = Date.parse(b.createdAt);
    if (!Number.isNaN(ta) && !Number.isNaN(tb)) return tb - ta;
    return b.row - a.row;
  });
  return leads;
}

/** The status column, creating it as a new right-most column if missing. */
async function statusColumn() {
  const { headers } = await readSheet();
  const existing = mapColumns(headers).status;
  if (existing >= 0) return existing;
  const index = headers.length;
  await writeCell(1, index, "סטטוס");
  return index;
}

/**
 * Row numbers shift when rows are deleted, so every mutation re-reads the row
 * and refuses to act unless it still holds the lead the dashboard meant.
 */
async function assertRowMatches(row: number, expectedPhone: string, expectedName: string) {
  const leads = await listLeads();
  const current = leads.find((l) => l.row === row);
  const same =
    current &&
    (expectedPhone ? current.phone === expectedPhone : current.name === expectedName);
  if (!same) {
    throw new SheetShapeError("הגיליון השתנה מאז הטעינה. רענן ונסה שוב.");
  }
  return current;
}

export async function setLeadStatus(
  row: number,
  status: LeadStatus,
  expectedPhone: string,
  expectedName: string
) {
  await assertRowMatches(row, expectedPhone, expectedName);
  await writeCell(row, await statusColumn(), STATUS_TO_SHEET[status]);
}

export async function removeLead(row: number, expectedPhone: string, expectedName: string) {
  await assertRowMatches(row, expectedPhone, expectedName);
  await deleteRow(row);
}

export function statsFor(leads: Lead[]) {
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);
  const since = (l: Lead, from: number) => {
    const t = Date.parse(l.createdAt);
    return !Number.isNaN(t) && t >= from;
  };
  return {
    total: leads.length,
    today: leads.filter((l) => since(l, startOfToday.getTime())).length,
    week: leads.filter((l) => since(l, Date.now() - 7 * 24 * 60 * 60 * 1000)).length,
    withPhone: leads.filter((l) => l.phone).length,
    booked: leads.filter((l) => l.status === "booked" || l.status === "won").length,
  };
}
