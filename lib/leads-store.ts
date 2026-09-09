// Lead store on top of Upstash Redis — the data behind /dashboard.
// Google Sheets stays the system of record; this is the working copy the
// dashboard reads, marks up and messages from.
import { redis, hgetallEntries, kvConfigured } from "./kv";

export const LEAD_STATUSES = ["new", "contacted", "booked", "won", "lost"] as const;
export type LeadStatus = (typeof LEAD_STATUSES)[number];

export type Lead = {
  id: string;
  name: string;
  phone: string;
  email: string;
  source: string;
  status: LeadStatus;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
  fbclid: string;
  landingPage: string;
  createdAt: string;
};

// Namespaced so this project can safely share one Upstash database with the
// webinar site, which keeps its own registrations under a plain "leads" key.
const KEY = `${process.env.KV_NAMESPACE || "magnet"}:leads`;

// Data-retention enforcement (חוק הגנת הפרטיות — עקרון צמצום המידע).
// Leads older than this are permanently deleted on the next dashboard read.
const RETENTION_DAYS = Number(process.env.LEAD_RETENTION_DAYS || 730);

/** Persist a lead. Best-effort — never throws, never blocks lead capture. */
export async function saveLead(lead: Omit<Lead, "id" | "status"> & Partial<Pick<Lead, "id" | "status">>) {
  if (!kvConfigured) return;
  const record: Lead = {
    status: "new",
    id: `${Date.now()}_${Math.random().toString(36).slice(2, 10)}`,
    ...lead,
  };
  try {
    await redis(["HSET", KEY, record.id, JSON.stringify(record)]);
  } catch (e) {
    console.error("[lead] KV save failed:", e);
  }
}

function parse(value: unknown): Lead | null {
  try {
    return typeof value === "string" ? JSON.parse(value) : (value as Lead);
  } catch {
    return null;
  }
}

/** Delete every lead past the retention window. Best-effort. */
async function purgeExpired(entries: [string, unknown][]) {
  const cutoff = Date.now() - RETENTION_DAYS * 24 * 60 * 60 * 1000;
  const expired: string[] = [];
  for (const [id, value] of entries) {
    const lead = parse(value);
    const t = Date.parse(lead?.createdAt || "");
    // Leads without a parseable createdAt are left alone — we never guess.
    if (!Number.isNaN(t) && t < cutoff) expired.push(id);
  }
  if (expired.length) {
    try {
      await redis(["HDEL", KEY, ...expired]);
    } catch (e) {
      console.error("[lead] retention purge failed:", e);
    }
  }
  return new Set(expired);
}

export async function listLeads(): Promise<Lead[]> {
  if (!kvConfigured) return [];
  const entries = hgetallEntries(await redis(["HGETALL", KEY]));
  const expired = await purgeExpired(entries);
  const leads: Lead[] = [];
  for (const [id, value] of entries) {
    if (expired.has(id)) continue;
    const lead = parse(value);
    if (lead) leads.push({ ...lead, status: lead.status || "new" });
  }
  leads.sort((a, b) => String(b.createdAt || "").localeCompare(String(a.createdAt || "")));
  return leads;
}

export async function deleteLead(id: string) {
  await redis(["HDEL", KEY, id]);
}

export async function setLeadStatus(id: string, status: LeadStatus) {
  const raw = await redis(["HGET", KEY, id]);
  const lead = parse(raw);
  if (!lead) return false;
  lead.status = status;
  await redis(["HSET", KEY, id, JSON.stringify(lead)]);
  return true;
}

export function statsFor(leads: Lead[]) {
  const now = Date.now();
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);
  const inWindow = (l: Lead, from: number) => {
    const t = Date.parse(l.createdAt || "");
    return !Number.isNaN(t) && t >= from;
  };
  return {
    total: leads.length,
    today: leads.filter((l) => inWindow(l, startOfToday.getTime())).length,
    week: leads.filter((l) => inWindow(l, now - 7 * 24 * 60 * 60 * 1000)).length,
    withPhone: leads.filter((l) => l.phone).length,
    booked: leads.filter((l) => l.status === "booked" || l.status === "won").length,
  };
}
