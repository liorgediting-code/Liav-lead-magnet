"use client";

import {
  Wrench,
  SlidersHorizontal,
  Clock,
  PlayCircle,
  Target,
  LucideIcon,
} from "lucide-react";

const CALENDLY_URL = "https://calendly.com/liavcohen798/30min";

interface CallFeature {
  Icon: LucideIcon;
  title: string;
  desc: string;
}

const DEFAULT_FEATURES: CallFeature[] = [
  {
    Icon: Wrench,
    title: "נטמיע את כל 8 השלבים על המוצר שלך",
    desc: "לא תבנית גנרית — נעבור שלב-שלב ונתאים כל אחד בדיוק למוצר, לקהל ולדרך המכירה שלך.",
  },
  {
    Icon: SlidersHorizontal,
    title: "תצא עם תסריט מכירה מוכן ליישום",
    desc: "בסוף הפגישה יהיה לך תסריט ספציפי שאתה יכול להשתמש בו כבר בשיחה הבאה שלך.",
  },
  {
    Icon: Clock,
    title: "30 דקות. בלי תשלום. בלי התחייבות.",
    desc: "פגישת פיצוח חינמית לגמרי, רק כדי שתצא עם תבנית שעובדת בשבילך.",
  },
];

const SIMULATION_FEATURES: CallFeature[] = [
  {
    Icon: PlayCircle,
    title: "סימולציית מכירות חיה מולי",
    desc: "ניכנס לתרגול אמיתי — אתה מוכר, אני הלקוח. תרגיש על הגוף איך מקשיבים, משיבים בשאלה ומובילים לסגירה.",
  },
  {
    Icon: Target,
    title: "נפצח את השיחה הספציפית שלך",
    desc: "ניקח את המוצר, הקהל וההתנגדויות האמיתיות שלך, ונבנה יחד את הדרך להוביל אותם מנקודה A לנקודה B.",
  },
  {
    Icon: Clock,
    title: "30 דקות. בלי תשלום. בלי התחייבות.",
    desc: "פגישת פיצוח חינמית לגמרי, רק כדי שתצא עם ביטחון וודאות לשיחה הבאה שלך.",
  },
];

const BONUS_FEATURES: CallFeature[] = [
  DEFAULT_FEATURES[0],
  DEFAULT_FEATURES[1],
  {
    Icon: Clock,
    title: "30 דקות. בלי תשלום. בלי התחייבות.",
    desc: "אימון מכירות במתנה, רק כדי שתצא עם תבנית שעובדת בשבילך.",
  },
];

const FEATURE_PRESETS: Record<string, CallFeature[]> = {
  template: DEFAULT_FEATURES,
  simulation: SIMULATION_FEATURES,
  bonus: BONUS_FEATURES,
};

interface CalendlyCalloutProps {
  title?: string;
  intro?: string;
  features?: CallFeature[];
  featurePreset?: "template" | "simulation" | "bonus";
  variant?: "light" | "dark";
  buttonText?: string;
  subtitle?: string;
  eyebrow?: string;
}

export function CalendlyCallout({
  title = "רוצה שאעזור לך ליישם את התבנית\nבעסק שלך – באופן אישי?",
  intro = "התבנית ב-8 השלבים שקיבלת היא כלי עוצמתי — אבל ליישם אותה נכון על המוצר שלך זה משהו אחר. בפגישת פיצוח אנחנו עושים את זה יחד, ספציפית לעסק שלך.",
  features,
  featurePreset = "template",
  variant = "dark",
  buttonText = "קבע פגישת פיצוח חינם",
  subtitle = "חינם לגמרי. ללא התחייבות.",
  eyebrow = "בזמן שאתה מחכה למייל",
}: CalendlyCalloutProps) {
  const isDark = variant === "dark";
  const resolvedFeatures = features ?? FEATURE_PRESETS[featurePreset];

  return (
    <section className={isDark ? "bg-navy" : "bg-[oklch(0.22_0.04_55)]"}>
      <div className="max-w-[680px] mx-auto px-5 py-16 md:py-20">
        {isDark && eyebrow && (
          <p className="text-primary text-xs font-bold tracking-widest uppercase text-center mb-3">
            {eyebrow}
          </p>
        )}
        <h2 className={`text-2xl md:text-3xl font-extrabold leading-tight mb-3 text-center ${
          isDark ? "text-white" : "text-white"
        }`}>
          {title.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && title.split("\n").length > 1 && <br />}
            </span>
          ))}
        </h2>
        <p className={`text-sm md:text-base text-center leading-relaxed mb-10 max-w-md mx-auto ${
          isDark ? "text-white/60" : "text-white/60"
        }`}>
          {intro}
        </p>

        {resolvedFeatures.length > 0 && (
          <div className="flex flex-col gap-4 mb-10 max-w-md mx-auto">
            {resolvedFeatures.map((item) => (
              <div
                key={item.title}
                className={`flex items-start gap-4 rounded-2xl p-5 border ${
                  isDark
                    ? "bg-white/[0.05] border-white/10"
                    : "bg-primary/[0.07] border-primary/40"
                }`}
              >
                <item.Icon
                  className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                    isDark ? "text-primary" : "text-primary"
                  }`}
                  aria-hidden="true"
                />
                <div>
                  <p className={`text-sm font-bold mb-1 ${
                    isDark ? "text-white" : "text-white"
                  }`}>
                    {item.title}
                  </p>
                  <p className={`text-xs leading-relaxed ${
                    isDark ? "text-white/55" : "text-white/60"
                  }`}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-14 px-10 bg-primary text-primary-foreground font-bold text-base rounded-xl hover:bg-primary/90 transition-colors duration-200 shadow-lg shadow-primary/25 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {buttonText}
          </a>
          {subtitle && (
            <p className={`text-xs mt-3 ${isDark ? "text-white/35" : "text-white/30"}`}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
