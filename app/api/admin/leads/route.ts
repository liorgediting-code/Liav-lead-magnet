import { NextResponse } from "next/server";
import { isAuthorized } from "@/lib/admin-auth";
import { kvConfigured } from "@/lib/kv";
import {
  LEAD_STATUSES,
  LeadStatus,
  deleteLead,
  listLeads,
  setLeadStatus,
  statsFor,
} from "@/lib/leads-store";

const unauthorized = () =>
  NextResponse.json({ error: "unauthorized" }, { status: 401 });

const notConfigured = () =>
  NextResponse.json(
    { error: "אין מסד נתונים מחובר. חבר Upstash Redis ב-Vercel → Storage." },
    { status: 503 }
  );

export async function GET(req: Request) {
  if (!isAuthorized(req)) return unauthorized();
  if (!kvConfigured) return notConfigured();

  const leads = await listLeads();
  return NextResponse.json({ leads, stats: statsFor(leads) });
}

export async function PATCH(req: Request) {
  if (!isAuthorized(req)) return unauthorized();
  if (!kvConfigured) return notConfigured();

  const { id, status } = await req.json().catch(() => ({}));
  if (!id || !LEAD_STATUSES.includes(status)) {
    return NextResponse.json({ error: "missing id or status" }, { status: 400 });
  }
  const ok = await setLeadStatus(String(id), status as LeadStatus);
  if (!ok) return NextResponse.json({ error: "lead not found" }, { status: 404 });
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: Request) {
  if (!isAuthorized(req)) return unauthorized();
  if (!kvConfigured) return notConfigured();

  const { id } = await req.json().catch(() => ({}));
  if (!id) return NextResponse.json({ error: "missing id" }, { status: 400 });
  await deleteLead(String(id));
  return NextResponse.json({ ok: true });
}
