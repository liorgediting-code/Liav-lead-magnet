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
      <section className="bg-navy">
        <div className="max-w-[640px] mx-auto px-5 py-20 md:py-28">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/25 rounded-full px-4 py-1.5 text-sm font-semibold text-primary">
              <span
                className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block"
                aria-hidden="true"
              />
              גישה מיידית • בחינם לחלוטין
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4 text-center text-white">
            תבנית המכירה שעזרה ללקוחות שלי{" "}
            <span className="text-primary">להכפיל ולשלש</span> את ההכנסות
          </h1>

          <p className="text-base text-white/55 text-center mb-10 leading-relaxed">
            איך להעלות את האמון בשיחה ולהגיע לסגירה מהר יותר
          </p>

          {/* Benefit bullets — start-aligned for personality */}
          <ul className="flex flex-col gap-3 mb-12 max-w-md mx-auto">
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
          <div className="bg-card rounded-2xl p-6 max-w-sm mx-auto shadow-2xl shadow-black/50">
            <p className="text-sm font-extrabold text-foreground mb-1 text-center">
              שלושה שדות וזה הכל
            </p>
            <p className="text-xs text-muted-foreground text-center mb-5 leading-relaxed">
              גישה מיידית לתבנית +{" "}
              <strong className="text-foreground">שליחה ישירה למייל</strong>
            </p>
            <OptInForm />
          </div>
        </div>
      </section>

      {/* ── 2. WHAT'S INSIDE ── */}
      {/* No FadeIn — this section is just below the fold, animation here feels noise */}
      <section className="bg-background">
        <div className="max-w-[640px] mx-auto px-5 py-12 md:py-16">
          <h2 className="text-xl font-extrabold text-foreground text-start mb-7">
            8 שלבים מהפתיחה ועד הסגירה
          </h2>

          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
            {steps.map(({ n, title }) => (
              <div key={n} className="flex items-center gap-3 py-3">
                <span
                  className={`step-badge-${n} flex-shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full text-white text-xs font-bold`}
                >
                  {n}
                </span>
                <p className="text-sm font-medium text-foreground leading-snug">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. CREDENTIALS ── */}
      <FadeIn>
        <section className="bg-navy">
          <div className="max-w-[640px] mx-auto px-5 py-16 md:py-20">
            <p className="text-xs font-bold tracking-widest text-primary/60 uppercase mb-6">
              מי מאחורי התבנית
            </p>
            <p className="text-lg md:text-xl font-semibold text-white/75 leading-relaxed">
              אחרי{" "}
              <strong className="text-white font-black">5 שנות ניסיון</strong>{" "}
              בעולם המכירות ו
              <strong className="text-white font-black">עשרות בעלי עסקים</strong>{" "}
              שעזרתי להם לסגור — שיפצרתי את תהליך המכירה ל-8 שלבים שאני ולקוחותיי
              משתמשים בהם כדי לסגור עסקאות{" "}
              <strong className="text-primary font-black">בעשרות אלפי ₪</strong>.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* ── 4. PHOTO TESTIMONIALS ── */}
      <FadeIn>
        <section className="bg-background">
          <div className="max-w-[640px] mx-auto px-5 py-16 md:py-20">
            <h2 className="text-xl font-extrabold text-foreground text-start mb-8">
              מה אומרים לקוחות
            </h2>
            <TestimonialCarousel />
          </div>
        </section>
      </FadeIn>

      {/* ── 5. VIDEO TESTIMONIALS ── */}
      <FadeIn>
        <section className="bg-background border-t border-border">
          <div className="max-w-[640px] mx-auto px-5 py-16 md:py-20">
            <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-3">
              סרטוני המלצה
            </p>
            <h2 className="text-xl font-extrabold text-foreground text-start mb-8">
              לקוחות מספרים
            </h2>
            <VideoCarousel />
          </div>
        </section>
      </FadeIn>

      {/* ── 6. FINAL CTA ── */}
      <section className="bg-navy">
        <div className="max-w-sm mx-auto px-5 py-20 md:py-24 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-2">
            מוכן לסגור יותר עסקאות?
          </h2>
          <p className="text-sm text-white/50 mb-8">
            30 שניות בלבד — גישה מיידית ושליחה למייל
          </p>
          <div className="bg-card rounded-2xl p-6 shadow-2xl shadow-black/50">
            <OptInForm />
          </div>
        </div>
      </section>
    </main>
  );
}
