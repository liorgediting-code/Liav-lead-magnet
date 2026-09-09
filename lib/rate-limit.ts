// In-memory brute-force counter for the admin login. Deliberately dependency
// free — there's no shared store in this app, so the counter is per serverless
// instance. That still slows a real attack down substantially, and the login is
// a single strong password on a noindex page, not a public account system.
const counters = new Map<string, { count: number; expiresAt: number }>();

/** Best-effort client IP. Vercel sets x-forwarded-for (client is the first hop). */
export function clientIp(req: Request) {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

function live(key: string) {
  const entry = counters.get(key);
  if (!entry || entry.expiresAt <= Date.now()) {
    counters.delete(key);
    return null;
  }
  return entry;
}

/** Increment `key`, expiring after windowSec. Returns the new count. */
export function hit(key: string, windowSec: number) {
  const entry = live(key);
  if (entry) {
    entry.count += 1;
    return entry.count;
  }
  counters.set(key, { count: 1, expiresAt: Date.now() + windowSec * 1000 });
  // Opportunistic sweep so the map can't grow unbounded.
  if (counters.size > 500) {
    for (const k of counters.keys()) live(k);
  }
  return 1;
}

/** Read a counter without incrementing it. */
export function peek(key: string) {
  return live(key)?.count ?? 0;
}

/** Clear a counter (e.g. after a successful login). */
export function reset(key: string) {
  counters.delete(key);
}
