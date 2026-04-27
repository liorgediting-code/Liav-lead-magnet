"use client";

import { Lightbulb, AlertCircle, Trophy } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "הצגה עצמית ויצירת אמון ראשוני",
    subtitle: "מי אני, מאיפה אני, מה אני",
    importance:
      "הלקוח חייב להבין מאיפה 'נפלת' עליו. זה מפחית חשד מיידי. לפני שאתה מתחיל, בדוק את המצב הרגשי שלו ואם יש לו את הרצון והזמן לשיחה מולך. לקוח שנלחץ לשמוע לא יקנה.",
    script: `"שלום [שם], שמי [שמך], אני [תואר / תחום].
ראיתי את הפרטים שלך ורציתי לחזור אליך אישית.
לפני שנתחיל, יש לך 10-15 דקות עכשיו?"`,
    tip: "אם הוא עסוק, קבע מועד אחר מיידית. אל תמשיך בכוח.",
  },
  {
    number: 2,
    title: "היכרות צד ב׳ + בניית סמכות",
    subtitle: "ראפור אישי לפני עסקי",
    importance:
      "אל תרוץ ישר לעניין. זה מראה שאתה בלחץ למכור. התעניין בו קודם כל כאדם. אחרי שהוא שיתף על עצמו, ורק אז, ספר לו כמה מילים על הרזומה שלך. זה בונה סמכות, מקצועיות ואמון שאתה יודע על מה אתה מדבר.",
    script: `"ספר לי קצת עלייך, מה אתה עושה? [הקשב]

מעניין. אני עוסק ב[תחום] כבר [X שנים],
עבדתי עם [סוג לקוחות] ועזרתי ל[תוצאה כללית].
זה מה שהביא אותי לפתח את השיטה שאני רוצה להכיר לך היום."`,
    tip: "הוא צריך לחוש שאתה מבין אותו ושיש לך ניסיון אמיתי, לא שאתה קורא מסקריפט.",
  },
  {
    number: 3,
    title: "מבקר מקרב | שאלות פותחות",
    subtitle: "פותח אפילו את הסקפטי ביותר",
    importance:
      "שלוש שאלות ספציפיות יפתחו אפילו את האדיש ביותר, כי התעניינת בו. מהן המשך לשאלות אבחון שיחשפו את האתגר, המטרה (החלום), הכאב והחסם שלו. ככה תדע להתאים את עצמך ואת המוצר אליו בדיוק.",
    script: `"איך הגעת אליי?"

"מה עניין אותך במודעה / בפוסט?"

"למה זה ספציפית נגע בך וגרם לך להשאיר לי פרטים?"

↓ מכאן המשך לשאלות אבחון:

"מה האתגר הגדול ביותר שלך ב[תחום] כרגע?"
"אם היית יכול לשנות דבר אחד, מה היה?"
"מה ניסית עד עכשיו? מה לא עבד?"`,
    tip: "שאלה אחת בכל פעם. הקשב. אל תמלא שקט. השקט שלו שווה זהב.",
  },
  {
    number: 4,
    title: "סגירת ביניים לפני הצגת השירות",
    subtitle: "שליטה, שקט וביטחון בהמשך",
    importance:
      "לפני שאתה מציג את עצמך ואת השירות, תסגור מולו שהבנת הכל ושאין לו שאלות פתוחות. זה נותן לך שליטה, שקט, ביטחון ווודאות להמשיך להוביל את השיחה.",
    script: `"רגע לפני שאני מסביר לך איך אני עובד,
תן לי לוודא שהבנתי אותך נכון.

[סכם במילים שלו: האתגר, המטרה, מה ניסה, מה לא עבד]

ככה זה נראה? יש משהו שהחמצתי?"`,
    tip: "אל תמשיך עד שהוא אמר 'כן, בדיוק'. הוא צריך להרגיש שנשמע.",
    isCheckpoint: true,
  },
  {
    number: 5,
    title: "הצגת המוצר",
    subtitle: "טכני + תועלת + רגש",
    importance:
      "לא מספיק לתאר מה אתה עושה טכנית. תמכור את החלום, התוצאה, והרגש שהוא רוצה להשיג. עבור על כל שלב בשירות, אבל אל תמשיך לשלב הבא עד שהוא הבין איך זה ישפיע על חייו.",
    script: `"אז הנה מה שאנחנו עושים ביחד:

[שלב 1 טכני]: מה זה נותן לך? [תוצאה רגשית / פרקטית]
    → קיבלת את זה? מרגיש רלוונטי?

[שלב 2 טכני]: מה זה נותן לך? [תוצאה]
    → יש שאלות?

[המשך כך עד סוף השירות]"`,
    tip: "אל תמהר. לקוח שהבין את הערך ישלם. לקוח שלא הבין יתנגד.",
  },
  {
    number: 6,
    title: "סגירת ביניים לפני הצגת המחיר",
    subtitle: "לוודא שאין חוסר וודאות",
    importance:
      "לפני שאתה מציג מחיר, תסגור שוב. וודא שאין לו שום ספק על מה שיקבל ועל הערך שהשירות יביא לו. אם יש ספק, טפל בו עכשיו, לא אחרי שתגיד מחיר.",
    script: `"אז אחרי שהסברתי הכל, מה הרגשת?
האם זה נראה לך רלוונטי לאתגרים שדיברנו עליהם?
יש משהו שלא ברור לך? שאלות על התהליך?"`,
    tip: "אם יש ספק, חזור אחורה ותבהיר לפני שתמשיך.",
    isCheckpoint: true,
  },
  {
    number: 7,
    title: "הצגת המחיר",
    subtitle: "תמיד כהשקעה, לא כעלות",
    importance:
      "המחיר הוא תמיד השקעה של הלקוח בעצמו. הצג את זה בנינוחות ובביטחון מלא, בלי גמגום. הלקוח שם לב לכל מילה ורמז שלך. אחרי שאמרת מחיר, עצור. מי שמדבר ראשון מפסיד.",
    script: `"ההשקעה שלך בליווי היא [סכום]."

[שתיקה, אל תמלא אותה]

"איך תרצה להעביר: כרטיס אשראי או העברה בנקאית?"`,
    tip: "אמרת מחיר, עצרת. הביטחון שלך הוא הסגירה.",
  },
  {
    number: 8,
    title: "טיפול בהתנגדויות",
    subtitle: "התנגדות = בקשה למידע נוסף",
    importance:
      "אם הגעת לפה, כנראה שלב האבחון לא היה עמוק מספיק, או שחסרה לו וודאות. יש גם לקוחות שצריכים זמן לעכל ולסגור בהמשך. אנחנו עובדים בשיטת מערכת יחסים, לא עסקאות חד פעמיות.",
    script: `על "יקר לי":
"אני מבין. תגיד לי, אם המחיר לא היה כאן, היית מתקדם?"
→ אם כן: "אז הנושא הוא לא הרצון, אלא האיך. בוא נמצא פתרון ביחד."

על "צריך לחשוב":
"בטח, זה הגיוני. מה הדבר הספציפי שאתה צריך לחשוב עליו?"

על "אני לא בטוח":
"מה היה גורם לך להיות בטוח?"`,
    tip: "אחרי טיפול בהתנגדות, חזור לשאול על המשך. פולואפ הוא חלק טבעי מהתהליך.",
  },
];

