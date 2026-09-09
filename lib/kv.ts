// Thin wrapper around the Upstash Redis REST API.
// Works with either the Vercel KV integration env vars (KV_REST_API_*)
// or the raw Upstash env vars (UPSTASH_REDIS_REST_*).
const REST_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const REST_TOKEN =
  process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

/** True when a KV store is wired up. Callers degrade gracefully when it isn't. */
export const kvConfigured = Boolean(REST_URL && REST_TOKEN);

export async function redis(command: (string | number)[]): Promise<unknown> {
  if (!REST_URL || !REST_TOKEN) {
    throw new Error(
      "KV env vars missing (set KV_REST_API_URL / KV_REST_API_TOKEN in Vercel)"
    );
  }
  const res = await fetch(REST_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${REST_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`KV error ${res.status} ${await res.text().catch(() => "")}`);
  }
  const data = await res.json();
  return data.result;
}

// HGETALL comes back either as a flat [f1,v1,f2,v2] array or as an object,
// depending on Upstash version — normalise to [[field, value], ...].
export function hgetallEntries(raw: unknown): [string, unknown][] {
  if (!raw) return [];
  if (Array.isArray(raw)) {
    const out: [string, unknown][] = [];
    for (let i = 0; i < raw.length; i += 2) out.push([String(raw[i]), raw[i + 1]]);
    return out;
  }
  if (typeof raw === "object") return Object.entries(raw as Record<string, unknown>);
  return [];
}
