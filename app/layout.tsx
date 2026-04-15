import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-heebo",
});

export const metadata: Metadata = {
  title: "תבנית המכירה שתסגור לך יותר עסקאות",
  description:
    "מדריך מעשי בחינם לכל בעל עסק שמוכר שירותים — 8 שלבים להפוך שיחות מכירה לעסקאות סגורות",
  openGraph: {
    title: "תבנית המכירה שתסגור לך יותר עסקאות",
    description: "מדריך מעשי בחינם לכל בעל עסק שמוכר שירותים",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
