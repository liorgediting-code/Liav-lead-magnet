import type { NextConfig } from "next";

// CSP is intentionally omitted here. The page relies on third-party scripts
// (Meta Pixel, Clarity) and cross-origin fetches to connect.facebook.net /
// clarity.ms — a too-strict CSP would silently block pixel/lead events and
// degrade attribution. Roll CSP out via `Content-Security-Policy-Report-Only`
// in staging first, then promote.
const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
