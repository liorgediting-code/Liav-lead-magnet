// Green API (WhatsApp) helper for the dashboard's bulk sender.

/** Israeli-friendly normalisation: 050-123-4567 → 972501234567. */
export function normalizePhone(input: unknown) {
  const d = String(input || "").replace(/\D/g, "");
  if (!d) return "";
  if (d.startsWith("972")) return d;
  if (d.startsWith("0")) return `972${d.slice(1)}`;
  return d; // assume already international
}

// Israeli anti-spam law (ס' 30א לחוק התקשורת) requires every commercial
// message to carry a free, simple opt-out. Appended automatically unless the
// author already wrote one.
const OPT_OUT_LINE = 'להסרה מרשימת התפוצה — השב/י "הסר".';
export function withOptOut(message: string) {
  const m = String(message || "");
  if (/הסר/.test(m)) return m;
  return `${m}\n\n${OPT_OUT_LINE}`;
}

export function greenApiConfig() {
  return {
    idInstance: process.env.GREENAPI_ID,
    apiToken: process.env.GREENAPI_TOKEN,
    base: process.env.GREENAPI_BASE_URL || "https://api.green-api.com",
  };
}

export type SendResult = { phone: string; ok: boolean; error?: string };

/** Send a single WhatsApp text message. */
export async function sendWhatsapp(rawPhone: unknown, message: string): Promise<SendResult> {
  const { idInstance, apiToken, base } = greenApiConfig();
  const phone = normalizePhone(rawPhone);
  if (!idInstance || !apiToken) {
    return { phone, ok: false, error: "GREENAPI_ID / GREENAPI_TOKEN לא מוגדרים" };
  }
  if (!phone) return { phone: "", ok: false, error: "מספר לא תקין" };

  try {
    const resp = await fetch(
      `${base}/waInstance${idInstance}/sendMessage/${apiToken}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chatId: `${phone}@c.us`, message: withOptOut(message) }),
      }
    );
    const data = await resp.json().catch(() => ({}));
    return {
      phone,
      ok: resp.ok,
      error: resp.ok ? undefined : data.error || data.message || `status ${resp.status}`,
    };
  } catch (e) {
    return { phone, ok: false, error: e instanceof Error ? e.message : String(e) };
  }
}
