import OptInForm from "@/components/OptInForm";
import FadeIn from "@/components/FadeIn";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import VideoCarousel from "@/components/VideoCarousel";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import FAQ from "@/components/FAQ";
import { Check, ChevronDown } from "lucide-react";

const steps = [
  { n: 1, title: "הצגה עצמית ויצירת אמון" },
  { n: 2, title: "היכרות + הסבר רזומה" },
  { n: 3, title: "שאלות אבחון" },
  { n: 4, title: "סגירת ביניים לפני השירות" },
  { n: 5, title: "הצגת המוצר" },
  { n: 6, title: "סגירת ביניים לפני המחיר" },
  { n: 7, title: "הצגת המחיר בביטחון" },
  { n: 8, title: "טיפול בהתנגדויות" },
];

function ScrollCue({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 py-6">
      <p className="text-sm font-bold text-foreground/70">{label}</p>
      <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center animate-bounce">
        <ChevronDown className="w-5 h-5 text-primary" aria-hidden="true" strokeWidth={3} />
      </div>
    </div>
  );
}

const benefits = [
  "תהליך מובנה ב-8 שלבים עם תסריטים מוכנים, כדי שאף פעם לא תישאר בלי מה להגיד",
  "תדע בדיוק מתי להציג את עצמך, מתי להציג את המוצר ואיך לומר את המחיר בלי להתבייש",
  'טיפול בכל התנגדות: "יקר לי", "צריך לחשוב", "לא עכשיו", כדי שלא תצא יותר משיחה בידיים ריקות',
  "אותה תבנית שאתה מקבל עכשיו, בדיוק מה שמביא לסגירות של עשרות אלפי שקלים בפועל",
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
            8 השלבים שאני ולקוחות שלי משתמשים בהם
            <br />
            <span className="text-primary">כדי לסגור עסקאות בעשרות אלפי שקלים</span>
            <br />
            <span className="text-4xl md:text-6xl">עכשיו בחינם</span>
          </h1>

          <p className="text-base text-white/55 text-center mb-10 leading-relaxed">
            כדי שתדע בדיוק מה להגיד בכל רגע בשיחה, ותגיע לסגירה מהר יותר
          </p>

          {/* Hero form card */}
          <div className="bg-card rounded-2xl p-6 max-w-sm mx-auto shadow-2xl shadow-black/50 mb-12">
            <p className="text-sm font-extrabold text-foreground mb-1 text-center">
              קבל את התבנית עכשיו
            </p>
            <p className="text-xs text-muted-foreground text-center mb-5 leading-relaxed">
              מעבר ישיר לתבנית + נשלח ישירות למייל
            </p>
            <OptInForm />
          </div>

          {/* Benefit bullets — start-aligned for personality */}
          <ul className="flex flex-col gap-3 max-w-md mx-auto">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" aria-hidden="true" />
                </span>
                <span className="text-sm text-white/75 leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Scroll cue */}
      <div className="bg-background border-t border-border/30">
        <div className="max-w-[640px] mx-auto px-5">
          <ScrollCue label="תראה מה בפנים" />
        </div>
      </div>

      {/* ── 2. WHAT'S INSIDE ── */}
      {/* No FadeIn — this section is just below the fold, animation here feels noise */}
      <section className="bg-background">
        <div className="max-w-[640px] mx-auto px-5 pb-12 md:pb-16 pt-2">
          <h2 className="text-xl md:text-2xl font-black text-foreground text-start mb-7 leading-tight">
            תבנית המכירה שעוזרת ללקוחות שלי{" "}
            <span className="text-primary">להכפיל את המחזורים שלהם</span>
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

      {/* Scroll cue */}
      <div className="bg-background">
        <div className="max-w-[640px] mx-auto px-5">
          <ScrollCue label="מי עומד מאחורי התבנית" />
        </div>
      </div>

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
              שעזרתי להם לסגור, שיפצרתי את תהליך המכירה ל-8 שלבים שאני ולקוחות שלי
              משתמשים בהם כדי לסגור עסקאות{" "}
              <strong className="text-primary font-black">בעשרות אלפי שקלים</strong>.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* Scroll cue (on navy) */}
      <div className="bg-navy">
        <div className="max-w-[640px] mx-auto px-5">
          <div className="flex flex-col items-center gap-2 py-6">
            <p className="text-sm font-bold text-white/80">תראה הוכחות מהשטח</p>
            <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center animate-bounce">
              <ChevronDown className="w-5 h-5 text-primary" aria-hidden="true" strokeWidth={3} />
            </div>
          </div>
        </div>
      </div>

      {/* ── 4. PHOTO TESTIMONIALS ── */}
      <FadeIn>
        <section className="bg-background">
          <div className="max-w-[640px] mx-auto px-5 py-16 md:py-20">
            <h2 className="text-xl font-extrabold text-foreground text-start mb-8">
              הוכחות מהשטח
            </h2>
            <TestimonialCarousel />
          </div>
        </section>
      </FadeIn>

      {/* Scroll cue */}
      <div className="bg-background">
        <div className="max-w-[640px] mx-auto px-5">
          <ScrollCue label="עוד המלצות בוידאו" />
        </div>
      </div>

      {/* ── 5. VIDEO TESTIMONIALS ── */}
      <FadeIn>
        <section className="bg-background border-t border-border">
          <div className="max-w-[640px] mx-auto px-5 py-16 md:py-20">
            <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-3">
              סרטוני המלצה
            </p>
            <h2 className="text-xl font-extrabold text-foreground text-start mb-8">
              מה קורה אחרי שמשתמשים בתבנית
            </h2>
            <VideoCarousel />
          </div>
        </section>
      </FadeIn>

      {/* Scroll cue */}
      <div className="bg-background">
        <div className="max-w-[640px] mx-auto px-5">
          <ScrollCue label="יש לך שאלה? כנראה ענינו עליה" />
        </div>
      </div>

      {/* ── 6. FAQ ── */}
      <FadeIn>
        <section className="bg-background border-t border-border">
          <div className="max-w-[640px] mx-auto px-5 py-16 md:py-20">
            <h2 className="text-xl font-extrabold text-foreground text-start mb-6">
              שאלות נפוצות
            </h2>
            <FAQ />
          </div>
        </section>
      </FadeIn>

      {/* Scroll cue */}
      <div className="bg-background">
        <div className="max-w-[640px] mx-auto px-5">
          <ScrollCue label="מוכן לקבל את התבנית?" />
        </div>
      </div>

      {/* ── 7. FINAL CTA ── */}
      <section className="bg-navy">
        <div className="max-w-sm mx-auto px-5 py-20 md:py-24 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-2">
            מוכן לסגור יותר עסקאות?
          </h2>
          <p className="text-sm text-white/50 mb-8">
            30 שניות בלבד, גישה מיידית ושליחה למייל
          </p>
          <div className="bg-card rounded-2xl p-6 shadow-2xl shadow-black/50">
            <OptInForm />
          </div>
        </div>
      </section>

      <ExitIntentPopup />
    </main>
  );
}
