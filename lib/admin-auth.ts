// Stateless admin session tokens, HMAC-signed with ADMIN_PASSWORD.
// No DB needed: the token is <base64url(payload)>.<hmac>. We verify the
// signature and the expiry on every protected request.
import { createHmac, timingSafeEqual } from "crypto";

const TTL_MS = 12 * 60 * 60 * 1000; // 12 hours

const secret = () => process.env.ADMIN_PASSWORD || "";

export function issueToken() {
  const payload = Buffer.from(JSON.stringify({ exp: Date.now() + TTL_MS })).toString(
    "base64url"
  );
  const sig = createHmac("sha256", secret()).update(payload).digest("base64url");
  return `${payload}.${sig}`;
}

export function verifyToken(token: string | null | undefined) {
  if (!token || !secret()) return false;
  const [payload, sig] = String(token).split(".");
  if (!payload || !sig) return false;
  const expected = createHmac("sha256", secret()).update(payload).digest("base64url");
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return false;
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString());
    return typeof data.exp === "number" && Date.now() < data.exp;
  } catch {
    return false;
  }
}

/** Reads the Bearer token off the request and verifies it. */
export function isAuthorized(req: Request) {
  const header = req.headers.get("authorization") || "";
  return verifyToken(header.startsWith("Bearer ") ? header.slice(7) : "");
}

/** Constant-time password comparison against ADMIN_PASSWORD. */
export function passwordMatches(input: unknown) {
  const expected = secret();
  if (!expected) return false;
  const a = Buffer.from(String(input));
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}
