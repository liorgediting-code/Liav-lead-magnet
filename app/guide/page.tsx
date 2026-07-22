import type { Metadata } from "next";
import { Check, X } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { DiagnosisCTA } from "@/components/DiagnosisCTA";
import { ReadingProgress } from "@/components/ReadingProgress";

export const metadata: Metadata = {
  title: "המדריך שלך | להוביל כל שיחה ולסגור עסקאות פרימיום",
  description:
    "איך להוביל כל שיחה בביטחון ולסגור עסקאות פרימיום מתוך הקשבה ואותנטיות.",
  robots: "noindex",
};

const paradigmOld = [
  "מדברים בלי הפסקה, שופכים נתונים טכניים ומחלקים קלפים, ובסוף הלקוח לוקח את המידע וממשיך למתחרים.",
  "עונים מיד לכל שאלה, נותנים ללקוח להוביל, ומאבדים לגמרי את השליטה על השיחה.",
  "רודפים ולוחצים, נשארים מפוחדים מהעימות, ובסוף אוכלים דחייה.",
];

const paradigmNew = [
  "מקשיבים באמפתיה מוחלטת, ושואלים בדיוק את השאלות שקהל היעד שלך צריך שישאלו אותו.",
  "משיבים בשאלה, מחזירים את הכדור ללקוח, ואיתו את השליטה והוודאות אליך.",
  "יודעים מתי בדיוק לעבור מהקשבה והכלה אל אסרטיביות וחתירה לסגירה.",
];

const rules = [
  {
    number: 1,
    kicker: "חוק הברזל הראשון",
    title: "המכירה העמוקה נמצאת בהקשבה שלך",
    body: "כל התשובות שאתה מחפש נמצאות אצל הלקוח. ברגע ששאלת שאלת מברר טובה, קח צעד אחורה ושתוק. אל תפריע לו במילה אחת עד שסיים לדבר לגמרי. שם, בתוך המילים שלו, מחכה לך השאלה העמוקה הבאה והדרך לגלות את הצורך האמיתי. הוא ירגיש שהבנת אותו, יסמוך עליך, וייפתח להצעה שלך.",
  },
  {
    number: 2,
    kicker: "חוק הברזל השני",
    title: "תמיד תשיב על שאלה בשאלה",
    body: "זו הפעולה הכי מהירה ליצירת חיבור ולהחזרת השליטה. כשהליד שואל אותך משהו, אל תמהר לתת לו תשובת כן ולא שסוגרת את השיחה ומשעממת אותו. תחזיר לו שאלה פתוחה שמתחילה במי, מה, מדוע, מתי, למה או איך. ככה הוא נפתח, משתף, והכי חשוב, אתה נשאר בעמדת המוביל.",
    dialogue: {
      customer:
        "תגיד, כמה עולה השירות שלך? שלח לי הצעת מחיר בוואטסאפ.",
      seller:
        "אשמח לתת לך את כל הפרטים על ההשקעה בליווי. מסקרן אותי לדעת: למה הפתרון שלי לצורך שלך דחוף לך דווקא כרגע?",
    },
  },
  {
    number: 3,
    kicker: "חוק הברזל השלישי",
    title: "תאסוף את המידע, אל תיתן אותו",
    body: "אל תניח הנחות ואל תסיק מסקנות באמצע השיחה. ברגע שאתה מניח הנחה, הסיפור שאתה מספר לעצמך כבר לא מדויק, ואתה פוגע במכירה. לא הבנת משהו? עצור והפעל סגירת ביניים: אם הבנתי אותך נכון, תקן אותי אם אני טועה. תאסוף את האתגר שלו, הכאב שלו והחלום שלו. רק אחרי מברר עמוק, ורק אחרי שהוא הסכים שהבנת אותו, אתה עושה את המעבר האסרטיבי ומציג את המחיר כהשקעה שלו בעצמו.",
  },
];

