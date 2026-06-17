import type { Metadata } from "next";
import { Sparkles, AlertTriangle, Eye, ChevronDown } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";
import { CalendlyCallout } from "@/components/CalendlyCallout";

export const metadata: Metadata = {
  title: "בונוס למתקדמים | החוקים שמפילים עסקאות + סימולציית מכירה",
  description: "שני סרטוני בונוס: החוקים שאסור לעשות בשיחת מכירה וסימולציה אמיתית עם לקוח",
  robots: "noindex",
};

export default function BonusPage() {
  return (
    <main className="flex-1">
      <ScrollToTop />
      {/* Header */}
      <section className="bg-gradient-to-b from-navy to-[oklch(0.22_0.04_55)] text-white">
        <div className="max-w-[720px] mx-auto px-5 py-14 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
            <span className="text-primary text-sm font-medium">
              בונוס למתקדמים, בחינם לגמרי
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            הרובד שאף אחד לא מלמד אותך{" "}
            <span className="text-primary">על מכירות</span>
          </h1>
          <p className="text-base text-white/70 max-w-lg mx-auto">
            החוקים הסודיים במכירות, והדברים שאסור לך בחיים לעשות בשיחה. בדיוק אלו שמפילים לך את העסקאות.
          </p>
        </div>
      </section>

      {/* סרטון 1 — מה אסור לעשות במכירה */}
      <section id="video-1" className="bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-[720px] mx-auto px-5 py-16 md:py-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/30 rounded-full px-4 py-1.5 mb-5">
              <AlertTriangle className="w-4 h-4 text-destructive" aria-hidden="true" />
              <span className="text-destructive text-xs font-bold tracking-wide">
                החוקים הסודיים במכירות
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-foreground leading-tight mb-4">
              החוקים שחובה לדעת:{" "}
              <span className="text-primary">מה אסור לעשות בשיחת מכירה</span>
            </h2>
            <p className="text-foreground/70 text-base leading-relaxed max-w-lg mx-auto mb-2">
              יש כמה דברים שרוב המוכרים עושים אוטומטית, בלי לשים לב, ובדיוק הם אלו שמפילים את העסקה ברגע הקריטי.
            </p>
            <p className="text-foreground/85 text-base font-semibold leading-relaxed max-w-lg mx-auto">
              בסרטון הזה אני עובר על הטעויות שאסור לך לעשות בשום מצב בשיחת מכירה, והרוב המוחלט של האנשים עושים אותן.
            </p>
          </div>

          <div className="max-w-[640px] mx-auto rounded-2xl overflow-hidden border border-border shadow-md bg-navy">
            <div className="relative aspect-video">
              <iframe
                src="https://www.youtube.com/embed/gXhL1cn0tNg"
                title="החוקים שחובה לדעת, מה אסור לעשות בשיחת מכירה"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* חץ הנעה לשלב הבא */}
          <div className="flex flex-col items-center mt-12 mb-2">
            <p className="text-2xl md:text-3xl font-black text-foreground mb-4 tracking-wide">
              השלב הבא
            </p>
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center shadow-xl shadow-primary/40" style={{ animation: 'var(--animate-scroll-cue)' }}>
              <ChevronDown className="w-10 h-10 md:w-12 md:h-12 text-white" aria-hidden="true" strokeWidth={3} />
            </div>
          </div>
        </div>
      </section>

      {/* סרטון 2 — סימולציה אמיתית */}
      <section id="video-2" className="bg-background border-t border-border">
        <div className="max-w-[720px] mx-auto px-5 py-16 md:py-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-5">
              <Eye className="w-4 h-4 text-primary" aria-hidden="true" />
              <span className="text-primary text-xs font-bold tracking-wide">
                מאחורי הקלעים
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-foreground leading-tight mb-4">
              סימולציית מכירה אמיתית{" "}
              <span className="text-primary">שעשיתי עם לקוח שלי</span>
            </h2>
            <p className="text-foreground/70 text-base leading-relaxed max-w-lg mx-auto mb-2">
              תיאוריה זה דבר אחד. לראות איך זה נראה בפועל, זה משהו אחר לגמרי.
            </p>
            <p className="text-foreground/85 text-base font-semibold leading-relaxed max-w-lg mx-auto">
              בסרטון הזה תראה איך הופכים התנגדות אמיתית על מוצר למצב שהלקוח משכנע את עצמו לקנות.
            </p>
          </div>

          <div className="max-w-[640px] mx-auto rounded-2xl overflow-hidden border border-border shadow-md bg-navy">
            <div className="relative aspect-video">
              <iframe
                src="https://www.youtube.com/embed/i1f9pBwzzkY"
                title="סימולציית מכירה אמיתית עם לקוח"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-5 max-w-md mx-auto">
            שים לב לכל מילה, לכל שתיקה, ולכל שינוי טון. שם נמצאים הכסף והעסקאות.
          </p>
        </div>
      </section>

      {/* פגישת פיצוח */}
      <CalendlyCallout
        title="עכשיו בוא נטמיע את התבנית בעסק שלך"
        intro="ראית את התבנית בפעולה — עכשיו הגיע הזמן ליישם אותה ספציפית על המוצר שלך. בפגישת פיצוח אנחנו עושים את זה יחד, צעד-צעד."
        variant="dark"
        buttonText="קבע פגישת פיצוח חינם"
        subtitle="חינם לגמרי. ללא התחייבות."
      />
    </main>
  );
}
