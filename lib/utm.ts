// UTM + click-ID capture stored in sessionStorage so it survives navigation
// within the session but doesn't bleed across visits.

const KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
  "gclid",
] as const;

type AttributionKey = (typeof KEYS)[number];
export type Attribution = Partial<Record<AttributionKey, string>> & {
  referrer?: string;
  landing_page?: string;
};

const STORAGE_KEY = "__attribution";

export function captureAttribution() {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    const existing = readAttribution();
    const next: Attribution = { ...existing };
    let updated = false;
    for (const key of KEYS) {
      const v = params.get(key);
      if (v && !next[key]) {
        next[key] = v;
        updated = true;
      }
    }
    if (!next.referrer && document.referrer) {
      next.referrer = document.referrer;
      updated = true;
    }
    if (!next.landing_page) {
      next.landing_page = window.location.pathname + window.location.search;
      updated = true;
    }
    if (updated) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    }
  } catch {
    // sessionStorage unavailable — ignore
  }
}

export function readAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : {};
  } catch {
    return {};
  }
}
