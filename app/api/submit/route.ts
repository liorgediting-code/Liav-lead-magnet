import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, phone, email, source } = await req.json();

  if (!phone) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const payload = {
    name: name || "",
    phone,
    email: email || "",
    source: source || "landing",
    timestamp: new Date().toISOString(),
  };

  const isOffer = source === "offer";
  const makeWebhook = isOffer
    ? process.env.MAKE_OFFER_WEBHOOK
    : process.env.MAKE_SIGNUP_WEBHOOK;
  const gasWebhook = isOffer
    ? process.env.GAS_OFFER_WEBHOOK
    : process.env.SHEETS_WEBHOOK_URL;
  const whatsappWebhook = process.env.WHATSAPP_WEBHOOK;

  const webhooks = [gasWebhook, makeWebhook, whatsappWebhook].filter(Boolean) as string[];

  await Promise.allSettled(
    webhooks.map((url) =>
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
    )
  );

  // Ingest to mail-sequence (email drip). Only for the main landing-page signup
  // (not the offer form on /guide), and only when we have an email address —
  // the drip is email-based, no email = nothing to send.
  const mailSeqUrl = process.env.MAIL_SEQUENCE_INGEST_URL;
  const mailSeqSecret = process.env.MAIL_SEQUENCE_INGEST_SECRET;
  if (!isOffer && email && mailSeqUrl && mailSeqSecret) {
    // Fire-and-forget — never block lead capture on this.
    fetch(mailSeqUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-ingest-secret": mailSeqSecret,
      },
      body: JSON.stringify({
        email,
        name: name || null,
        phone: phone || null,
        source: "liav-lead-magnet",
      }),
    }).catch(() => {});
  }

  return NextResponse.json({ success: true });
}
