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

  const webhooks = [
    process.env.SHEETS_WEBHOOK_URL,
    makeWebhook,
  ].filter(Boolean) as string[];

  await Promise.allSettled(
    webhooks.map((url) =>
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
    )
  );

  return NextResponse.json({ success: true });
}
