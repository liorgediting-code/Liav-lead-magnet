// Meta Pixel event tracking utility
declare global {
  interface Window {
    fbq?: (event: string, name: string, data?: Record<string, unknown>) => void;
  }
}

export function trackLead(data?: { email?: string; phone?: string }) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead", data);
  }
}

export function trackPurchase(data?: { value?: number; currency?: string }) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Purchase", data);
  }
}

export function trackPageView() {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "PageView");
  }
}
