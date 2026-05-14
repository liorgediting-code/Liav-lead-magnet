import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";

type Attribution = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  fbclid?: string;
  gclid?: string;
  referrer?: string;
  landing_page?: string;
};

function sha256(value: string) {
  return createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

function parseFbpFbc(cookieHeader: string | null) {
  if (!cookieHeader) return { fbp: undefined, fbc: undefined };
  const cookies = Object.fromEntries(
    cookieHeader.split(";").map((c) => {
      const [k, ...v] = c.trim().split("=");
      return [k, v.join("=")];
    })
  );
  return { fbp: cookies._fbp, fbc: cookies._fbc };
}

async function sendCAPI(params: {
  eventName: "Lead" | "Purchase";
  eventId: string;
  email?: string;
  phone?: string;
  name?: string;
  attribution: Attribution;
  fbp?: string;
  fbc?: string;
  clientIp?: string;
  userAgent?: string;
  sourceUrl?: string;
}) {
  const pixelId = process.env.META_PIXEL_ID;
  const token = process.env.META_CAPI_TOKEN;
  if (!pixelId || !token) return;

  const phoneDigits = params.phone?.replace(/\D/g, "");
  const phoneIntl = phoneDigits?.startsWith("0")
    ? `972${phoneDigits.slice(1)}`
    : phoneDigits;

  const user_data: Record<string, unknown> = {};
  if (params.email) user_data.em = [sha256(params.email)];
  if (phoneIntl) user_data.ph = [sha256(phoneIntl)];
  if (params.name) {
    const parts = params.name.trim().split(/\s+/);
    user_data.fn = [sha256(parts[0])];
    if (parts.length > 1) user_data.ln = [sha256(parts.slice(1).join(" "))];
  }
  if (params.fbp) user_data.fbp = params.fbp;
  if (params.fbc) {
    user_data.fbc = params.fbc;
  } else if (params.attribution.fbclid) {
    user_data.fbc = `fb.1.${Date.now()}.${params.attribution.fbclid}`;
  }
  if (params.clientIp) user_data.client_ip_address = params.clientIp;
  if (params.userAgent) user_data.client_user_agent = params.userAgent;

  const body = {
    data: [
      {
        event_name: params.eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: params.eventId,
        event_source_url: params.sourceUrl,
        action_source: "website",
        user_data,
        custom_data:
          params.eventName === "Purchase"
            ? { currency: "ILS", value: 0 }
            : {
                utm_source: params.attribution.utm_source,
                utm_medium: params.attribution.utm_medium,
                utm_campaign: params.attribution.utm_campaign,
              },
      },
    ],
  };

  try {
    await fetch(
      `https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${token}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  } catch {
    // never block lead capture on pixel errors
  }
}

export async function POST(req: NextRequest) {
  const { name, phone, email, source, attribution, eventId } = await req.json();

  if (!phone) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const attr: Attribution = attribution || {};

  const payload = {
    name: name || "",
    phone,
    email: email || "",
    source: source || "landing",
    timestamp: new Date().toISOString(),
    utm_source: attr.utm_source || "",
    utm_medium: attr.utm_medium || "",
    utm_campaign: attr.utm_campaign || "",
    utm_content: attr.utm_content || "",
    utm_term: attr.utm_term || "",
    fbclid: attr.fbclid || "",
    gclid: attr.gclid || "",
    referrer: attr.referrer || "",
    landing_page: attr.landing_page || "",
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

  // Conversions API — server-side mirror of the browser pixel event
  if (eventId) {
    const { fbp, fbc } = parseFbpFbc(req.headers.get("cookie"));
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      undefined;
    const userAgent = req.headers.get("user-agent") || undefined;
    const origin = req.headers.get("origin") || "";
    const sourceUrl = origin + (attr.landing_page || (isOffer ? "/guide" : "/"));

    await sendCAPI({
      eventName: isOffer ? "Purchase" : "Lead",
      eventId,
      email: email || undefined,
      phone: phone || undefined,
      name: name || undefined,
      attribution: attr,
      fbp,
      fbc,
      clientIp,
      userAgent,
      sourceUrl,
    });
  }

  // Ingest to mail-sequence (email drip). Only for the main landing-page signup
  // (not the offer form on /guide), and only when we have an email address —
  // the drip is email-based, no email = nothing to send.
  const mailSeqUrl = process.env.MAIL_SEQUENCE_INGEST_URL;
  const mailSeqSecret = process.env.MAIL_SEQUENCE_INGEST_SECRET;
  if (!isOffer && email && mailSeqUrl && mailSeqSecret) {
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
        utm_source: attr.utm_source || null,
        utm_medium: attr.utm_medium || null,
        utm_campaign: attr.utm_campaign || null,
        utm_content: attr.utm_content || null,
      }),
    }).catch(() => {});
  }

  return NextResponse.json({ success: true });
}
