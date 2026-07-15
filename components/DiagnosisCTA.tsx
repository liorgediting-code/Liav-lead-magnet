import { Ban, PlayCircle, Target, CheckCircle2 } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/liavcohen798/30min";

const objections = [
  "בלי לרדוף אחרי פולואפים שבועות שלמים",
  'בלי להישמע כמו "איש המכירות" שאתה שונא',
  "וגם אם אחוזי הסגירה שלך נמוכים היום, ואתה פשוט שונא שיחות מכירה",
];

const callPoints = [
  {
    Icon: PlayCircle,
    title: "סימולציית מכירה חיה על המוצר שלך",
    desc: "אתה מוכר, אני הלקוח. תרגיש על הגוף איך מקשיבים, משיבים בשאלה ומובילים את השיחה לסגירה.",
  },
  {
    Icon: Target,
    title: "נאבחן איפה בדיוק אתה מאבד לידים",
    desc: "ניקח את השיחות האמיתיות שלך, נמצא את הנקודה שבה הן נתקעות, ונבנה יחד את הדרך לסגור כבר בשיחה הראשונה.",
  },
];

export function DiagnosisCTA() {
  return (
    <section className="bg-navy">
      <div className="max-w-[960px] mx-auto px-5 py-16 md:py-20">
        <p className="text-primary text-xs font-bold tracking-widest uppercase text-center mb-3">
          הצעד הבא, ממני אליך אישית
        </p>
        <h2 className="text-2xl md:text-3xl font-extrabold leading-tight text-center text-white mb-3">
          אם הגעת עד לכאן — סימן שאתה{" "}
          <span className="text-primary">באמת</span> רוצה לשדרג את המכירה שלך
        </h2>
        <p className="text-sm md:text-base text-center leading-relaxed mb-12 max-w-lg mx-auto text-white/60">
          ולא רק לקרוא עוד מדריך. אז אני רוצה לתת לך הזדמנות לעשות את זה יחד איתי
          — בפגישת אבחון אישית, במתנה.
        </p>

        <div className="grid gap-8 md:grid-cols-[300px_1fr] md:gap-10 items-start">
          {/* תמונה של ליאב */}
          <div className="mx-auto w-full max-w-[280px] md:max-w-none">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/40">
              <img
                src="/liav.webp"
                alt="ליאב כהן"
                className="w-full aspect-[4/5] object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/70 to-transparent px-4 pt-10 pb-4">
                <p className="text-white font-bold text-sm">ליאב כהן</p>
                <p className="text-white/60 text-xs">
                  מלווה בעלי עסקים לסגור בשיחה הראשונה
                </p>
              </div>
            </div>
          </div>

          {/* התוכן */}
          <div className="flex flex-col">
            {/* למי זה מיועד */}
            <div className="inline-flex items-start gap-2.5 rounded-2xl border border-primary/30 bg-primary/[0.08] px-4 py-3 mb-6">
              <CheckCircle2
                className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <p className="text-sm text-white/80 leading-relaxed">
                <span className="font-bold text-white">מיועד לבעלי עסקים</span>{" "}
                שמוכרים שירות, סדנאות או ליווי, ומקבלים מעל 20 פניות בחודש.
              </p>
            </div>

            {/* ההבטחה הגדולה */}
            <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-5">
              נבנה לך מנגנון מכירה שסוגר{" "}
              <span className="text-primary">כל ליד רלוונטי כבר בשיחה הראשונה</span>{" "}
              — <span className="text-primary">תוך 90 יום</span>.
            </h3>

            {/* הסרת התנגדויות */}
            <ul className="flex flex-col gap-2.5 mb-7">
              {objections.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-white/70 leading-relaxed"
                >
                  <Ban
                    className="w-4 h-4 text-primary/70 flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* מה קורה בפגישה */}
            <div className="flex flex-col gap-3 mb-8">
              {callPoints.map((point) => (
                <div
                  key={point.title}
                  className="flex items-start gap-3.5 rounded-2xl p-4 bg-white/[0.05] border border-white/10"
                >
                  <point.Icon
                    className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-bold text-white mb-1">
                      {point.title}
                    </p>
                    <p className="text-xs text-white/55 leading-relaxed">
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
                לתיאום פגישת אבחון — בחינם 👇
              </a>
              <p className="text-xs mt-3 text-white/35">
                30 דקות. בלי תשלום. בלי התחייבות.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
