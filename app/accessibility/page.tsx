import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "הצהרת נגישות | ליאב כהן",
  description: "הצהרת הנגישות של אתר ליאב כהן בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות.",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "8 בספטמבר 2026";

export default function AccessibilityPage() {
  return (
    <main className="flex-1 bg-white text-foreground">
        <article className="mx-auto max-w-3xl px-5 py-12 md:py-16 leading-relaxed">
          <Link href="/" className="text-sm text-primary hover:underline">
            ← חזרה לדף הראשי
          </Link>
          <h1 className="mt-4 text-3xl md:text-4xl font-extrabold">הצהרת נגישות</h1>
          <p className="mt-2 text-sm text-muted-foreground">עדכון אחרון: {LAST_UPDATED}</p>

          <Section title="המחויבות שלנו לנגישות">
            <p>
              ליאב כהן (להלן: <b>"בעל האתר"</b>) רואה חשיבות עליונה בהנגשת השירותים והתכנים
              באתר זה לאנשים עם מוגבלות, מתוך אמונה שלכל אדם זכות שווה לגישה למידע. אנו פועלים
              להנגיש את האתר בהתאם להוראות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות
              נגישות לשירות), התשע״ג-2013, ובהתאם לתקן הישראלי ת״י 5568 ברמת AA, המבוסס על
              הנחיות WCAG 2.0.
            </p>
          </Section>

          <Section title="התאמות שבוצעו באתר">
            <ul className="list-disc pr-5 space-y-2">
              <li>מבנה סמנטי תקין (HTML5) המאפשר ניווט בקורא מסך.</li>
              <li>ניווט מלא באמצעות מקלדת – Tab, Shift+Tab, Enter.</li>
              <li>טקסט חלופי (alt) לתמונות הנושאות מידע.</li>
              <li>תוויות (labels) ברורות לכל שדות הטופס.</li>
              <li>ניגודיות צבעים גבוהה בהתאם לדרישות התקן.</li>
              <li>גופנים ברורים בגדלים נגישים והתאמה ל-RTL (עברית).</li>
              <li>כיווניות עברית (dir="rtl") לאורך כל האתר.</li>
              <li>תאימות לרספונסיביות לטלפון, טאבלט ומחשב.</li>
              <li>הגדרת lang="he" לזיהוי שפה ע״י קורא מסך.</li>
            </ul>
          </Section>

          <Section title="חלקים שטרם הונגשו במלואם">
            <p>
              ייתכן ובאתר קיימים תכנים, סרטוני וידאו או רכיבי צד שלישי שטרם הותאמו במלואם
              לדרישות הנגישות. אנו פועלים לשפר את הנגישות באופן מתמיד. אם נתקלת ברכיב שאינו
              נגיש – אנא פנה אלינו לקבלת המידע באמצעי חלופי.
            </p>
          </Section>

          <Section title="המלצות לשימוש בכלי נגישות בדפדפן">
            <ul className="list-disc pr-5 space-y-2">
              <li>הגדלת גודל הטקסט – Ctrl + (Windows) / Cmd + (Mac).</li>
              <li>שימוש בקוראי מסך מובנים: VoiceOver (Mac/iOS), NVDA או JAWS (Windows), TalkBack (Android).</li>
              <li>הפעלת מצב ניגודיות גבוהה בהגדרות מערכת ההפעלה.</li>
            </ul>
          </Section>

          <Section title="פנייה לרכז הנגישות">
            <p>
              נתקלת בקושי בגלישה באתר? יש לך הצעה לשיפור? נשמח לעזור. ניתן ליצור קשר עם רכז
              הנגישות של האתר:
            </p>
            <p className="mt-3">
              <b>רכז נגישות:</b> ליאב כהן
              <br />
              <b>דוא״ל:</b>{" "}
              <a href="mailto:liavcohen798@gmail.com" className="text-primary underline">
                liavcohen798@gmail.com
              </a>
              <br />
              <b>זמן מענה משוער:</b> עד 7 ימי עסקים.
            </p>
          </Section>

          <Section title="עדכון ההצהרה">
            <p>
              הצהרת נגישות זו עודכנה לאחרונה בתאריך {LAST_UPDATED}. אנו בוחנים את נגישות האתר
              באופן תקופתי ומעדכנים את ההצהרה בהתאם.
            </p>
          </Section>
        </article>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="text-xl md:text-2xl font-bold mb-3">{title}</h2>
      <div className="text-base text-foreground/85 space-y-3">{children}</div>
    </section>
  );
}
