import type { Metadata } from "next";
import { CheckCircle, Mail, ShieldAlert } from "lucide-react";
import { CalendlyCallout } from "@/components/CalendlyCallout";

export const metadata: Metadata = {
  title: "תודה! המדריך בדרך אליך במייל",
  description: "המדריך נשלח אליך לאימייל. בדוק את תיבת הדואר ואת תיקיית הספאם.",
  robots: "noindex",
};

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
          <p className="text-base text-white/75 max-w-lg mx-auto leading-relaxed mb-6">
            שלחנו לך את תבנית המכירה ב-8 שלבים ישירות לאימייל שהזנת. תוך כמה דקות הוא אצלך בתיבה.
          </p>
          <a
            href="/guide"
            className="inline-flex items-center justify-center px-6 py-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 rounded-lg transition-colors duration-200 text-sm font-medium"
          >
            צפה בתבנית עכשיו →
          </a>
        </div>
      </section>

      {/* Inbox instructions */}
      <section className="max-w-[680px] mx-auto px-5 py-12">
        <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/[0.08] via-card to-card overflow-hidden shadow-sm relative">
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

      {/* Personal implementation CTA */}
      <CalendlyCallout
        title="בוא נטמיע את התבנית בעסק שלך"
        variant="dark"
        buttonText="קבע פגישת פיצוח חינם"
        subtitle="חינם לגמרי. ללא התחייבות."
      />
    </main>
  );
}
