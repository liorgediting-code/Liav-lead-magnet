import type { Metadata } from "next";
import { CheckCircle, Search, PhoneCall, RotateCcw } from "lucide-react";
import SalesGuide from "@/components/SalesGuide";
import NamePhonePrompt from "@/components/NamePhonePrompt";

export const metadata: Metadata = {
  title: "המדריך שלך — תהליך מכירה ב-8 שלבים",
  description: "תבנית מכירה מוכנה עם תסריטים לכל שלב בשיחת המכירה",
  robots: "noindex",
};

const callFeatures = [
  {
    Icon: Search,
    title: "נבין יחד איפה השיחות שלך נופלות",
    desc: "נעבור על תהליך המכירה שלך ונאתר בדיוק באיזה שלב הלקוחות מתנתקים — ולמה.",
  },
  {
    Icon: PhoneCall,
    title: "סימולציית שיחת מכירה חיה",
    desc: "אני אהיה הלקוח, אתה תמכור לי. נראה בזמן אמת במה אתה מתקשה ומה אפשר לשפר.",
  },
  {
    Icon: RotateCcw,
    title: "תצא עם תסריט מותאם ונקודות שיפור ברורות",
    desc: "לא עצות כלליות. תסריט שמתאים לעסק שלך ורשימה ספציפית של מה לתקן.",
  },
];

export default function GuidePage() {
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
            תבנית מכירה <span className="text-primary">מותאמת אליי</span>
          </h1>
          <p className="text-base text-white/70 max-w-lg mx-auto">
            תהליך המכירה האפקטיבי שלי ב-8 שלבים — עם תסריטים מוכנים לכל רגע בשיחה.
          </p>
        </div>
      </section>

      {/* Guide Content */}
      <section className="max-w-[680px] mx-auto px-5 py-10">
        <SalesGuide />
      </section>

      {/* פגישת פיצוח */}
      <section className="bg-navy">
        <div className="max-w-[680px] mx-auto px-5 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3 text-center">
            רוצה לדעת בדיוק{" "}
            <span className="text-primary">איפה אתה נופל בשיחות?</span>
          </h2>
          <p className="text-white/55 text-sm text-center leading-relaxed mb-10 max-w-md mx-auto">
            פגישת פיצוח אחד על אחד — 30 דקות שבהן נעבור על השיחות שלך, נעשה סימולציה חיה, ותצא עם תמונה ברורה של מה לשנות.
          </p>

          <div className="flex flex-col gap-4 mb-10 max-w-md mx-auto">
            {callFeatures.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 bg-white/[0.05] rounded-2xl p-5 border border-white/10"
              >
                <item.Icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold text-white mb-1">{item.title}</p>
                  <p className="text-xs text-white/55 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/[0.07] rounded-2xl p-6 max-w-sm mx-auto border border-white/10">
            <p className="text-sm font-extrabold text-white text-center mb-1">
              השאר שם ומספר — נחזור אליך
            </p>
            <p className="text-xs text-white/40 text-center mb-5">
              ללא עלות. ללא התחייבות.
            </p>
            <NamePhonePrompt />
          </div>
        </div>
      </section>
    </main>
  );
}
