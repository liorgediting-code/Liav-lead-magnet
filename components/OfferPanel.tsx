import { Check, Gift, Search, PhoneCall, RotateCcw } from "lucide-react";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import VideoCarousel from "@/components/VideoCarousel";

const salesDeliverables = [
  "10 פגישות ליווי אחד על אחד",
  "3 חודשים של עבודה משותפת",
  "סימולציות מכירה חיות בכל פגישה",
  "דוח ניתוח שיחות מכירה",
];

const marketingDeliverables = [
  "אסטרטגיית שיווק ממומן",
  "בניית קמפיין ממוקד",
  "סרטונים וניהול קמפיין",
  "דף נחיתה מותאם לעסק",
];

const callFeatures = [
  {
    Icon: Search,
    title: "אבחון תהליך המכירה שלך",
    desc: "נעבור ביחד על השיחות שלך, נבין מה עובד, מה לא, ואיפה הלקוחות נופלים.",
  },
  {
    Icon: PhoneCall,
    title: "סימולציית מכירה חיה",
    desc: "ננסה שיחת מכירה בזמן אמת — אני אהיה הלקוח, ואתה תמכור לי.",
  },
  {
    Icon: RotateCcw,
    title: "תיקון + תסריט מותאם",
    desc: "תצא עם תסריט מותאם לעסק שלך ונקודות לשיפור ברורות.",
  },
];

export default function OfferPanel({ calendarLink }: { calendarLink: string }) {
  return (
    <>
      {/* ── 1. COACHING OFFER ── */}
      <section className="bg-navy">
        <div className="max-w-[680px] mx-auto px-5 py-16 md:py-20">
          <p className="text-xs font-bold tracking-widest text-primary/70 uppercase mb-4 text-center">
            הצעד הבא
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3 text-center">
            ליווי אישי שמשלב{" "}
            <span className="text-primary">מכירות ושיווק</span> יחד
          </h2>
          <p className="text-white/55 text-sm text-center leading-relaxed mb-10 max-w-md mx-auto">
            3 חודשים. שני תחומים. תוצאות אמיתיות.
          </p>

          {/* Two-column deliverables */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div className="bg-white/[0.05] rounded-2xl p-5 border border-white/10">
              <p className="text-xs font-bold tracking-widest text-primary uppercase mb-4">
                מכירות
              </p>
              <ul className="flex flex-col gap-3">
                {salesDeliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm text-white/75 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/[0.05] rounded-2xl p-5 border border-white/10">
              <p className="text-xs font-bold tracking-widest text-primary uppercase mb-4">
                שיווק
              </p>
              <ul className="flex flex-col gap-3">
                {marketingDeliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm text-white/75 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mastermind bonus */}
          <div className="flex items-center gap-3 bg-primary/10 rounded-xl px-5 py-4 border border-primary/25 mb-10">
            <Gift className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
            <div>
              <p className="text-sm font-bold text-primary">
                בונוס במתנה — מאסטרמיינד מכירות ושיווק
              </p>
              <p className="text-xs text-white/45 mt-0.5">
                גישה לקבוצה בלעדית לבעלי עסקים שמתקדמים יחד
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href={calendarLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-flex items-center justify-center h-14 px-10 bg-primary text-primary-foreground font-bold text-base rounded-xl hover:bg-primary/90 transition-colors duration-200 shadow-lg shadow-primary/25 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              קבע שיחת ייעוץ — בחינם
            </a>
            <p className="text-white/35 text-xs mt-3">
              שיחה קצרה לבדוק אם התוכנית מתאימה לך
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. FREE DISCOVERY CALL (gift after coaching offer) ── */}
      <section className="bg-background">
        <div className="max-w-[680px] mx-auto px-5 py-12">
          <div className="bg-gradient-to-l from-primary/5 to-primary/15 rounded-2xl p-8 border border-primary/20">
            <p className="text-xs font-bold tracking-widest text-primary/70 uppercase mb-3 text-center">
              במתנה
            </p>
            <h3 className="text-xl md:text-2xl font-extrabold text-foreground text-center mb-3">
              שיחת פיצוח בחינם — אחד על אחד
            </h3>
            <p className="text-sm text-muted-foreground text-center leading-relaxed mb-6 max-w-sm mx-auto">
              30-60 דקות. לא שיחת מכירה. תצא עם תמונה ברורה של מה שבור ואיך לתקן.
            </p>

            <div className="flex flex-col gap-3 mb-8 max-w-md mx-auto">
              {callFeatures.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 bg-background rounded-xl p-4 border border-border"
                >
                  <item.Icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-bold text-foreground mb-0.5">{item.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href={calendarLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer inline-flex items-center justify-center h-14 px-10 bg-primary text-primary-foreground font-bold text-base rounded-xl hover:bg-primary/90 transition-colors duration-200 shadow-lg shadow-primary/20 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                קבע שיחת פיצוח בחינם
              </a>
              <p className="text-muted-foreground text-xs mt-3">
                ללא התחייבות. ללא כרטיס אשראי.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SOCIAL PROOF — carousels ── */}
      <section className="bg-background border-t border-border">
        <div className="max-w-[680px] mx-auto px-5 py-12">
          <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-8 text-center">
            מה אומרים לקוחות
          </p>

          {/* WhatsApp screenshots carousel */}
          <div className="mb-10">
            <TestimonialCarousel />
          </div>

          {/* Video testimonials carousel */}
          <div>
            <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-6 text-center">
              סרטוני המלצה
            </p>
            <VideoCarousel />
          </div>

          <div className="mt-10 text-center">
            <a
              href={calendarLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-flex items-center justify-center h-14 px-10 bg-primary text-primary-foreground font-bold text-base rounded-xl hover:bg-primary/90 transition-colors duration-200 shadow-lg shadow-primary/20 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              קבע שיחת פיצוח בחינם
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
