"use client";

import { Wrench, SlidersHorizontal, Clock, LucideIcon } from "lucide-react";

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

interface CalendlyCalloutProps {
  title?: string;
  intro?: string;
  features?: CallFeature[];
  variant?: "light" | "dark";
  buttonText?: string;
  subtitle?: string;
}

export function CalendlyCallout({
  title = "רוצה שאעזור לך ליישם את התבנית\nבעסק שלך – באופן אישי?",
  intro = "התבנית ב-8 השלבים שקיבלת היא כלי עוצמתי — אבל ליישם אותה נכון על המוצר שלך זה משהו אחר. בפגישת פיצוח אנחנו עושים את זה יחד, ספציפית לעסק שלך.",
  features = DEFAULT_FEATURES,
  variant = "dark",
  buttonText = "קבע פגישת פיצוח חינם",
  subtitle = "חינם לגמרי. ללא התחייבות.",
}: CalendlyCalloutProps) {
  const isDark = variant === "dark";

  return (
    <section className={isDark ? "bg-navy" : "bg-[oklch(0.22_0.04_55)]"}>
      <div className="max-w-[680px] mx-auto px-5 py-16 md:py-20">
        {isDark && (
          <p className="text-primary text-xs font-bold tracking-widest uppercase text-center mb-3">
            בזמן שאתה מחכה למייל
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

        {features.length > 0 && (
          <div className="flex flex-col gap-4 mb-10 max-w-md mx-auto">
            {features.map((item) => (
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
