import { PlayCircle, Target } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/liavcohen798/30min";

const objections = [
  "בלי לרדוף אחרי פולואפים שבועות שלמים",
  "בלי להישמע כמו איש המכירות שאתה שונא",
  "וגם אם אחוזי הסגירה שלך נמוכים היום, ואתה פשוט שונא שיחות מכירה",
];

const callPoints = [
  {
    Icon: PlayCircle,
    title: "סימולציית מכירה חיה על המוצר שלך",
    desc: "אתה מוכר, אני הלקוח. תרגיש על הגוף איך מקשיבים, משיבים בשאלה ומובילים לסגירה.",
  },
  {
    Icon: Target,
    title: "נאבחן איפה בדיוק אתה מאבד לידים",
    desc: "ניקח את השיחות האמיתיות שלך, נמצא את הנקודה שבה הן נתקעות, ונבנה יחד את הדרך לסגור כבר בראשונה.",
  },
];

export function DiagnosisCTA() {
  return (
    <section className="relative bg-navy grain-dark overflow-hidden">
      {/* off-center glow */}
      <div
        className="absolute -top-32 right-[-15%] w-[600px] h-[600px] rounded-full opacity-25 blur-[140px] pointer-events-none"
        style={{ background: "var(--primary)" }}
        aria-hidden="true"
      />
      <div className="relative max-w-[960px] mx-auto px-5 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[300px_1fr] md:gap-14 items-start">
          {/* תמונה של ליאב */}
          <div className="mx-auto w-full max-w-[300px] md:sticky md:top-10">
            <div className="relative rounded-[1.75rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
              <img
                src="/liav.webp"
                alt="ליאב כהן"
                className="w-full aspect-[4/5] object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/80 to-transparent px-5 pt-12 pb-5">
                <p className="text-white font-bold text-base">ליאב כהן</p>
                <p className="text-white/60 text-xs mt-0.5">
                  מלווה בעלי עסקים לסגור בשיחה הראשונה
                </p>
              </div>
            </div>
          </div>

          {/* התוכן */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-6">
              <span className="w-8 h-px bg-primary/60" aria-hidden="true" />
              ממני אליך, אישית
            </div>

            <h2 className="font-display text-3xl md:text-[2.75rem] font-black text-white leading-[1.08] mb-5">
              אם הגעת עד לכאן, אתה{" "}
              <span className="text-primary">באמת</span> רוצה לשדרג את המכירה שלך.
            </h2>
            <p className="text-lg text-white/65 leading-relaxed mb-8 max-w-md">
              ולא רק לקרוא עוד מדריך. אז אני רוצה לתת לך הזדמנות לעשות את זה יחד
              איתי, באימון מכירות אישי, במתנה.
            </p>

            {/* למי זה מיועד */}
            <p className="text-sm text-white/50 leading-relaxed mb-8 ps-4 border-s border-white/15">
              <span className="font-bold text-white/80">מיועד לבעלי עסקים</span>{" "}
              שמוכרים שירות או ליווי, ומקבלים מעל 20 פניות בחודש.
            </p>

            {/* ההבטחה הגדולה */}
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 mb-8">
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-3">
                המטרה של האימון
              </p>
              <p className="font-display text-2xl md:text-[1.75rem] font-black text-white leading-tight">
                לבנות לך תהליך מכירה שיעזור לך{" "}
                <span className="text-primary">לסגור לקוח כבר בשיחה הבאה שלך</span>{" "}
                בקלות יותר.
              </p>
              <ul className="flex flex-col gap-2 mt-5">
                {objections.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-white/60 leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* מה קורה בפגישה */}
            <div className="flex flex-col gap-5 mb-10">
              {callPoints.map((point) => (
                <div key={point.title} className="flex items-start gap-4">
                  <point.Icon
                    className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-[15px] font-bold text-white mb-1">
                      {point.title}
                    </p>
                    <p className="text-sm text-white/55 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-14 px-10 bg-primary text-primary-foreground font-bold text-base rounded-xl hover:bg-primary/90 transition-colors duration-200 shadow-lg shadow-primary/25 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                לתיאום אימון מכירות בחינם 👇
              </a>
              <p className="text-xs mt-3 text-white/35">
                45 דקות. בלי תשלום. בלי התחייבות.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