export default function GuidePage() {
  return (
    <main className="flex-1">
      <ReadingProgress />
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy grain-dark">
        {/* soft radial glow, off-center for asymmetry */}
        <div
          className="absolute -top-24 left-[-10%] w-[520px] h-[520px] rounded-full opacity-30 blur-[120px] pointer-events-none"
          style={{ background: "var(--primary)" }}
          aria-hidden="true"
        />
        <div className="relative max-w-[760px] mx-auto px-5 pt-16 pb-14 md:pt-24 md:pb-20">
          <div className="flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-8">
            <span className="w-8 h-px bg-primary/60" aria-hidden="true" />
            <span className="text-white/30 tracking-normal normal-case font-medium">
              6 דקות קריאה
            </span>
          </div>

          <h1 className="font-display text-[2.5rem] leading-[1.05] md:text-6xl md:leading-[1.02] font-black text-white text-balance mb-6">
            להוביל כל שיחה בביטחון,
            <br />
            ולסגור <span className="text-primary">עסקאות פרימיום</span> מתוך
            הקשבה.
          </h1>

          <p className="text-lg md:text-xl text-white/65 leading-relaxed max-w-xl">
            למה השיטות הישנות שחקו אותך, ואיך מפסיקים לשפוך מידע ומתחילים להקשיב
            ולהוביל. בלי סקריפטים, בלי לחץ, בלי להישמע כמו מישהו שאתה לא.
          </p>

          <div className="flex items-center gap-3 mt-10 pt-8 border-t border-white/10">
            <span className="text-sm text-white/45">מאת</span>
            <span className="text-sm font-bold text-white">ליאב כהן</span>
            <span className="text-white/20" aria-hidden="true">
              ·
            </span>
            <span className="text-sm text-white/45">
              מלווה בעלי עסקים לסגור בשיחה הראשונה
            </span>
          </div>
        </div>
      </section>

      {/* פתיחה · המשך כהה, ליד אישי */}
      <section className="relative bg-navy grain-dark border-t border-white/[0.06]">
        <div className="relative max-w-[680px] mx-auto px-5 py-16 md:py-20">
          <FadeIn>
            <p className="font-display text-[1.75rem] md:text-[2.25rem] leading-[1.15] text-white font-bold mb-8">
              תקשיב לי רגע, ותהיה כן עם עצמך.
            </p>
            <div className="flex flex-col gap-5 text-[17px] leading-[1.75] text-white/70">
              <p>
                אם הגעת לכאן, כנראה שיש לך עסק טוב, שאתה איש מקצוע איכותי באמת, ושהמוצר
                או השירות שלך נותנים ערך מטורף. הלידים מגיעים, אנשים פונים אליך באופן
                שוטף, אבל ברגע האמת, כשצריך להרים טלפון, לנהל את השיחה ולנקוב במחיר,
                משהו בבטן פשוט מתכווץ.
              </p>
              <p>
                חוסר הוודאות הזה מוליד פחד, והפחד חוסם אותך. אתה דוחה שיחות, או גרוע
                מכך בורח לוואטסאפ רק כדי לא לדבר איתם, מהחשש שיידחו אותך. והלקוח
                בוואטסאפ? הוא ישר מבקש הצעת מחיר. אתה שולח לו אותה כשהלב דופק, והוא
                מנפנף, מסנן, ובסוף סוגר עם המתחרים שלך.
              </p>
              <p>
                זה קורה שוב ושוב. אתה מגיע לסוף החודש סחוט, עם הנגאובר רגשי שלא משאיר
                לך אנרגיה לזוגיות או לעצמך, ומביט בשורת רווח מעליבה שלא משקפת אפילו קצת
                את המאמץ האדיר שלך.
              </p>
            </div>

            {/* pull-quote במקום card */}
            <blockquote className="mt-12 pt-2">
              <p className="font-display text-[1.9rem] md:text-[2.5rem] leading-[1.15] text-white font-black">
                <span className="text-primary">אתה לא אשם.</span>
                <br />
                אף אחד לא לימד אותך איך לנהל שיחה ולהוביל אותה מנקודה א׳ לנקודה ב׳.
              </p>
              <p className="mt-5 text-[17px] text-white/60 leading-relaxed">
                התעשייה ניסתה לתכנת אותך לפעול כמו רובוט אגרסיבי, והערכים שלך פשוט
                סירבו לשתף פעולה עם הזיוף הזה. במדריך הזה אנחנו משנים את זה אחת ולתמיד.
              </p>
            </blockquote>
          </FadeIn>
        </div>
      </section>

      {/* פרק 1 · בהיר, אוויר */}
      <section className="relative bg-background overflow-hidden">
        <div className="max-w-[680px] mx-auto px-5 py-16 md:py-24">
          <FadeIn>
            <ChapterHeading number={1} eyebrow="הפרדיגמה">
              אשליית ה״גורו מכירות״
            </ChapterHeading>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-8 max-w-lg">
              למה שיטות השכנוע של פעם רק מבריחות את הלקוחות שלך היום?
            </p>

            <div className="flex flex-col gap-5 text-[17px] leading-[1.75] text-foreground/80">
              <p>
                שנים שטפו לנו את המוח שמכירות הן קרב. אמרו לך להיות גורו מכירות, לטרוף את
                השוק, לדחוף בכל הכוח ולדקלם סקריפטים נוקשים של טיפול בהתנגדויות,
                כאילו האדם בצד השני הוא אויב שצריך להכניע.
              </p>
              <p>
                אבל העולם השתנה. הצרכן של היום ער וחכם, כל המידע נמצא בחוץ, ואנשים
                מזהים מניפולציה מקילומטרים. ברגע שלקוח מריח לחץ, נואשות או סקריפט
                משוכפל מאיזה קורס ביוטיוב, מנגנוני ההגנה שלו עולים. הוא מסתכל עליך
                כמוצר גנרי, מתחיל להתווכח על המחיר, ובסוף ממשיך בחייו.
              </p>
            </div>

            <p className="font-display text-2xl md:text-[2rem] leading-[1.2] text-foreground font-black my-10 max-w-xl">
              מכירה אמיתית היא לא לשכנע. היא לקחת את הלקוח מהמצב הקיים למצב טוב יותר,
              עם השירות שלך. זו לא נוכלות, זו שליחות.
            </p>

            {/* השוואה · נרטיב אנכי, לא שני קלפי-מראה */}
            <div className="mt-4">
              <div className="mb-8">
                <div className="flex items-center gap-2.5 mb-4">
                  <X className="w-4 h-4 text-foreground/40" aria-hidden="true" />
                  <p className="text-sm font-bold tracking-wide text-foreground/50 uppercase">
                    השיטה הישנה, זו ששחקה אותך
                  </p>
                </div>
                <ul className="flex flex-col gap-3 ps-6">
                  {paradigmOld.map((item, i) => (
                    <li
                      key={i}
                      className="text-[15px] text-foreground/55 leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-navy grain-dark relative overflow-hidden p-7 md:p-9">
                <div className="flex items-center gap-2.5 mb-5">
                  <Check className="w-4 h-4 text-primary" aria-hidden="true" />
                  <p className="text-sm font-bold tracking-wide text-primary uppercase">
                    השיטה החדשה, זו שמשחררת אותך
                  </p>
                </div>
                <ul className="flex flex-col gap-4">
                  {paradigmNew.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3.5 text-[16px] text-white/85 leading-relaxed"
                    >
                      <span
                        className="font-display text-primary/70 font-black text-lg leading-none pt-0.5"
                        aria-hidden="true"
                      >
                        0{i + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* פרק 2 · כהה */}
      <section className="relative bg-navy grain-dark overflow-hidden">
        <div
          className="absolute bottom-[-15%] right-[-10%] w-[460px] h-[460px] rounded-full opacity-20 blur-[130px] pointer-events-none"
          style={{ background: "var(--primary)" }}
          aria-hidden="true"
        />
        <div className="relative max-w-[680px] mx-auto px-5 py-16 md:py-24">
          <FadeIn>
            <ChapterHeading number={2} eyebrow="האמת המשחררת" dark>
              הבררנות שלך היא היתרון
            </ChapterHeading>
            <p className="text-lg md:text-xl text-white/65 leading-relaxed mb-8 max-w-lg">
              למה דווקא הרגישות שאתה מתבייש בה היא הנשק הכי חזק שלך?
            </p>

            <div className="flex flex-col gap-5 text-[17px] leading-[1.75] text-white/75">
              <p>
                התסכול הריקנות, והחרדה שתוקפת אותך בכל צלצול שזה עוד לקוח שהולך
                לשאוב לך את האנרגיה, לא נובעים מזה שאתה לא בנוי לעסקים. הם נובעים מזה
                שאין לך מערכת מכירות מסודרת שתמלא אותך בשליטה ובוודאות.
              </p>
              <p>
                אתה לא צריך להפוך לאדם אטום כדי להצליח, ההיפך. ברגע שאתה מבין שאתה
                הדבר הכי חשוב בעסק, אתה מפסיק לרדוף אחרי הכסף ועובר לעמדה של סמכות.
                לקוחות קונים קודם אותך, ורק אחר כך את המוצר. המוצר הוא רק הנלווה
                למכירה.
              </p>
              <p>
                מותר לך, ואפילו חובה עליך, להיות כן ובררן, במיוחד בהתחלה. אתה לא צריך
                לקבל כל אחד. תהיה כירורגי, תמתח חבל קטיפה סביב הזמן והאנרגיה שלך,
                והלקוח בצד השני ירגיש את הוודאות שלך.
              </p>
            </div>

            <blockquote className="mt-12">
              <p className="font-display text-[1.9rem] md:text-[2.5rem] leading-[1.12] text-white font-black">
                העולם לא מתגמל ספק.
                <br />
                הוא מתגמל <span className="text-primary">ודאות</span>.
              </p>
              <p className="mt-5 text-[17px] text-white/60 leading-relaxed max-w-lg">
                כשאתה משדר ודאות שאין לה עוררין, אנשים מעריכים אותך, מכבדים את
                הגבולות שלך, ומשלמים מחירי פרימיום בלי להתווכח.
              </p>
            </blockquote>
          </FadeIn>
        </div>
      </section>

      {/* פרק 3 · בהיר, שלושת החוקים כרצף עריכתי */}
      <section className="relative bg-background overflow-hidden">
        <div className="max-w-[680px] mx-auto px-5 py-16 md:py-24">
          <FadeIn>
            <ChapterHeading number={3} eyebrow="הפרקטיקה">
              שלושת חוקי הברזל של שפת הגישור
            </ChapterHeading>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-14 max-w-lg">
              שלושה חוקים שלוקחים אותך מהמובל למוביל, ומעבירים כל שיחה מנקודה א׳
              לנקודה ב׳.
            </p>

            <div className="flex flex-col gap-16">
              {rules.map((rule) => (
                <article key={rule.number} className="relative">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="ghost-numeral text-5xl md:text-6xl text-primary/25">
                      0{rule.number}
                    </span>
                    <div>
                      <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-1">
                        {rule.kicker}
                      </p>
                      <h3 className="font-display text-2xl md:text-[1.75rem] font-black text-foreground leading-tight">
                        {rule.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-[17px] leading-[1.75] text-foreground/80 ps-1">
                    {rule.body}
                  </p>

                  {rule.dialogue && (
                    <figure className="mt-6 rounded-2xl border border-border bg-card overflow-hidden">
                      <figcaption className="px-6 py-3 border-b border-border bg-secondary/50 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
                        <span className="text-[11px] font-bold tracking-wide uppercase text-muted-foreground">
                          מתוך שיחת מכירה אמיתית
                        </span>
                      </figcaption>
                      <div className="divide-y divide-border">
                        <div className="px-6 py-4">
                          <p className="text-[11px] font-bold text-muted-foreground mb-1.5">
                            הליד
                          </p>
                          <p className="text-[15px] text-foreground/65 leading-relaxed">
                            “{rule.dialogue.customer}”
                          </p>
                        </div>
                        <div className="px-6 py-4 bg-primary/[0.05]">
                          <p className="text-[11px] font-bold text-primary mb-1.5">
                            אתה, מפעיל שפת גישור
                          </p>
                          <p className="text-[15px] text-foreground leading-relaxed font-medium">
                            “{rule.dialogue.seller}”
                          </p>
                        </div>
                      </div>
                    </figure>
                  )}
                </article>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* הצעד הבא · גשר כהה אל ה-CTA */}
      <section className="relative bg-navy grain-dark border-t border-white/[0.06]">
        <div className="relative max-w-[680px] mx-auto px-5 py-16 md:py-20">
          <FadeIn>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-5">
              מהתיאוריה לשטח
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-black text-white leading-tight mb-6">
              עכשיו כשאתה מבין את ה״מה״, בוא נדבר על ה״איך״.
            </h2>
            <div className="flex flex-col gap-5 text-[17px] leading-[1.75] text-white/70">
              <p>
                הבנת למה השיטות הישנות שחקו אותך, למה הפחד חסם אותך, ולמה אתה חייב
                להפסיק לשפוך מידע ולהתחיל להקשיב ולהשיב בשאלה. אבל ידע מהדף זה נחמד,
                וזה ממש לא מספיק. חייבים ליישם אותו.
              </p>
              <p>
                וזה בדיוק מה שנעשה יחד, אחד על אחד.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA · פגישת אבחון אישית עם סימולציית מכירות */}
      <DiagnosisCTA />
    </main>
  );
}

function ChapterHeading({
  number,
  eyebrow,
  dark = false,
  children,
}: {
  number: number;
  eyebrow: string;
  dark?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="relative mb-6">
      <span
        className={`ghost-numeral absolute -top-10 md:-top-14 -start-2 text-[7rem] md:text-[10rem] select-none pointer-events-none ${
          dark ? "text-white/[0.05]" : "text-foreground/[0.04]"
        }`}
        aria-hidden="true"
      >
        {number}
      </span>
      <div className="relative">
        <p
          className={`text-[11px] font-bold tracking-[0.25em] uppercase mb-3 ${
            dark ? "text-primary" : "text-primary"
          }`}
        >
          פרק {number} · {eyebrow}
        </p>
        <h2
          className={`font-display text-3xl md:text-[2.75rem] font-black leading-[1.08] ${
            dark ? "text-white" : "text-foreground"
          }`}
        >
          {children}
        </h2>
      </div>
    </div>
  );
}
