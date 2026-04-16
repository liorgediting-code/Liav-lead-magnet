"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft, Star, User } from "lucide-react";

// ──────────────────────────────────────────────────────────────────
// הוסף כאן את ההמלצות האמיתיות שלך.
// כדי להוסיף תמונה: הוסף imageUrl: "/testimonials/client1.jpg"
// ──────────────────────────────────────────────────────────────────
const testimonials = [
  {
    name: "שם הלקוח",
    role: "יועץ עסקי",
    quote:
      "כאן תוסיף המלצה אמיתית. ככל שהיא יותר ספציפית עם מספרים ותוצאות — כך היא עובדת טוב יותר.",
    imageUrl: "", // "/testimonials/client1.jpg"
  },
  {
    name: "שם לקוח נוסף",
    role: "מאמן כושר",
    quote:
      "המלצה שנייה כאן. לדוגמה: אחוז הסגירה שלי עלה מ-X ל-Y תוך חודש אחד בלבד.",
    imageUrl: "", // "/testimonials/client2.jpg"
  },
  {
    name: "שם לקוח שלישי",
    role: "יזם ופרילנסר",
    quote:
      "המלצה שלישית כאן. מומלץ לכלול שם ועיר אמיתיים להגברת האמינות.",
    imageUrl: "", // "/testimonials/client3.jpg"
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;
  const item = testimonials[current];

  return (
    <div>
      {/* Card */}
      <div className="bg-muted rounded-2xl p-6 md:p-8 border border-border min-h-[260px] flex flex-col items-center justify-center">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full bg-border border-4 border-card shadow-md flex items-center justify-center overflow-hidden mb-4">
          {item.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <User className="w-7 h-7 text-muted-foreground" aria-hidden="true" />
          )}
        </div>

        {/* Stars */}
        <div className="flex gap-1 mb-4" aria-label="דירוג 5 כוכבים">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-primary text-primary"
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-sm md:text-base text-foreground/80 leading-relaxed text-center mb-5 max-w-sm">
          ״{item.quote}״
        </blockquote>

        {/* Name + role */}
        <p className="text-sm font-bold text-foreground">{item.name}</p>
        <p className="text-xs text-muted-foreground">{item.role}</p>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-5">
        <button
          onClick={() => setCurrent((c) => (c - 1 + total) % total)}
          aria-label="המלצה קודמת"
          className="cursor-pointer w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center hover:bg-accent transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <ChevronRight className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
        </button>

        <div className="flex gap-2" role="tablist" aria-label="בחר המלצה">
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`המלצה ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`cursor-pointer rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-primary ${
                i === current
                  ? "w-5 h-2 bg-primary"
                  : "w-2 h-2 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrent((c) => (c + 1) % total)}
          aria-label="המלצה הבאה"
          className="cursor-pointer w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center hover:bg-accent transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <ChevronLeft className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
