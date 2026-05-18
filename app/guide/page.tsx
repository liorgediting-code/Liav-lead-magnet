import type { Metadata } from "next";
import { CheckCircle, Search, PhoneCall, RotateCcw, ShieldAlert, Flame } from "lucide-react";
import SalesGuide from "@/components/SalesGuide";
import NamePhonePrompt from "@/components/NamePhonePrompt";

export const metadata: Metadata = {
  title: "המדריך שלך | תהליך מכירה ב-8 שלבים",
  description: "תבנית מכירה מוכנה עם תסריטים לכל שלב בשיחת המכירה",
  robots: "noindex",
};

const callFeatures = [
  {
    Icon: Search,
    title: "נבין יחד איפה השיחות שלך נופלות",
    desc: "נעבור על תהליך המכירה שלך ונאתר בדיוק באיזה שלב הלקוחות מתנתקים ולמה.",
  },
  {
    Icon: PhoneCall,
    title: "סימולציית שיחת מכירה חיה",
    desc: "אני אהיה הלקוח, אתה תמכור לי. נראה בזמן אמת במה אתה מתקשה ומה אפשר לשפר.",
  },
  {
    Icon: RotateCcw,
    title: "תצא עם תסריט מותאם ונקודות שיפור ברורות",
    desc: "לא עצות כלליות. תסריט שמתאים לעסק שלך ורשימה ספציפית של מה לתקן.",
  },
];

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
                המוח שלהם סורק קודם את הסיכון, את האיום, את האכזבה האפשרית — הרבה לפני שהוא רואה את ההזדמנות.
                במכירה זו לא חולשה שצריך להתחבא ממנה, זו מציאות שצריך לעבוד איתה.
              </p>
              <p>
                המטרה שלך בשיחת המכירה היא <span className="font-bold text-foreground">לא לייפות</span>,
                לא להבטיח שהכול יהיה ורוד ולא לטייח את הקשיים. ברגע שתעשה את זה — הלקוח ירגיש את זה,
                ההגנות שלו יעלו, והאמון יישבר עוד לפני שאמרת מחיר.
              </p>
              <p>
                המהלך האמיתי הוא ההפך הגמור: <span className="font-bold text-foreground">אתה</span> זה
                שפותח את הצד השלילי. מדבר על האתגרים שיעמדו בדרך, על הקושי, על הרגעים שבהם הוא ירצה לוותר.
                מראה לו שאתה רואה את התמונה המלאה — לא רק את חלון הראווה.
              </p>
              <div className="mt-1 rounded-xl bg-primary/[0.08] border border-primary/20 px-4 py-3">
                <p className="text-[14px] text-foreground/90 leading-relaxed">
                  ואז, אחרי שהנחת את האמת על השולחן, תגיד לו:
                  <span className="block mt-2 font-bold text-foreground">
                    &quot;אם תעמוד בזה — תצא מהצד השני אדם אחר. חזק יותר, ממושמע יותר, בטוח יותר בעצמך.
                    כי עמדת במילה שאמרת לעצמך, למרות הכול.&quot;
                  </span>
                </p>
              </div>
              <p className="text-sm text-muted-foreground italic">
                זו לא הבטחה לתוצאה. זו הבטחה לזהות. וזה מה שלקוחות באמת קונים.
              </p>
            </div>
          </div>
        </div>

        <SalesGuide />

        {/* עיקרון סיום — גרסה ב׳ */}
        <div className="relative mt-12 rounded-2xl overflow-hidden bg-navy text-white shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-bl from-primary/20 via-transparent to-transparent pointer-events-none" />
          <div className="relative px-6 py-7 md:px-8 md:py-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center flex-shrink-0">
                <Flame className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-widest uppercase text-primary mb-0.5">
                  הכלל שמעל כל השלבים
                </p>
                <h2 className="text-lg md:text-xl font-black text-white leading-tight">
                  אל תמכור חלום ורוד — מכור אמת
                </h2>
              </div>
            </div>

            <div className="flex flex-col gap-3 text-[15px] text-white/85 leading-relaxed">
              <p>
                שמונה השלבים האלה לא יעבדו אם תשכח את הדבר הכי חשוב:{" "}
                <span className="font-bold text-white">לקוחות נמשכים אל הצד השלילי</span>.
                המוח שלהם מחפש סיבות להגיד &quot;לא&quot; הרבה לפני שהוא מחפש סיבות להגיד &quot;כן&quot;.
                אם תנסה לטייח את זה — הוא ירגיש את זה. אם תהיה הראשון לדבר על זה — תזכה באמון שלו.
              </p>
              <p>
                לכן בכל שיחה אתה <span className="font-bold text-white">לא מייפה</span>.
                אתה לא מבטיח שהכול יזרום. אתה פותח בעצמך את הקושי, את האתגרים, את הרגעים שבהם הוא ירצה לפרוש —
                כי רק כך הוא יידע שאתה לא רק מוכר, אלא מבין.
              </p>
              <div className="mt-1 rounded-xl bg-white/[0.06] border border-white/15 px-5 py-4">
                <p className="text-[15px] leading-relaxed">
                  ואז, מתוך האמת הזו, אתה מציע לו את העסקה האמיתית:
                </p>
                <p className="mt-3 text-[15px] font-bold text-white leading-relaxed">
                  &quot;זה לא יהיה קל. יהיו רגעים שתרצה לוותר. אבל אם תעמוד בזה — תצא מהצד השני אדם
                  אחר לגמרי. חזק יותר. ממושמע יותר. בטוח יותר בעצמך. כי עמדת במילה שאמרת לעצמך,
                  למרות הכול.&quot;
                </p>
              </div>
              <p className="text-sm text-white/60 italic">
                זה ההבדל בין מוכר שמתחנן לעסקה — לבין מוביל שאנשים רוצים ללכת אחריו.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* פגישת פיצוח */}
      <section className="bg-navy">
        <div className="max-w-[680px] mx-auto px-5 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3 text-center">
            רוצה לדעת בדיוק{" "}
            <span className="text-primary">איפה אתה נופל בשיחות?</span>
          </h2>
          <p className="text-white/55 text-sm text-center leading-relaxed mb-10 max-w-md mx-auto">
            פגישת פיצוח אחד על אחד. 30 דקות שבהן נעבור על השיחות שלך, נעשה סימולציה חיה, ותצא עם תמונה ברורה של מה לשנות.
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

          <div className="bg-white/[0.07] rounded-2xl p-6 max-w-sm mx-auto border border-white/10">
            <p className="text-sm font-extrabold text-white text-center mb-1">
              השאר שם ומספר ונחזור אליך
            </p>
            <p className="text-xs text-white/40 text-center mb-5">
              ללא עלות. ללא התחייבות.
            </p>
            <NamePhonePrompt />
          </div>
        </div>
      </section>
    </main>
  );
}