export default function SalesGuide() {
  return (
    <div className="relative flex flex-col gap-0">
      {/* Vertical line */}
      <div className="absolute right-[19px] top-10 bottom-24 w-0.5 bg-gradient-to-b from-primary/60 via-primary/20 to-transparent pointer-events-none hidden md:block" />

      {steps.map((step, idx) => (
        <div key={step.number} className="relative flex gap-4 md:gap-6 pb-6">
          {/* Step number badge */}
          <div className="flex-shrink-0 flex flex-col items-center z-10">
            <div
              className={`step-badge-${step.number} w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm shadow-lg`}
            >
              {step.number}
            </div>
          </div>

          {/* Card */}
          <div
            className={`flex-1 rounded-2xl border shadow-sm overflow-hidden mb-2 ${
              step.isCheckpoint
                ? "border-primary/40 bg-primary/[0.04]"
                : "border-border/50 bg-card"
            }`}
          >
            {/* Card header */}
            <div
              className={`px-5 py-4 border-b ${
                step.isCheckpoint ? "border-primary/20" : "border-border/30"
              }`}
            >
              <p className="text-[11px] font-bold tracking-widest uppercase text-muted-foreground mb-0.5">
                שלב {step.number}
                {step.isCheckpoint && (
                  <span className="mr-2 text-primary">• נקודת ביקורת</span>
                )}
              </p>
              <h3 className="text-base font-black text-foreground leading-snug">
                {step.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                {step.subtitle}
              </p>
            </div>

            <div className="px-5 py-4 flex flex-col gap-4">
              {/* Importance */}
              <div className="flex gap-3">
                <AlertCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {step.importance}
                </p>
              </div>

              {/* Script */}
              <div className="bg-foreground/[0.04] rounded-xl p-4 border border-primary/10">
                <p className="text-[11px] font-bold text-primary uppercase tracking-wider mb-2">
                  מה לומר
                </p>
                <pre className="text-sm text-foreground/90 leading-relaxed whitespace-pre-wrap font-sans">
                  {step.script}
                </pre>
              </div>

              {/* Tip */}
              {step.tip && (
                <div className="flex items-start gap-2">
                  <Lightbulb className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <span className="font-bold text-foreground/70">טיפ: </span>
                    {step.tip}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Final result banner */}
      <div className="relative flex gap-4 md:gap-6">
        <div className="flex-shrink-0 z-10">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
            <Trophy className="w-5 h-5 text-white" aria-hidden="true" />
          </div>
        </div>
        <div className="flex-1 rounded-2xl bg-primary p-5 flex items-center justify-between shadow-lg shadow-primary/25">
          <div>
            <p className="text-xs font-bold text-primary-foreground/70 uppercase tracking-widest mb-0.5">
              התוצאה
            </p>
            <p className="text-xl font-black text-white">
              לקוח נסגר! 🎯
            </p>
          </div>
          <div className="text-4xl opacity-20 font-black text-white">
            ✓
          </div>
        </div>
      </div>
    </div>
  );
}
