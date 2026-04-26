"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  {
    q: "זה באמת בחינם? מה התפיסה?",
    a: "כן, בחינם לגמרי. אין כרטיס אשראי ואין תשלום. מלאו פרטים וקבלו גישה מיידית.",
  },
  {
    q: "לאיזה עסקים זה מתאים?",
    a: "לכל מי שמוכר שירות ומנהל שיחות מכירה — פרילנסרים, מאמנים, סוכנויות, בעלי עסקים מקומיים.",
  },
  {
    q: "מה בדיוק אקבל?",
    a: "תבנית 8 שלבים עם תסריטים מוכנים, נשלחת ישירות למייל שלכם מיד אחרי ההרשמה.",
  },
  {
    q: "מה קורה אחרי שנרשמים? יתקשרו אליי?",
    a: "לא. תקבלו את התבנית במייל. אם תרצו שיחה אישית — יש אפשרות לקבוע, אבל זה לגמרי ביוזמתכם.",
  },
  {
    q: "למה ליאב נותן את זה בחינם?",
    a: "כי אני מאמין שכשתראו תוצאות, תרצו ללמוד עוד. אין לי מה להסתיר — התבנית עובדת.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col divide-y divide-border">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="cursor-pointer w-full flex items-center justify-between gap-4 py-4 text-start"
            aria-expanded={open === i}
          >
            <span className="text-sm font-semibold text-foreground leading-snug">
              {item.q}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                open === i ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            />
          </button>
          {open === i && (
            <p className="text-sm text-muted-foreground leading-relaxed pb-4">
              {item.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
