import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ShieldAlert, Sparkles, ArrowLeft } from "lucide-react";
import SalesGuide from "@/components/SalesGuide";

export const metadata: Metadata = {
  title: "המדריך שלך | תהליך מכירה ב-8 שלבים",
  description: "תבנית מכירה מוכנה עם תסריטים לכל שלב בשיחת המכירה",
  robots: "noindex",
};

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
            תבנית המכירה שסוגר לי וללקוחות שלי <span className="text-primary">עסקאות בקלות:</span>
          </h1>
          <p className="text-base text-white/70 max-w-lg mx-auto">
            תהליך המכירה האפקטיבי שלי ב-8 שלבים, עם תסריטים מוכנים לכל רגע בשיחה.
          </p>
        </div>
      </section>

      {/* Guide Content */}
      <section className="max-w-[680px] mx-auto px-5 py-10">
        {/* עיקרון פתיחה — גרסה א׳ */}
        <div className="relative mb-10 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/[0.08] via-card to-card overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-l from-primary/0 via-primary to-primary/0" />
          <div className="px-6 py-6 md:px-7 md:py-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
                <ShieldAlert className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-widest uppercase text-primary mb-0.5">
                  לפני שאתה צולל פנימה
                </p>
                <h2 className="text-lg md:text-xl font-black text-foreground leading-tight">
                  העיקרון שמחזיק את כל השיטה
                </h2>
              </div>
            </div>

            <div className="flex flex-col gap-3 text-[15px] text-foreground/85 leading-relaxed">
              <p>
                בני אדם נמשכים <span className="font-bold text-foreground">תמיד אל הצד השלילי</span>.
                המוח שלנו סורק קודם את הסיכון, את האיום, את האכזבה האפשרית, הרבה לפני שהוא רואה את ההזדמנות.
                במכירה זו לא חולשה שצריך להתחבא ממנה, זו מציאות שצריך לעבוד איתה.
              </p>
              <p>
                המטרה שלך בשיחת המכירה היא <span className="font-bold text-foreground">לא לייפות</span>,
                לא להבטיח שהכול יהיה ורוד ולא לטייח את הקשיים. ברגע שתעשה את זה, הלקוח ירגיש את זה.
                ההגנות שלו יעלו, והאמון יישבר עוד לפני שאמרת מחיר.
              </p>
              <p>
                המהלך האמיתי הוא ההפך הגמור: <span className="font-bold text-foreground">אתה</span> זה
                שפותח את הצד השלילי. מדבר על האתגרים שיעמדו בדרך, על הקושי, על הרגעים שבהם הוא ירצה לוותר.
                מראה לו שאתה רואה את התמונה המלאה, לא רק את חלון הראווה.
              </p>
              <div className="rounded-xl bg-primary/[0.10] border border-primary/30 px-4 py-3">
                <p className="text-[14px] text-foreground/90 leading-relaxed">
                  <span className="font-black text-foreground">קריטי לעשות את זה כמה שיותר מוקדם בשיחה.</span>{" "}
                  ככל שתפתח את הצד השלילי מהר יותר, ככה תייצר יותר אמון, תוריד את הסקפטיות של הלקוח,
                  ותהפוך בעיניו מ&quot;עוד מוכר שמנסה לדחוף לי משהו&quot; ל&quot;בן אדם שמבין אותי באמת&quot;.
                  כל דקה שמתעכבת היא דקה שבה הוא בונה הגנות נגדך.
                </p>
              </div>
              <p>
                ואז, אחרי שהנחת את האמת על השולחן, תגיד לו:
              </p>
              <div className="rounded-xl bg-primary/[0.08] border border-primary/20 px-4 py-3">
                <p className="font-bold text-foreground text-[15px] leading-relaxed">
                  &quot;אם תעמוד בזה, תצא מהצד השני אדם אחר. חזק יותר, ממושמע יותר, בטוח יותר בעצמך.
                  כי עמדת במילה שאמרת לעצמך, למרות הכול.&quot;
                </p>
              </div>
              <p className="text-sm text-muted-foreground italic">
                זו לא הבטחה לתוצאה. זו הבטחה לזהות. וזה מה שלקוחות באמת קונים.
              </p>
            </div>
          </div>
        </div>

        {/* כותרת מעל השלבים */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-foreground leading-tight">
            תבנית המכירה שעוזרת ללקוחות שלי{" "}
            <span className="text-primary">להכפיל את המחזורים שלהם</span>
          </h2>
        </div>

        <SalesGuide />
      </section>

      {/* CTA למתקדמים — דף הבונוס */}
      <section className="bg-navy">
        <div className="max-w-[680px] mx-auto px-5 py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
            <span className="text-primary text-xs font-bold tracking-wide">
              בונוס למתקדמים
            </span>
          </div>

          <h2 className="text-[1.375rem] md:text-3xl font-extrabold text-white leading-snug md:leading-tight mb-4 text-balance">
            <span className="whitespace-nowrap">מכיר את תהליך</span>{" "}
            <span className="whitespace-nowrap">המכירה הזה כבר?</span>
            <br />
            <span className="text-primary">כנראה שאתה כבר מתקדם.</span>
          </h2>
          <p className="text-white/65 text-base leading-relaxed mb-4 max-w-md mx-auto">
            הכנתי עוד בונוס בשביל מתקדמים יותר שמכירים את תהליך המכירה, ורוצים לצלול יותר לעומק.
          </p>
          <p className="text-white/85 text-base font-semibold leading-relaxed mb-8 max-w-md mx-auto">
            החוקים הסודיים במכירות. הדברים שאסור לך{" "}
            <span className="text-primary">בחיים</span>{" "}
            לעשות בשיחה, ובדיוק הם אלו שמפילים לך את העסקאות.
          </p>

          <Link
            href="/bonus"
            className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            לצפייה בחינם לגמרי
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          </Link>

          <p className="text-xs text-white/40 mt-4">
            ללא הרשמה. גישה מיידית.
          </p>
        </div>
      </section>
    </main>
  );
}
