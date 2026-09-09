import { NextResponse } from "next/server";
import { isAuthorized } from "@/lib/admin-auth";
import { greenApiConfig, sendWhatsapp } from "@/lib/whatsapp";

// Allow up to 60s so a full list can be sent sequentially.
export const maxDuration = 60;

type Recipient = { name?: string; phone?: string };

export async function POST(req: Request) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const { idInstance, apiToken } = greenApiConfig();
  if (!idInstance || !apiToken) {
    return NextResponse.json(
      { error: "GREENAPI_ID / GREENAPI_TOKEN לא מוגדרים בשרת" },
      { status: 500 }
    );
  }

  const body = await req.json().catch(() => ({}));
  const message = String(body?.message || "").trim();
  const recipients: Recipient[] = Array.isArray(body?.recipients) ? body.recipients : [];
  if (!message) return NextResponse.json({ error: "empty message" }, { status: 400 });
  if (!recipients.length) {
    return NextResponse.json({ error: "no recipients" }, { status: 400 });
  }

  const results = [];
  for (const r of recipients) {
    // {שם} is substituted per recipient so one send covers the whole list.
    const personal = message.replace(/\{\s*(שם|name)\s*\}/g, r.name || "");
    const result = await sendWhatsapp(r.phone, personal);
    results.push({ ...result, phone: result.phone || r.phone || "", name: r.name || "" });
    // gentle throttle to stay within Green API rate limits
    await new Promise((resolve) => setTimeout(resolve, 300));
  }

  return NextResponse.json({
    ok: true,
    sent: results.filter((r) => r.ok).length,
    total: results.length,
    results,
  });
}
