// Meta Pixel event tracking utility
declare global {
  interface Window {
    fbq?: (
      event: string,
      name: string,
      data?: Record<string, unknown>,
      options?: { eventID?: string }
    ) => void;
  }
}

export function trackLead(data?: { email?: string; phone?: string }, eventId?: string) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead", data, eventId ? { eventID: eventId } : undefined);
  }
}

export function trackPurchase(
  data?: { value?: number; currency?: string },
  eventId?: string
) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Purchase", data, eventId ? { eventID: eventId } : undefined);
  }
}

export function trackPageView() {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "PageView");
  }
}
