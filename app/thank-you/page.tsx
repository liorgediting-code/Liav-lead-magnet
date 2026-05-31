import type { Metadata } from "next";
import { CheckCircle, Mail, ShieldAlert, Wrench, SlidersHorizontal, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "תודה! המדריך בדרך אליך במייל",
  description: "המדריך נשלח אליך לאימייל. בדוק את תיבת הדואר ואת תיקיית הספאם.",
  robots: "noindex",
};

const CALENDLY_URL = "https://calendly.com/liavcohen798/30min";

const callFeatures = [
  {
    Icon: Wrench,
    title: "נטמיע את כל 8 השלבים על המוצר שלך",
    desc: "לא תבנית גנרית — נעבור שלב-שלב ונתאים כל אחד בדיוק למוצר, לקהל ולדרך המכירה שלך.",
  },
  {
    Icon: SlidersHorizontal,
    title: "תצא עם תסריט מכירה מוכן ליישום",
    desc: "בסוף הפגישה יהיה לך תסריט ספציפי שאתה יכול להשתמש בו כבר בשיחה הבאה שלך.",
  },
  {
    Icon: Clock,
    title: "30 דקות. בלי תשלום. בלי התחייבות.",
    desc: "פגישת פיצוח חינמית לגמרי, רק כדי שתצא עם תבנית שעובדת בשבילך.",
  },
];

export default function ThankYouPage() {
  return (
    <main className="flex-1">
      {/* Confirmation */}
      <section className="bg-gradient-to-b from-navy to-[oklch(0.22_0.04_55)] text-white">
        <div className="max-w-[680px] mx-auto px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/15 border border-green-400/20 rounded-full px-4 py-1.5 mb-6">
            <CheckCircle className="w-4 h-4 text-green-400" aria-hidden="true" />
            <span className="text-green-400 text-sm font-medium">
              ההרשמה אושרה
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            תודה! המדריך{" "}
            <span className="text-primary">בדרך אליך למייל</span>
          </h1>
          <p className="text-base text-white/75 max-w-lg mx-auto leading-relaxed">
            שלחנו לך את תבנית המכירה ב-8 שלבים ישירות לאימייל שהזנת. תוך כמה דקות הוא אצלך בתיבה.
          </p>
        </div>
      </section>

      {/* Personal implementation interrupt */}
      <section className="bg-[oklch(0.22_0.04_55)]">
        <div className="max-w-[680px] mx-auto px-5 py-10">
          <div className="rounded-2xl border border-primary/40 bg-primary/[0.07] p-7 md:p-8 text-center">
            <p className="text-white/50 text-sm mb-5 leading-relaxed">
              אבל רגע לפני שאתה צולל לקריאה...
            </p>
            <h2 className="text-xl md:text-2xl font-extrabold text-white leading-tight mb-4">
              רוצה שאעזור לך ליישם את ה&apos;פרוטוקול&apos;
              <br />
              על הקמפיינים שלך –{" "}
              <span className="text-primary">באופן אישי?</span>
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-7 max-w-md mx-auto">
              המדריך ייתן לך את המפות, אבל אם אתה רוצה לקצר את הדרך ולבנות מנגנון ממומן שמביא לקוחות זהב על אוטומט — אני מזמין אותך לשיחת אסטרטגיה ממוקדת{" "}
              <span className="font-bold text-white">(בשווי 500 ש&quot;ח ללא עלות)</span>.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-13 px-9 bg-primary text-primary-foreground font-bold text-base rounded-xl hover:bg-primary/90 transition-colors duration-200 shadow-lg shadow-primary/30 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              קבע שיחת אסטרטגיה — בחינם
            </a>
            <p className="text-white/30 text-xs mt-3">בשווי 500 ש&quot;ח · ללא עלות · ללא התחייבות</p>
          </div>
        </div>
      </section>

      {/* Inbox instructions */}
      <section className="max-w-[680px] mx-auto px-5 py-12">
        <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/[0.08] via-card to-card overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-l from-primary/0 via-primary to-primary/0" />
          <div className="px-6 py-7 md:px-7">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-widest uppercase text-primary mb-1">
                  הצעד הבא שלך
                </p>
                <h2 className="text-lg md:text-xl font-black text-foreground leading-tight">
                  פתח את תיבת המייל שלך
                </h2>
              </div>
            </div>

            <ul className="flex flex-col gap-3 text-[15px] text-foreground/85 leading-relaxed">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  בדוק את תיבת ה<span className="font-bold text-foreground">דואר הנכנס</span> שלך — המייל אמור להגיע תוך 1-2 דקות.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  לא רואה אותו? בדוק את תיקיית ה<span className="font-bold text-foreground">ספאם / קידומי מכירות</span>. לפעמים הוא מתגלגל לשם.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  כשתמצא אותו, סמן <span className="font-bold text-foreground">&quot;לא ספאם&quot;</span> או גרור אותו לתיבה הראשית — כך לא תפספס את ההמשך.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* פגישת פיצוח CTA */}
      <section className="bg-navy">
        <div className="max-w-[680px] mx-auto px-5 py-16 md:py-20">
          <p className="text-primary text-xs font-bold tracking-widest uppercase text-center mb-3">
            בזמן שאתה מחכה למייל
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3 text-center">
            בוא נטמיע את התבנית{" "}
            <span className="text-primary">בעסק שלך</span>
          </h2>
          <p className="text-white/60 text-sm md:text-base text-center leading-relaxed mb-10 max-w-md mx-auto">
            התבנית ב-8 השלבים שקיבלת היא כלי עוצמתי — אבל ליישם אותה נכון על המוצר שלך זה משהו אחר. בפגישת פיצוח אנחנו עושים את זה יחד, ספציפית לעסק שלך.
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

          <div className="text-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-14 px-10 bg-primary text-primary-foreground font-bold text-base rounded-xl hover:bg-primary/90 transition-colors duration-200 shadow-lg shadow-primary/25 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              קבע פגישת פיצוח חינם
            </a>
            <p className="text-white/35 text-xs mt-3">חינם לגמרי. ללא התחייבות.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
