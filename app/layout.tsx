import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import Script from "next/script";
import AttributionCapture from "@/components/AttributionCapture";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-heebo",
});

export const metadata: Metadata = {
  title: "תבנית המכירה שתסגור לך יותר עסקאות",
  description:
    "מדריך מעשי בחינם לכל בעל עסק שמוכר שירותים. 8 שלבים להפוך שיחות מכירה לעסקאות סגורות",
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
      <head>
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1673494020504141');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1673494020504141&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "wqhz9q56zv");
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <AttributionCapture />
        {children}
      </body>
    </html>
  );
}
