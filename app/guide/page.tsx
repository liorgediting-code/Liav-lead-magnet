import type { Metadata } from "next";
import { CheckCircle, Target, Search, RotateCcw, PhoneCall } from "lucide-react";
import SalesGuide from "@/components/SalesGuide";

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
      <section className="bg-gradient-to-b from-navy to-[oklch(0.22_0.04_264)] text-white">
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
            תהליך המכירה <span className="text-gold">ב-8 שלבים</span>
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

      {/* Final Step — Celebrate */}
      <section className="max-w-[680px] mx-auto px-5 pb-4">
        <div className="bg-gradient-to-l from-primary/5 to-primary/15 rounded-2xl p-8 text-center border border-primary/20">
          <Target
            className="w-10 h-10 text-primary mx-auto mb-4"
            aria-hidden="true"
          />
          <h2 className="text-2xl font-extrabold text-foreground mb-2">
            לקוח נסלק!
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            אם עברת על כל 8 השלבים, יש לך עכשיו תהליך מכירה מובנה ומוכח.
            עכשיו, תתאים, תתרגל, ותסגור.
          </p>
        </div>
      </section>

      {/* CTA — שיחת פיצוח */}
      <section className="max-w-[680px] mx-auto px-5 py-14">
        <div className="bg-navy rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3 text-center">
            רוצה שנפצח את המכירות שלך
            <span className="text-gold"> ביחד?</span>
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto text-sm leading-relaxed text-center">
            שיחת פיצוח של 30-60 דקות, אחד על אחד, בחינם. לא שיחת מכירה.
            שיחה שתצא ממנה עם תמונה ברורה של מה שבור ואיך לתקן.
          </p>

          {/* What happens in the call */}
          <div className="flex flex-col gap-4 mb-10 max-w-lg mx-auto">
            {[
              {
                Icon: Search,
                title: "אבחון תהליך המכירה שלך",
                desc: "נעבור ביחד על השיחות שלך, נבין מה עובד, מה לא, ואיפה הלקוחות נופלים.",
              },
              {
                Icon: PhoneCall,
                title: "סימולציית מכירה חיה",
                desc: "ננסה שיחת מכירה בזמן אמת. אני אהיה הלקוח, ואתה תמכור לי. ככה נגלה בדיוק איפה אתה מאבד אותם.",
              },
              {
                Icon: RotateCcw,
                title: "תיקון + תסריט מותאם",
                desc: "ניקח את הנקודות שמצאנו ונתקן אותן על המקום. תצא עם תסריט מותאם לעסק שלך.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 bg-white/5 rounded-xl p-4 border border-white/10"
              >
                <item.Icon
                  className="w-5 h-5 text-gold mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-bold text-white mb-1">
                    {item.title}
                  </p>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={calendarLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-flex items-center justify-center h-14 px-10 bg-primary text-primary-foreground font-bold text-base rounded-xl hover:bg-primary/90 transition-colors duration-200 shadow-lg shadow-primary/20 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              קבע שיחת פיצוח בחינם
            </a>
            <p className="text-white/40 text-xs mt-4">
              ללא התחייבות. שיחה של 30-60 דקות, אחד על אחד.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
