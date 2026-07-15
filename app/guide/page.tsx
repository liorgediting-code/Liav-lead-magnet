import type { Metadata } from "next";
import {
  CheckCircle,
  Ear,
  MessageCircleQuestion,
  Search,
  X,
  Check,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { DiagnosisCTA } from "@/components/DiagnosisCTA";

export const metadata: Metadata = {
  title: "המדריך שלך | להוביל כל שיחה ולסגור עסקאות פרימיום",
  description:
    "איך להוביל כל שיחה בביטחון ולסגור עסקאות פרימיום מתוך הקשבה ואותנטיות.",
  robots: "noindex",
};

const paradigmOld = [
  "לדבר ללא הפסקה: לשפוך נתונים טכניים, לתת המון „קלפים” ומידע על השירות שלך, ובסוף הלקוח לוקח את המידע וממשיך הלאה.",
  "לענות מיד: הלקוח שואל אותך שאלה ומוביל אותך, ובכך אתה מאבד לחלוטין את השליטה ואת הובלת השיחה.",
  "לרדוף וללחוץ: לשמור את הלקוח באזור הנוחות שלו לאורך השיחה, לפחד מהעימות איתו, ובסוף לקבל דחייה.",
];

const paradigmNew = [
  "להקשיב באמפתיה מוחלטת: לשאול שאלות מברר נכונות עבור קהל היעד שלך ועבור הבעיה שבה הוא נמצא.",
  "להשיב בשאלה: להפנות את השאלה אליו בחזרה כדי להחזיר את מצב השליטה והוודאות אליך.",
  "להוביל לאסרטיביות: לדעת מתי לעשות את המעבר מהקשבה והכלה, לאסרטיביות וחתירה לסגירה.",
];

const rules = [
  {
    number: 1,
    icon: Ear,
    title: "המכירה האמיתית והעמוקה נמצאת בהקשבה שלכם!",
    body: "כל התשובות לשאלות שיש לכם כמוכרים מול הלקוחות שלכם, נמצאות בתשובות שלהם! ברגע שאתה שואל שאלה מברר נכונה, קח צעד אחורה ותשתוק. אל תפריע להם בשום ציוץ ומילה עד שהם סיימו לגמגם או לדבר לחלוטין. שם, בתוך המילים שלהם, נמצאת השאלה העמוקה הבאה שלך והדרך שלך לגלות את הצורך האמיתי שלהם. הם ירגישו שהבנת אותם באמת, יסמכו עליך ויהיו פתוחים להצעה שלך.",
  },
  {
    number: 2,
    icon: MessageCircleQuestion,
    title: "תשיבו על שאלה בשאלה תמיד!",
    body: "זו פעולה מהירה ואפקטיבית ביותר ליצירת חיבור חזק ולהחזרת השליטה. בכל פעם שמופנית אליכם שאלה מהליד, אל תרוץ לספק לו תשובות הגיוניות של „כן ולא” שסוגרות את השיחה וגורמות לצד השני להשתעמם. תשיב עליה בשאלה בחזרה. שאלו שאלות פתוחות שמציתות את הדמיון ומתחילות ב: מי, מה, מדוע, מתי, למה, איך. זה גורם לאדם שמולך להיפתח, לשתף, והכי חשוב – שומר עליך בעמדת המוביל.",
    dialogue: {
      customer:
        "„תגיד, כמה עולה השירות שלך? שלח לי איזה הודעה או הצעת מחיר בוואטסאפ.”",
      seller:
        "אני אשמח לתת לך את כל הפרטים על ההשקעה שלך בליווי, אבל לפני שאני נוקב במספר, מסקרן אותי לדעת, מה ספציפית עניין אותך במודעה שלי ומה גרם לכך שהחלטת להשאיר פרטים דווקא עכשיו?",
    },
  },
  {
    number: 3,
    icon: Search,
    title: "תאסוף את המידע, אל תיתן אותו!",
    body: "אל תניח הנחות ואל תסיק מסקנות במהלך השיחה, כי ברגע שאתה מניח הנחה הסיפור שאתה מספר לעצמך כנראה לא מדויק ואתה עושה נזק למכירה שלך. אם לא הבנת משהו, תעצור ותפעיל סגירת ביניים: „אז אם הבנתי נכון, תקן אותי אם אני מדייק או טועה...”. תאסוף את המידע על האתגר שלו, הכאב שלו והחלום שלו. רק אחרי שביצעת מברר עמוק, וקיבלת ממנו הסכמה מלאה שהבנת אותו, רק אז אתה עושה את המעבר האסרטיבי ומציג את המחיר כהשקעה של הלקוח בעצמו.",
  },
];

export default function GuidePage() {
  return (
    <main className="flex-1">
      {/* Header */}
      <section className="bg-gradient-to-b from-navy to-[oklch(0.22_0.04_55)] text-white">
        <div className="max-w-[720px] mx-auto px-5 py-14 text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/15 border border-green-400/20 rounded-full px-4 py-1.5 mb-6">
            <CheckCircle className="w-4 h-4 text-green-400" aria-hidden="true" />
            <span className="text-green-400 text-sm font-medium">
              המתנה שלך למשתתפי הוובינר מוכנה
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold leading-tight mb-4">
            איך להוביל כל שיחה בביטחון ולסגור{" "}
            <span className="text-primary">עסקאות פרימיום</span> מתוך הקשבה
            ואותנטיות
          </h1>
          <p className="text-base text-white/70 max-w-lg mx-auto">
            המדריך שיראה לך למה השיטות הישנות שחקו אותך, ואיך להפסיק לתת מידע
            ולהתחיל להקשיב ולהוביל.
          </p>
        </div>
      </section>

      {/* פתיחה */}
      <section className="max-w-[720px] mx-auto px-5 py-10">
        <FadeIn>
          <div className="flex flex-col gap-4 text-[15px] md:text-base text-foreground/85 leading-relaxed">
            <p>
              תקשיב לי רגע, ותהיה הכי כנה עם עצמך בעולם! אם הגעת לכאן, רוב הסיכויים
              שיש לך עסק טוב, שאתה איש מקצוע באמת איכותי ושהמוצר או השירות שלך
              נותנים ערך מטורף ללקוחות. הלידים מגיעים, אנשים אפילו פונים אליך
              בצורה שוטפת, אבל ברגע האמת &ndash; ברגע שבו צריך להרים את הטלפון,
              לנהל את שיחת המכירה ולנקוב במחיר שלך &ndash; משהו שם פשוט מתכווץ לך
              בבטן.
            </p>
            <p>
              חוסר הוודאות הזה מוביל אותך לפחד, והפחד חוסם אותך מהשיחה. אתה מוצא את
              עצמך דוחה את השיחות, או גרוע מכך &ndash; בורח לוואטסאפ רק כדי לא לדבר
              איתם ולהכיר אותם קודם, מהפחד שיידחו אותך. וכשהלקוח עונה בוואטסאפ? הוא
              ישר מבקש הצעת מחיר. אתה שולח לו את ההצעה כשהלב שלך דופק, ואז בדרך כלל
              הוא פשוט מנפנף ומסנן אותך, ובסוף סוגר עם המתחרים שלך.
            </p>
            <p>
              זה קורה לך שוב ושוב. אתה מגיע לסוף החודש סחוט לחלוטין, עייף, חווה
              &quot;הנגאובר רגשי&quot; מטורף שבו אין לך טיפת אנרגיה לזוגיות או
              לעצמך, ומביט בשורת רווח מעליבה בבנק שלא משקפת אפילו קצת את המאמץ
              האדיר שלך.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/[0.08] px-5 py-5 md:px-6 md:py-6">
            <p className="text-[15px] md:text-base text-foreground/90 leading-relaxed">
              <span className="font-black text-foreground">אתה לא אשם.</span> אף
              אחד לא לימד אותך עדיין איך לנהל שיחה ולהוביל אותה מנקודה A לנקודה B.
              התעשייה ניסתה לתכנת אותך לפעול כמו רובוט אגרסיבי, והנפש והערכים שלך
              פשוט מסרבים לשתף פעולה עם הזיוף הזה.{" "}
              <span className="font-bold text-foreground">
                במדריך הזה אנחנו הולכים לשנות את זה אחת ולתמיד.
              </span>
            </p>
          </div>
        </FadeIn>
      </section>

      {/* פרק 1 */}
      <section className="max-w-[720px] mx-auto px-5 py-8">
        <FadeIn>
          <ChapterHeading number={1}>
            אשליית ה&quot;כריש&quot;: למה שיטות השכנוע של פעם רק מבריחות את הלקוחות
            שלך?
          </ChapterHeading>

          <div className="flex flex-col gap-4 text-[15px] md:text-base text-foreground/85 leading-relaxed">
            <p>
              במשך שנים שטפו לנו את המוח שמכירות הן קרב. אמרו לך שאתה צריך להיות
              &quot;כריש&quot;, &quot;לטרוף את השוק&quot;, לדחוף בכל הכוח ולהשתמש
              בסקריפטים נוקשים של &quot;טיפול בהתנגדויות&quot; כאילו האדם בצד השני
              של הקו הוא אויב שצריך להכניע.
            </p>
            <p>
              תרשה לי להגיד לך משהו בגובה העיניים: העולם השתנה, והצרכן של היום
              הרבה יותר ער וחכם לגבי כל השיטות המיושנות האלה. כל המידע נמצא בחוץ,
              ואנשים מזהים מניפולציות מקילומטרים. ברגע שלקוח מריח לחץ, נואשות, או
              סקריפט משוכפל שקיבלת מאיזה קורס ביוטיוב &ndash; מנגנוני ההגנה שלו
              עולים, הוא ישר מסתכל עליך כמוצר גנרי, מתחיל להתווכח איתך על המחיר,
              ובסוף מנפנף אותך וממשיך בחייו.
            </p>
            <p>
              להיות בעל עסק שעוזר לאנשים זה תחושת שליחות ונתינה עצומה.{" "}
              <span className="font-bold text-foreground">
                מכירה אמיתית היא לא לשכנע, היא לשנות ללקוח את המצב הקיים למצב טוב
                יותר.
              </span>{" "}
              היא לבוא ולעזור לבן אדם עם השירות שלך, זו לא נוכלות.
            </p>
            <p className="text-foreground/80">
              כדי להבין איך הופכים את המשחק לחלוטין, תסתכל על ההבדלים בין שתי
              הגישות:
            </p>
          </div>

          {/* טבלת השוואה */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {/* פרדיגמה ישנה */}
            <div className="rounded-2xl border border-red-500/25 bg-red-500/[0.04] overflow-hidden">
              <div className="px-5 py-3.5 border-b border-red-500/20 bg-red-500/[0.06]">
                <div className="flex items-center gap-2">
                  <X className="w-4 h-4 text-red-400" aria-hidden="true" />
                  <p className="font-black text-foreground text-[15px]">
                    הפרדיגמה הישנה
                  </p>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">
                  מכירות של לחץ
                </p>
              </div>
              <ul className="px-5 py-4 flex flex-col gap-3">
                {paradigmOld.map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-foreground/80 leading-relaxed">
                    <X className="w-4 h-4 text-red-400/70 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* פרדיגמה חדשה */}
            <div className="rounded-2xl border border-primary/40 bg-primary/[0.05] overflow-hidden shadow-sm">
              <div className="px-5 py-3.5 border-b border-primary/25 bg-primary/[0.08]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" aria-hidden="true" />
                  <p className="font-black text-foreground text-[15px]">
                    הפרדיגמה החדשה
                  </p>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">
                  ודאות והקשבה
                </p>
              </div>
              <ul className="px-5 py-4 flex flex-col gap-3">
                {paradigmNew.map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-foreground/85 leading-relaxed">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* פרק 2 */}
      <section className="max-w-[720px] mx-auto px-5 py-8">
        <FadeIn>
          <ChapterHeading number={2}>
            האמת המשחררת: למה הבררנות והרגישות שלך הן היתרון הכי חזק שלך?
          </ChapterHeading>

          <div className="flex flex-col gap-4 text-[15px] md:text-base text-foreground/85 leading-relaxed">
            <p>
              הסיבה שחווית תסכול וריקנות, ושבכל פעם שהטלפון מצלצל אתה נכנס לחרדה
              שזה עוד לקוח שהולך לשאוב ממך את האנרגיה &ndash; היא לא כי אתה לא בנוי
              לעסקים. זה קורה כי אין לך מערכת מכירות מסודרת בעסק שתמלא אותך בשליטה
              ובוודאות.
            </p>
            <p>
              האמת היא שאתה לא צריך להפוך לאדם אטום כדי להצליח. להיפך. ברגע שאתה
              מבין שאתה הדבר הכי חשוב בעסק שלך, אתה מפסיק לרדוף אחרי הכסף ועובר
              לעמדה של סמכות.{" "}
              <span className="font-bold text-foreground">
                לקוחות קונים אותנו ואז את המוצר!
              </span>{" "}
              המוצר הוא פשוט הדבר הנלווה למכירה.
            </p>
            <p>
              כשאתה משנה את המחשבה לבן אדם ואז לכסף, אתה מבין שכסף זו תוצאה, אבל בן
              אדם זו נשמה. מותר לך, ואפילו חובה עליך, להיות כנסיין וכנה בשיחה,
              במיוחד בהתחלה. אתה לא צריך לקבל כל אחד. אם תהיה כירורגי ובררן, ותציב
              &quot;חבל קטיפה&quot; סביב הזמן והאנרגיה שלך, הלקוח בצד השני ירגיש
              את הוודאות שלך.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/[0.08] via-card to-card px-5 py-5 md:px-6 md:py-6">
            <p className="text-[15px] md:text-base text-foreground/90 leading-relaxed">
              <span className="font-black text-foreground">
                העולם לא מתגמל ספק, הוא מתגמל רק ודאות.
              </span>{" "}
              כשאתה משדר ודאות שאין לה עוררין, אנשים מעריכים אותך, מכבדים את
              הגבולות שלך ומוכנים לשלם לך מחירי פרימיום בלי להתווכח.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* פרק 3 */}
      <section className="max-w-[720px] mx-auto px-5 py-8">
        <FadeIn>
          <ChapterHeading number={3}>
            שלושת חוקי הברזל של שפת הגישור: איך להוביל את השיחה?
          </ChapterHeading>

          <p className="text-[15px] md:text-base text-foreground/85 leading-relaxed mb-6">
            כדי לקחת את השליטה לידיים שלך, להפסיק להיות מובל ולהתחיל להוביל כל
            שיחה מנקודה A לנקודה B, אתה חייב להטמיע את 3 חוקי הברזל של שפת הגישור:
          </p>

          <div className="flex flex-col gap-5">
            {rules.map((rule) => (
              <div
                key={rule.number}
                className="rounded-2xl border border-border/50 bg-card shadow-sm overflow-hidden"
              >
                <div className="px-5 py-4 border-b border-border/30 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <rule.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold tracking-widest uppercase text-primary mb-0.5">
                      חוק {rule.number}
                    </p>
                    <h3 className="text-base md:text-lg font-black text-foreground leading-snug">
                      {rule.title}
                    </h3>
                  </div>
                </div>

                <div className="px-5 py-4 flex flex-col gap-4">
                  <p className="text-sm md:text-[15px] text-foreground/80 leading-relaxed">
                    {rule.body}
                  </p>

                  {rule.dialogue && (
                    <div className="bg-foreground/[0.04] rounded-xl p-4 border border-primary/10 flex flex-col gap-3">
                      <p className="text-[11px] font-bold text-primary uppercase tracking-wider">
                        ככה זה נשמע בשטח בזמן אמת
                      </p>
                      <div>
                        <p className="text-[11px] font-bold text-muted-foreground mb-1">
                          לקוח:
                        </p>
                        <p className="text-sm text-foreground/75 leading-relaxed">
                          {rule.dialogue.customer}
                        </p>
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-primary mb-1">
                          מוכר (מפעיל שפת גישור):
                        </p>
                        <p className="text-sm text-foreground/90 leading-relaxed font-medium">
                          {rule.dialogue.seller}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* הצעד הבא */}
      <section className="max-w-[720px] mx-auto px-5 py-8">
        <FadeIn>
          <div className="rounded-2xl border border-border/50 bg-card px-5 py-6 md:px-7 md:py-7">
            <h2 className="text-xl md:text-2xl font-black text-foreground leading-tight mb-4">
              הצעד הבא שלך: מהתיאוריה לפרקטיקה בשטח
            </h2>
            <div className="flex flex-col gap-4 text-[15px] md:text-base text-foreground/85 leading-relaxed">
              <p>
                במדריך הזה הבנת את ה&quot;מה&quot;. הבנת למה השיטות הישנות שחקו
                אותך, למה הפחד חסם אותך ולמה אתה חייב להפסיק לתת מידע ולהתחיל
                להקשיב ולהשיב בשאלה כדי להוביל. אבל לקבל ידע מהדף זה נחמד, וזה ממש
                לא מספיק.{" "}
                <span className="font-bold text-foreground">חייבים ליישם אותו!</span>
              </p>
              <p>
                בוובינר הקרוב שלי אני הולך לקחת את המושגים האלה ולפשט לך אותם לרמת
                השטח. אנחנו נדבר על איך בדיוק מיישמים את ההקשבה, את ההסכמה מול
                הליד, ואיך להחזיר שאלה בשאלה בכל סיטואציה &ndash; כדי שתוכל לייצר
                ודאות מוחלטת לצד השני, לעזור לו, להוביל אותו לסגירה בשיחה עצמה,
                ולסלוק יותר בתוך זמן קצר.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* CTA — פגישת אבחון אישית עם סימולציית מכירות */}
      <DiagnosisCTA />
    </main>
  );
}

function ChapterHeading({
  number,
  children,
}: {
  number: number;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5">
      <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 rounded-full px-3.5 py-1 mb-3">
        <span className="text-primary text-xs font-black tracking-widest uppercase">
          פרק {number}
        </span>
      </div>
      <h2 className="text-2xl md:text-3xl font-black text-foreground leading-tight">
        {children}
      </h2>
    </div>
  );
}
