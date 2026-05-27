// Thin client for the Responder (רב מסר) V2 API.
//
// Auth model: OAuth client_credentials → short-lived JWT Bearer (~14d).
// We cache the access token in module scope between invocations on the same
// serverless instance, with a safety margin before expiry.
//
// Docs: https://app.swaggerhub.com/apis/Responder/responder/V2.0

const BASE_URL = "https://graph.responder.live/v2";

type CachedToken = { token: string; expiresAt: number };
let cachedToken: CachedToken | null = null;

async function getAccessToken(): Promise<string | null> {
  const clientId = process.env.RESPONDER_CLIENT_ID;
  const clientSecret = process.env.RESPONDER_CLIENT_SECRET;
  const userToken = process.env.RESPONDER_USER_TOKEN;
  if (!clientId || !clientSecret || !userToken) return null;

  // Refresh 60s before expiry to avoid races on the boundary.
  if (cachedToken && Date.now() < cachedToken.expiresAt - 60_000) {
    return cachedToken.token;
  }

  const res = await fetch(`${BASE_URL}/oauth/token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      grant_type: "client_credentials",
      scope: "*",
      client_id: Number(clientId),
      client_secret: clientSecret,
      user_token: userToken,
    }),
  });

  if (!res.ok) return null;
  const data = (await res.json()) as { token?: string; expire?: number };
  if (!data.token) return null;

  const expiresAtMs = data.expire
    ? data.expire * 1000
    : Date.now() + 13 * 24 * 60 * 60 * 1000; // fall back to ~13d
  cachedToken = { token: data.token, expiresAt: expiresAtMs };
  return data.token;
}

export async function sendLeadToResponder(params: {
  name?: string;
  email?: string;
  phone?: string;
}): Promise<void> {
  const listIdRaw = process.env.RESPONDER_LIST_ID;
  if (!listIdRaw) return;
  const listId = Number(listIdRaw);
  if (!Number.isFinite(listId)) return;

  // Responder requires an email — skip silently if absent.
  if (!params.email) return;

  const accessToken = await getAccessToken();
  if (!accessToken) return;

  await fetch(`${BASE_URL}/subscribers`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: params.email,
      name: params.name || undefined,
      phone: params.phone || undefined,
      list_ids: [listId],
      // Update details if the subscriber already exists, and bump join date.
      override: true,
      rejoin: true,
    }),
  });
}
