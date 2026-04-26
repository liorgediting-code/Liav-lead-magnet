import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import SalesGuide from "@/components/SalesGuide";
import OfferPanel from "@/components/OfferPanel";
import PhonePrompt from "@/components/PhonePrompt";

export const metadata: Metadata = {
  title: "המדריך שלך — תהליך מכירה ב-8 שלבים",
  description: "תבנית מכירה מוכנה עם תסריטים לכל שלב בשיחת המכירה",
  robots: "noindex",
};

export default function GuidePage() {
  const calendarLink = process.env.CALENDAR_LINK || "#";

  return (
    <main className="flex-1">
      {/* Header */}
      <section className="bg-gradient-to-b from-navy to-[oklch(0.22_0.04_55)] text-white">
        <div className="max-w-[680px] mx-auto px-5 py-14 text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/15 border border-green-400/20 rounded-full px-4 py-1.5 mb-6">
            <CheckCircle
              className="w-4 h-4 text-green-400"
              aria-hidden="true"
            />
            <span className="text-green-400 text-sm font-medium">
              הגישה שלך אושרה
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            תהליך המכירה <span className="text-primary">ב-8 שלבים</span>
          </h1>
          <p className="text-base text-white/70 max-w-lg mx-auto">
            להלן התבנית המלאה עם תסריטים מוכנים שאפשר להתאים מיידית לעסק שלך.
            תעבור שלב אחרי שלב ותתרגל.
          </p>
        </div>
      </section>

      {/* Guide Content */}
      <section className="max-w-[680px] mx-auto px-5 py-10">
        <SalesGuide />
      </section>

      {/* Celebrate */}
      <section className="max-w-[680px] mx-auto px-5 pb-4">
        <div className="bg-gradient-to-l from-primary/5 to-primary/15 rounded-2xl p-8 text-center border border-primary/20">
          <p className="text-3xl mb-3" aria-hidden="true">🎯</p>
          <h2 className="text-2xl font-extrabold text-foreground mb-2">
            לקוח נסלק!
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            אם עברת על כל 8 השלבים, יש לך עכשיו תהליך מכירה מובנה ומוכח.
            עכשיו, תתאים, תתרגל, ותסגור.
          </p>
        </div>
      </section>

      {/* Phone Prompt */}
      <section className="max-w-[680px] mx-auto px-5 pb-8">
        <div className="bg-navy rounded-2xl p-6 text-center">
          <h2 className="text-lg font-extrabold text-white mb-1">
            רוצה סקירה אישית של התבנית?
          </h2>
          <p className="text-sm text-white/60 mb-4">
            השאר מספר ונחזור אליך
          </p>
          <PhonePrompt />
        </div>
      </section>

      {/* Offer + Social Proof + CTA */}
      <OfferPanel calendarLink={calendarLink} />
    </main>
  );
}
