import { NextResponse } from "next/server";
import { issueToken, passwordMatches } from "@/lib/admin-auth";
import { clientIp, hit, peek, reset } from "@/lib/rate-limit";

// Brute-force protection: after MAX_FAILS wrong passwords from one IP, lock
// that IP out for LOCK_WINDOW seconds. A successful login clears the counter.
const MAX_FAILS = 5;
const LOCK_WINDOW = 15 * 60; // 15 minutes

export async function POST(req: Request) {
  if (!process.env.ADMIN_PASSWORD) {
    return NextResponse.json(
      { error: "ADMIN_PASSWORD לא מוגדר בשרת" },
      { status: 500 }
    );
  }

  const failKey = `rl:admin:fail:${clientIp(req)}`;
  const lockedResponse = () =>
    NextResponse.json(
      { error: "יותר מדי ניסיונות. נסה שוב בעוד כ-15 דקות." },
      { status: 429, headers: { "Retry-After": String(LOCK_WINDOW) } }
    );

  // Already locked out? Reject before even checking the password.
  if (peek(failKey) >= MAX_FAILS) return lockedResponse();

  const body = await req.json().catch(() => ({}));
  if (!passwordMatches(body?.password)) {
    const count = hit(failKey, LOCK_WINDOW);
    if (count >= MAX_FAILS) return lockedResponse();
    return NextResponse.json({ error: "סיסמה שגויה" }, { status: 401 });
  }

  reset(failKey);
  return NextResponse.json({ token: issueToken() });
}
