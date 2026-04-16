import OptInForm from "@/components/OptInForm";
import FadeIn from "@/components/FadeIn";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import VideoCarousel from "@/components/VideoCarousel";
import { Check } from "lucide-react";

const steps = [
  { n: 1, title: "פתיחה ויצירת אמון" },
  { n: 2, title: "היכרות + בניית סמכות" },
  { n: 3, title: "שאלות אבחון" },
  { n: 4, title: "סגירת ביניים" },
  { n: 5, title: "הצגת השירות" },
  { n: 6, title: "הצגת מחיר בביטחון" },
  { n: 7, title: "טיפול בהתנגדויות" },
  { n: 8, title: "סגירה ופולואפ" },
];

const benefits = [
  "תהליך מכירה מובנה ב-8 שלבים עם תסריטים מוכנים לכל מצב",
  'טיפול בכל התנגדות — "יקר לי", "צריך לחשוב", "לא עכשיו"',
  "בדיוק מה שהלקוחות שלי ואני משתמשים בו כדי לסגור בעשרות אלפי ₪",
];

export default function LandingPage() {
  return (
    <main className="flex-1">
      {/* ── 1. HERO ── */}
      <section className="bg-[#0D1117]">
        <div className="max-w-[640px] mx-auto px-5 py-16 md:py-24">
          {/* Badge */}
          <div className="flex justify-center mb-7">
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/25 rounded-full px-4 py-1.5 text-sm font-semibold text-primary">
              <span
                className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block"
                aria-hidden="true"
              />
              מוגבל ל-5 לקוחות חדשים בחודש
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-5 text-center text-white">
            תבנית המכירה שעזרה ללקוחות שלי{" "}
            <span className="text-primary">להכפיל ולשלש</span> את ההכנסות
          </h1>

          <p className="text-base text-white/55 text-center mb-8 leading-relaxed">
            איך להעלות את האמון בשיחה ולהגיע לסגירה מהר יותר
          </p>

          {/* Benefit bullets */}
          <ul className="flex flex-col gap-3 mb-10 max-w-md mx-auto">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" aria-hidden="true" />
                </span>
                <span className="text-sm text-white/75 leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>

          {/* Hero form card */}
          <div className="bg-white rounded-2xl p-6 max-w-sm mx-auto shadow-2xl shadow-black/50">
            <p className="text-sm font-extrabold text-foreground mb-1 text-center">
              קבל את התבנית בחינם
            </p>
            <p className="text-xs text-muted-foreground text-center mb-5 leading-relaxed">
              תשאירו פרטים ותעברו ישר לתבנית המכירה,{" "}
              <strong className="text-foreground">
                בנוסף תקבלו אותה ישר למייל!
              </strong>
            </p>
            <OptInForm />
          </div>
        </div>
      </section>

      {/* ── 2. WHAT'S INSIDE ── */}
      <FadeIn>
        <section className="bg-white">
          <div className="max-w-[640px] mx-auto px-5 py-14">
            <p className="text-xs font-bold tracking-widest text-muted-foreground text-center uppercase mb-2">
              מה יש בתוך התבנית
            </p>
            <h2 className="text-xl font-extrabold text-foreground text-center mb-8">
              8 שלבים מהפתיחה ועד הסגירה
            </h2>

            <div className="grid grid-cols-2 gap-3">
              {steps.map(({ n, title }) => (
                <div
                  key={n}
                  className={`step-card-${n} bg-slate-50 rounded-xl p-4 border border-slate-100`}
                >
                  <span
                    className={`step-badge-${n} inline-flex items-center justify-center w-6 h-6 rounded-full text-white text-xs font-bold mb-2`}
                  >
                    {n}
                  </span>
                  <p className="text-sm font-medium text-foreground">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── 3. CREDENTIALS ── */}
      <FadeIn>
        <section className="bg-slate-50">
          <div className="max-w-[640px] mx-auto px-5 py-14">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { n: "5", label: "שנים בעולם המכירות" },
                { n: "8", label: "שלבים בתהליך" },
                { n: "עשרות", label: "בעלי עסקים השתמשו" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white rounded-2xl p-4 text-center border border-slate-200 shadow-sm"
                >
                  <p className="text-2xl md:text-3xl font-black text-primary leading-none mb-1">
                    {s.n}
                  </p>
                  <p className="text-xs text-muted-foreground leading-snug">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Personal statement */}
            <div className="bg-[#0D1117] rounded-2xl p-6 text-center border border-white/5">
              <p className="text-sm md:text-base leading-relaxed text-white/75">
                אחרי 5 שנים בעולם המכירות שיפצרתי את תבנית המכירה וחידדתי
                אותה לאורך השנים עד למצב העכשווי שלה, בו{" "}
                <strong className="text-white">
                  כל הלקוחות שלי ואני משתמשים בה כדי לסגור עסקאות בעשרות
                  אלפי שקלים.
                </strong>
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── 4. PHOTO TESTIMONIALS ── */}
      <FadeIn>
        <section className="bg-white">
          <div className="max-w-[640px] mx-auto px-5 py-14">
            <p className="text-xs font-bold tracking-widest text-muted-foreground text-center uppercase mb-2">
              מה אומרים עליי
            </p>
            <h2 className="text-xl font-extrabold text-foreground text-center mb-8">
              המלצות מלקוחות
            </h2>
            <TestimonialCarousel />
          </div>
        </section>
      </FadeIn>

      {/* ── 5. VIDEO TESTIMONIALS ── */}
      <FadeIn>
        <section className="bg-slate-50">
          <div className="max-w-[640px] mx-auto px-5 py-14">
            <p className="text-xs font-bold tracking-widest text-muted-foreground text-center uppercase mb-2">
              סרטוני המלצה
            </p>
            <h2 className="text-xl font-extrabold text-foreground text-center mb-8">
              לקוחות מספרים
            </h2>
            <VideoCarousel />
          </div>
        </section>
      </FadeIn>

      {/* ── 6. FINAL CTA ── */}
      <section className="bg-[#0D1117]">
        <div className="max-w-sm mx-auto px-5 py-16 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-2">
            מוכן לסגור יותר עסקאות?
          </h2>
          <p className="text-sm text-white/50 mb-8">
            30 שניות ← גישה מיידית לתבנית + שליחה למייל
          </p>
          <div className="bg-white rounded-2xl p-6 shadow-2xl shadow-black/50">
            <OptInForm />
          </div>
        </div>
      </section>
    </main>
  );
}
