import {
  AlertCircle,
  BadgeDollarSign,
  TrendingDown,
  Handshake,
  Target,
  Shield,
  Sunrise,
  PhoneCall,
  Wallet,
  Rocket,
  Check,
  X,
  Minus,
} from "lucide-react";
import OptInForm from "@/components/OptInForm";
import FadeIn from "@/components/FadeIn";

export default function LandingPage() {
  return (
    <main className="flex-1">
      {/* ══════════ 1. HERO ══════════ */}
      <section className="relative overflow-hidden bg-[#111111] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.78_0.17_70_/_0.06),transparent_60%)]" />
        <div className="relative max-w-[680px] mx-auto px-5 py-16 md:py-24 text-center">
          {/* Scarcity note */}
          <div
            className="inline-flex items-center gap-2 bg-[#fff3cd] text-[#7c5c00] rounded-lg px-4 py-2 mb-8 text-sm font-bold"
            role="status"
          >
            <span
              className="inline-block w-2 h-2 bg-red-600 rounded-full animate-pulse"
              aria-hidden="true"
            />
            מקבל עד 5 לקוחות חדשים בחודש
          </div>

          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-5">
            הבעיה שלך היא לא המוצר.{" "}
            <span className="text-gold">היא שיחת המכירה</span>
          </h1>

          <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-lg mx-auto mb-10">
            תבנית מ-8 שלבים עם תסריטים מילה במילה. תפסיק לאלתר בשיחות
            ותתחיל לסגור.
          </p>

          {/* Hero Form */}
          <div className="bg-white rounded-2xl p-6 max-w-sm mx-auto text-foreground">
            <p className="text-sm font-bold text-foreground mb-4">
              קבל את התבנית בחינם
            </p>
            <OptInForm />
          </div>
        </div>
      </section>

      {/* ══════════ 2. MIRROR ══════════ */}
      <FadeIn>
        <section className="border-b border-border/30">
          <div className="max-w-[680px] mx-auto px-5 py-14">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-8 text-center">
              תגיד לי אם זה מוכר
            </h2>

            <div className="flex flex-col gap-4">
              {[
                "כל שיחת מכירה מרגישה כמו אלתור. אין תהליך, אין מבנה.",
                "ברגע שמגיעים לכסף, אתה מגמגם. מוריד מחיר או זורק הנחה שלא תכננת.",
                'לקוחות אומרים "אני צריך לחשוב על זה" ונעלמים. שניכם יודעים שזה לא חוזר.',
                "הלידים נכנסים, אבל לא הופכים ללקוחות. הכסף על הפרסום יורד לפח.",
                'כל חודש אתה אומר "החודש הבא ישתנה". שום דבר לא משתנה.',
                "הטלפון מצלצל ואתה מרגיש לחץ בבטן. שיחת מכירה הפכה למבחן.",
              ].map((line) => (
                <div
                  key={line}
                  className="flex items-start gap-3 bg-accent/30 rounded-lg p-4 border border-border/20"
                >
                  <Minus
                    className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {line}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ══════════ 3. AGITATE ══════════ */}
      <FadeIn>
        <section className="bg-accent/20 border-b border-border/30">
          <div className="max-w-[680px] mx-auto px-5 py-14">
            <h2 className="text-xl font-bold text-foreground mb-6 text-center">
              כל חודש שעובר בלי תהליך מכירה
            </h2>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                {
                  icon: AlertCircle,
                  number: "70%",
                  label: "מהלידים נאבדים בשיחה הראשונה",
                },
                {
                  icon: BadgeDollarSign,
                  number: "₪5,000+",
                  label: "נשרפים כל חודש על פרסום שלא חוזר",
                },
                {
                  icon: TrendingDown,
                  number: "12+",
                  label: "עסקאות שנפלו השנה בגלל חוסר תהליך",
                },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon
                    className="w-6 h-6 mx-auto mb-2 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <p className="text-2xl md:text-3xl font-black text-foreground">
                    {stat.number}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-sm text-foreground/70 leading-relaxed text-center">
              אתה טוב במה שאתה עושה. הלקוחות שכן סוגרים אתך, מרוצים.
              הבעיה היא לא ביכולת שלך. היא בתהליך.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* ══════════ 4. ROOT CAUSE ══════════ */}
      <FadeIn>
        <section className="border-b border-border/30">
          <div className="max-w-[680px] mx-auto px-5 py-14">
            <h2 className="text-xl font-bold text-foreground mb-6 text-center">
              למה שום דבר לא עבד עד עכשיו?
            </h2>

            <div className="flex flex-col gap-4 mb-8">
              <p className="text-sm text-foreground/80 leading-relaxed">
                קראת ספרים. צפית בסרטונים. שילמת על קורס. אבל בשיחה הבאה,
                חזרת לאלתר.
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                הסיבה פשוטה: אף אחד לא נתן לך תהליך שלם עם תסריטים שאפשר
                להשתמש בהם <strong>היום</strong>. קיבלת עקרונות וטיפים, לא
                מערכת.
              </p>
            </div>

            {/* Insight Box */}
            <div className="bg-navy text-white rounded-xl p-6 text-center">
              <p className="text-base md:text-lg font-bold leading-relaxed">
                <span aria-hidden="true">❝</span> הבעיה שלך היא לא שאתה לא
                יודע למכור.
                <br />
                <span className="text-gold">
                  הבעיה היא שאין לך תהליך שמוביל את השיחה.
                </span>{" "}
                <span aria-hidden="true">❞</span>
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ══════════ 5. EPIPHANY (dark section) ══════════ */}
      <FadeIn>
        <section className="bg-[#111111] text-white">
          <div className="max-w-[680px] mx-auto px-5 py-14 text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-6">
              אז למה יש כאלה שסוגרים כל שיחה שנייה?
            </h2>

            <p className="text-sm text-white/70 leading-relaxed mb-4">
              הם לא יותר חכמים ממך. לא יותר כריזמטיים. ואין להם תקציב פרסום
              גדול יותר.
            </p>

            <p className="text-lg font-bold text-gold mb-6">
              יש להם <span className="underline">מערכת</span>. תהליך. תבנית
              שעובדת בכל שיחה.
            </p>

            <p className="text-sm text-white/60 leading-relaxed max-w-md mx-auto">
              הם יודעים מה לומר בפתיחה, איך לשאול שאלות שפותחות את הלקוח,
              מתי להציג מחיר, ואיך להתמודד עם כל התנגדות. לא כישרון מולד.
              תסריט.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* ══════════ 5.5 WHO IT'S FOR ══════════ */}
      <FadeIn>
        <section className="border-b border-border/30">
          <div className="max-w-[680px] mx-auto px-5 py-14">
            <h2 className="text-xl font-bold text-foreground mb-8 text-center">
              בשבילך? לא בשבילך?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Yes column */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h3 className="font-bold text-green-700 mb-4 text-sm">
                  זה בשבילך אם...
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {[
                    "יש לך עסק שמוכר שירותים",
                    "אתה מנהל שיחות מכירה בטלפון או בזום",
                    "אתה רוצה תהליך מסודר במקום אלתור",
                    "אתה מוכן להתאמן ולתרגל",
                    "אתה רוצה לסגור יותר, בלי להרגיש דוחף",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-green-800"
                    >
                      <Check
                        className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* No column */}
              <div className="bg-red-50/60 border border-red-200/60 rounded-xl p-5">
                <h3 className="font-bold text-red-600/80 mb-4 text-sm">
                  זה לא בשבילך אם...
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {[
                    "מחפש קסם שיסגור בלעדיך",
                    "לא מוכן להשקיע 20 דקות בקריאה ותרגול",
                    "מוכר מוצרים פיזיים באי-קומרס",
                    "מצפה למספרים בלי להתאמן",
                    "לא מאמין בגישה של מערכות יחסים",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-red-700/70"
                    >
                      <X
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form after Who It's For */}
            <div className="mt-10 bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-navy/5 border border-border/40 max-w-sm mx-auto">
              <p className="text-sm font-bold text-foreground mb-4 text-center">
                מתאים לי, רוצה לראות את התבנית
              </p>
              <OptInForm />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ══════════ 7. FUTURE PACE ══════════ */}
      <FadeIn>
        <section className="bg-accent/20 border-b border-border/30">
          <div className="max-w-[680px] mx-auto px-5 py-14">
            <h2 className="text-xl font-bold text-foreground mb-8 text-center">
              עכשיו תדמיין רגע...
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  Icon: Sunrise,
                  title: "הבוקר שלך",
                  text: "אתה קם, בודק את הטלפון, 3 לידים חדשים. הפעם אתה לא נלחץ. יש לך תהליך. אתה יודע בדיוק מה לומר.",
                },
                {
                  Icon: PhoneCall,
                  title: "השיחה",
                  text: "הלקוח מדבר, אתה מקשיב. שואל שאלות שפותחות אותו. הוא מספר לך בדיוק מה הוא צריך, ואתה מתאים את השירות בול.",
                },
                {
                  Icon: Wallet,
                  title: "הסגירה",
                  text: 'אתה אומר את המחיר בביטחון. בלי גמגום. הלקוח שותק רגע ושואל: "איך מעבירים?" ככה נראה תהליך שעובד.',
                },
                {
                  Icon: Rocket,
                  title: "הצמיחה",
                  text: "אחרי חודש של תרגול, אחוזי הסגירה שלך עולים. אתה בוחר לקוחות. מעלה מחירים. המכירה כבר לא הצוואר הבקבוק.",
                },
              ].map((scenario) => (
                <div
                  key={scenario.title}
                  className="bg-white rounded-xl p-5 border border-border/30 shadow-sm"
                >
                  <scenario.Icon
                    className="w-6 h-6 text-primary mb-3"
                    aria-hidden="true"
                  />
                  <h3 className="text-sm font-bold text-foreground mb-2">
                    {scenario.title}
                  </h3>
                  <p className="text-xs text-foreground/70 leading-relaxed">
                    {scenario.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ══════════ 8. SOLUTION — What's Inside ══════════ */}
      <FadeIn>
        <section className="border-b border-border/30">
          <div className="max-w-[680px] mx-auto px-5 py-14">
            <h2 className="text-2xl font-bold text-foreground mb-3 text-center">
              מה יש בתוך התבנית?
            </h2>
            <p className="text-sm text-muted-foreground text-center mb-10">
              8 שלבים עם תסריטים מוכנים, מהפתיחה ועד הסגירה
            </p>

            <div className="grid md:grid-cols-3 gap-5 mb-10">
              {[
                {
                  Icon: Handshake,
                  title: "פתיחה + אבחון",
                  desc: "תפתח שיחה שבונה אמון, ותשאל שאלות שגורמות ללקוח הכי סגור לדבר תוך דקות",
                },
                {
                  Icon: Target,
                  title: "הצגה + סגירה",
                  desc: "תציג שירות שהלקוח ירגיש שנבנה בשבילו, ותעבור למחיר בנינוחות",
                },
                {
                  Icon: Shield,
                  title: "התנגדויות + פולואפ",
                  desc: "תסריטים מוכנים ל׳יקר לי׳, ׳צריך לחשוב׳ ו׳לא בטוח׳ עם שאלות שפותחות דיאלוג",
                },
              ].map((pillar) => (
                <div
                  key={pillar.title}
                  className="text-center bg-accent/30 rounded-xl p-5 border border-border/20"
                >
                  <pillar.Icon
                    className="w-8 h-8 text-primary mx-auto mb-3"
                    aria-hidden="true"
                  />
                  <h3 className="text-sm font-bold text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-foreground/70 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Form after Solution */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-navy/5 border border-border/40 max-w-md mx-auto">
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-foreground mb-1">
                  שלח לי את התבנית בחינם
                </h3>
                <p className="text-sm text-muted-foreground">
                  3 שדות ← גישה מיידית לתהליך המלא
                </p>
              </div>
              <OptInForm />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ══════════ 10. PROOF ══════════ */}
      <FadeIn>
        <section className="bg-navy text-white">
          <div className="max-w-[680px] mx-auto px-5 py-14">
            <p className="text-xs text-white/40 mb-6 uppercase tracking-wider font-medium text-center">
              מספרים מדברים
            </p>

            <div className="grid grid-cols-4 gap-4 mb-10">
              {[
                { number: "8", label: "שלבים בתהליך" },
                { number: "30+", label: "תסריטים מוכנים" },
                { number: "500+", label: "בעלי עסקים השתמשו" },
                { number: "10", label: "דקות קריאה" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl md:text-3xl font-black text-gold">
                    {stat.number}
                  </p>
                  <p className="text-xs text-white/50 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Testimonials */}
            <div className="grid md:grid-cols-2 gap-5 mb-10">
              <blockquote className="bg-white/5 rounded-xl p-5 border border-white/10 border-s-2 border-s-[#f97316]">
                <p className="text-sm text-white/80 leading-relaxed mb-3">
                  ״הייתי סוגר 1 מ-7 לידים. אחרי שהתחלתי לעבוד עם התבנית,
                  אני סוגר 1 מ-3. שינוי של עשרות אלפי שקלים בחודש.״
                </p>
                <footer className="text-xs text-white/40">
                  — [שם], יועץ עסקי, [עיר]
                </footer>
              </blockquote>
              <blockquote className="bg-white/5 rounded-xl p-5 border border-white/10 border-s-2 border-s-[#f97316]">
                <p className="text-sm text-white/80 leading-relaxed mb-3">
                  ״שלב ה׳מבקר מקרב׳ שינה לי הכל. במקום למכור, אני שואל שאלות
                  והלקוח מוכר לעצמו. 3 חודשים שכל שיחה שנייה נסגרת.״
                </p>
                <footer className="text-xs text-white/40">
                  — [שם], מאמן כושר, [עיר]
                </footer>
              </blockquote>
            </div>

            {/* Form on dark background */}
            <div className="bg-white rounded-2xl p-6 max-w-sm mx-auto text-foreground">
              <p className="text-sm font-bold text-foreground mb-4 text-center">
                גם אני רוצה מספרים כאלה
              </p>
              <OptInForm />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ══════════ 12. FAQ ══════════ */}
      <FadeIn>
        <section className="border-b border-border/30">
          <div className="max-w-[680px] mx-auto px-5 py-14">
            <h2 className="text-xl font-bold text-foreground mb-8 text-center">
              שאלות שעולות
            </h2>

            <div className="flex flex-col gap-6">
              {[
                {
                  q: "״כבר ניסיתי קורסי מכירות ולא עבד״",
                  a: "זה לא קורס. אין 40 שעות וידאו שלא תסיים. זו תבנית מעשית עם תסריטים מוכנים שאתה לוקח ומתאים לעסק שלך תוך 10 דקות. ההבדל: תתרגל על זה בשיחה הבאה שלך, לא ׳מתישהו׳.",
                },
                {
                  q: "״זה באמת חינם? מה התמורה?״",
                  a: "התבנית מלאה ומוכנה לשימוש, בלי חלקים חסרים. אם תרצה ליווי אישי שמותאם לעסק שלך, יש כזו אפשרות. אין מכירה אוטומטית ואין לחץ.",
                },
                {
                  q: "״זה יעבוד בתחום שלי?״",
                  a: "התבנית בנויה לכל עסק שמוכר שירותים דרך שיחה. מאמנים, יועצים, מטפלים, פרילנסרים, סוכני נדל״ן, מעצבים. השלבים אוניברסליים, התסריטים מותאמים על ידך.",
                },
                {
                  q: "״אין לי ניסיון במכירות״",
                  a: "בדיוק בשבילך. תעקוב אחרי 8 שלבים. כל שלב אומר לך מה לומר ולמה. אין צורך בכריזמה, רק ברצון לנהל שיחה בצורה מסודרת.",
                },
              ].map((item) => (
                <div
                  key={item.q}
                  className="border-b border-border/20 pb-5 last:border-0 last:pb-0"
                >
                  <p className="text-sm font-bold text-foreground mb-2">
                    {item.q}
                  </p>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ══════════ 13. FINAL CTA ══════════ */}
      <section className="bg-gradient-to-b from-accent/30 to-background">
        <div className="max-w-md mx-auto px-5 py-16">
          {/* Scarcity bar */}
          <div
            className="flex items-center justify-center gap-2 bg-[#fff3cd] border border-[#ffc107] rounded-lg px-4 py-2.5 mb-8 text-sm font-bold text-[#7c5c00]"
            role="status"
          >
            <span
              className="inline-block w-2 h-2 bg-red-600 rounded-full animate-pulse"
              aria-hidden="true"
            />
            מקבל עד 5 לקוחות חדשים בחודש. התבנית בחינם לזמן מוגבל.
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-foreground mb-3">
              מוכן להתחיל לסגור?
            </h2>
            <p className="text-sm text-muted-foreground">
              30 שניות ← תהליך מכירה מלא עם תסריטים. חינם.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl shadow-navy/5 border border-border/40">
            <OptInForm />
          </div>
        </div>
      </section>
    </main>
  );
}
