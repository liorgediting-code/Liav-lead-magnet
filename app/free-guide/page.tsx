import type { Metadata } from "next";
import { Check } from "lucide-react";
import OptInForm from "@/components/OptInForm";

export const metadata: Metadata = {
  title: "איך להכפיל את המכירות בעסק שירות",
  description:
    "מדריך קריאה קצר לבעלי עסקי שירות: איך לנהל שיחת מכירה שמסתיימת בסגירה, בלי סקריפטים ובלי לחץ.",
  openGraph: {
    title: "איך להכפיל את המכירות בעסק שירות",
    description:
      "מדריך קריאה קצר לבעלי עסקי שירות: איך לנהל שיחת מכירה שמסתיימת בסגירה.",
    locale: "he_IL",
    type: "website",
  },
};

const inside = [
  "למה השיטות הישנות של שכנוע ולחץ דווקא מבריחות היום לקוחות",
  "שלושת חוקי הברזל של שיחה שמגיעה לסגירה: הקשבה, שאלה בשאלה, איסוף מידע",
  "איך להחזיר אליך את ההובלה בשיחה בלי להישמע דוחף",
  "איך להגיד את המחיר בביטחון, כהשקעה, בלי להתנצל עליו",
];

export default function FreeGuideLandingPage() {
  return (
    <main className="flex-1 bg-navy grain-dark relative overflow-hidden">
      {/* soft radial glow, off-center */}
      <div
        className="absolute -top-32 left-[-15%] w-[560px] h-[560px] rounded-full opacity-25 blur-[130px] pointer-events-none"
        style={{ background: "var(--primary)" }}
        aria-hidden="true"
      />

      <section className="relative max-w-[1000px] mx-auto px-5 py-16 md:py-24">
        <div className="grid md:grid-cols-[1.15fr_1fr] gap-12 md:gap-14 items-start">
          {/* טקסט */}
          <div>
            <div className="flex items-center gap-3 mb-7">
              <span className="w-8 h-px bg-primary/60" aria-hidden="true" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary">
                מדריך חינם
              </span>
              <span className="text-white/20" aria-hidden="true">
                ·
              </span>
              <span className="text-sm text-white/40">6 דקות קריאה</span>
            </div>

            <h1 className="font-display text-[clamp(1.9rem,7vw,2.6rem)] md:text-5xl leading-[1.1] font-black text-white text-balance mb-5">
              איך להכפיל את המכירות
              <br />
              <span className="text-primary">בעסק שירות</span>
            </h1>

            <p className="text-lg text-white/65 leading-relaxed max-w-lg">
              מדריך קריאה קצר על הדרך שבה מנהלים שיחת מכירה שמסתיימת בסגירה, מתוך
              הקשבה ולא מתוך לחץ. בלי סקריפטים, בלי טריקים, ובלי להישמע כמו מישהו
              שאתה לא.
            </p>

            <ul className="flex flex-col gap-3.5 mt-9 max-w-lg">
              {inside.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  <span className="text-[15px] text-white/75 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

          </div>

          {/* טופס */}
          <div className="bg-card rounded-2xl p-6 md:p-7 shadow-2xl shadow-black/50 md:sticky md:top-8">
            <p className="text-base font-extrabold text-foreground mb-1">
              קבל את המדריך
            </p>
            <p className="text-xs text-muted-foreground mb-5 leading-relaxed">
              שני פרטים והמדריך נפתח לך מיד
            </p>
            <OptInForm
              redirectTo="/guide"
              submitLabel="קבל את המדריך"
              requirePhone
              collectEmail={false}
            />
            <p className="mt-4 text-[11px] text-muted-foreground leading-relaxed">
              המדריך הוא חומר לימודי כללי ואינו מהווה ייעוץ אישי או התחייבות לתוצאות עסקיות.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
