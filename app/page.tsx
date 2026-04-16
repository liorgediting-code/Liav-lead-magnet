import OptInForm from "@/components/OptInForm";
import FadeIn from "@/components/FadeIn";

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

export default function LandingPage() {
  return (
    <main className="flex-1">
      {/* HERO */}
      <section className="bg-[#111111] text-white">
        <div className="max-w-[600px] mx-auto px-5 py-16 md:py-24 text-center">
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">
            תבנית מכירה ב-8 שלבים
            <br />
            <span className="text-gold">עם תסריטים מוכנים</span>
          </h1>
          <p className="text-base text-white/60 mb-10">
            פתח, התאם לעסק שלך, ותתחיל לסגור יותר שיחות. חינם.
          </p>

          <div className="bg-white rounded-2xl p-6 max-w-sm mx-auto text-foreground">
            <OptInForm />
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <FadeIn>
        <section className="max-w-[600px] mx-auto px-5 py-14">
          <h2 className="text-lg font-bold text-foreground mb-6 text-center">
            מה יש בתוך התבנית
          </h2>

          <div className="grid grid-cols-2 gap-3 mb-8">
            {steps.map(({ n, title }) => (
              <div
                key={n}
                className={`step-card-${n} bg-accent/30 rounded-xl p-4 border border-border/20`}
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

          <p className="text-center text-sm text-muted-foreground">
            +30 תסריטים מוכנים שאפשר להשתמש בהם מחר
          </p>
        </section>
      </FadeIn>

      {/* PROOF */}
      <FadeIn>
        <section className="bg-navy text-white">
          <div className="max-w-[600px] mx-auto px-5 py-12">
            <div className="grid grid-cols-3 gap-6 text-center mb-10">
              {[
                { n: "8", label: "שלבים" },
                { n: "30+", label: "תסריטים" },
                { n: "500+", label: "בעלי עסקים" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-black text-gold">{s.n}</p>
                  <p className="text-xs text-white/50 mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            <blockquote className="bg-white/5 rounded-xl p-5 border border-white/10 border-s-2 border-s-primary">
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                ״הייתי סוגר 1 מ-7 לידים. אחרי שהתחלתי לעבוד עם התבנית, אני
                סוגר 1 מ-3.״
              </p>
              <footer className="text-xs text-white/40">
                — יועץ עסקי
              </footer>
            </blockquote>
          </div>
        </section>
      </FadeIn>

      {/* FINAL CTA */}
      <section className="max-w-sm mx-auto px-5 py-14 text-center">
        <h2 className="text-xl font-extrabold text-foreground mb-2">
          קבל את התבנית בחינם
        </h2>
        <p className="text-sm text-muted-foreground mb-6">
          30 שניות ← גישה מיידית
        </p>
        <div className="bg-white rounded-2xl p-6 border border-border/40 shadow-lg">
          <OptInForm />
        </div>
      </section>
    </main>
  );
}
