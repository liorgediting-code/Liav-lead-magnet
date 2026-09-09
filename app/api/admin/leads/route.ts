import { NextResponse } from "next/server";
import { isAuthorized } from "@/lib/admin-auth";
import {
  LEAD_STATUSES,
  LeadStatus,
  SheetShapeError,
  listLeads,
  removeLead,
  setLeadStatus,
  sheetsConfigured,
  statsFor,
} from "@/lib/leads-store";

const unauthorized = () =>
  NextResponse.json({ error: "unauthorized" }, { status: 401 });

const notConfigured = () =>
  NextResponse.json(
    {
      error:
        "Google Sheets לא מחובר. הוסף GOOGLE_SHEET_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL ו-GOOGLE_PRIVATE_KEY.",
    },
    { status: 503 }
  );

/** Sheet errors carry a Hebrew message meant for the admin; anything else stays generic. */
function fail(e: unknown) {
  if (e instanceof SheetShapeError) {
    return NextResponse.json({ error: e.message }, { status: 409 });
  }
  console.error("[admin] sheet operation failed:", e);
  return NextResponse.json(
    { error: e instanceof Error ? e.message : "פעולה מול הגיליון נכשלה" },
    { status: 502 }
  );
}

export async function GET(req: Request) {
  if (!isAuthorized(req)) return unauthorized();
  if (!sheetsConfigured) return notConfigured();
  try {
    const leads = await listLeads();
    return NextResponse.json({ leads, stats: statsFor(leads) });
  } catch (e) {
    return fail(e);
  }
}

export async function PATCH(req: Request) {
  if (!isAuthorized(req)) return unauthorized();
  if (!sheetsConfigured) return notConfigured();

  const { row, status, phone, name } = await req.json().catch(() => ({}));
  if (!row || !LEAD_STATUSES.includes(status)) {
    return NextResponse.json({ error: "missing row or status" }, { status: 400 });
  }
  try {
    await setLeadStatus(Number(row), status as LeadStatus, String(phone ?? ""), String(name ?? ""));
    return NextResponse.json({ ok: true });
  } catch (e) {
    return fail(e);
  }
}

export async function DELETE(req: Request) {
  if (!isAuthorized(req)) return unauthorized();
  if (!sheetsConfigured) return notConfigured();

  const { row, phone, name } = await req.json().catch(() => ({}));
  if (!row) return NextResponse.json({ error: "missing row" }, { status: 400 });
  try {
    await removeLead(Number(row), String(phone ?? ""), String(name ?? ""));
    return NextResponse.json({ ok: true });
  } catch (e) {
    return fail(e);
  }
}
