// Lightweight IP-based rate limiting on top of the same Upstash Redis used for
// the lead store. Everything is best-effort: if Redis is unreachable we FAIL
// OPEN, so a KV outage can never lock the admin out of the dashboard.
import { redis, kvConfigured } from "./kv";

/** Best-effort client IP. Vercel sets x-forwarded-for (client is the first hop). */
export function clientIp(req: Request) {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

/** Increment `key`, expiring after windowSec. Returns the new count (0 on failure). */
export async function hit(key: string, windowSec: number) {
  if (!kvConfigured) return 0;
  try {
    const count = Number(await redis(["INCR", key]));
    if (count === 1) await redis(["EXPIRE", key, windowSec]);
    return count;
  } catch (e) {
    console.error("[admin] rate limit hit failed (failing open):", e);
    return 0;
  }
}

/** Read a counter without incrementing it. */
export async function peek(key: string) {
  if (!kvConfigured) return 0;
  try {
    return Number((await redis(["GET", key])) || 0);
  } catch (e) {
    console.error("[admin] rate limit peek failed (failing open):", e);
    return 0;
  }
}

/** Clear a counter (e.g. after a successful login). */
export async function reset(key: string) {
  if (!kvConfigured) return;
  try {
    await redis(["DEL", key]);
  } catch (e) {
    console.error("[admin] rate limit reset failed:", e);
  }
}
