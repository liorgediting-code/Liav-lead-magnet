"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const testimonials = [
  {
    screenshotUrl: "/testimonials/whatsapp-1.png",
    alt: 'לקוח: "בזכותך אני מרגיש כל כך ביטחון... אתה תותח ומקצועי"',
  },
  {
    screenshotUrl: "/testimonials/whatsapp-2.jpg",
    alt: 'לקוח: "אני מקבל ממך הרבה ערך... עוזר לי מאד להתקדם"',
  },
  {
    screenshotUrl: "/testimonials/whatsapp-3.jpg",
    alt: 'לקוח: "אני מיישם את זה על לידים חדשים... כל ליד שנכנס — טיק טק שיחת טלפון"',
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;
  const item = testimonials[current];

  return (
    <div>
      {/* Fixed-height container — image fits inside, never cropped */}
      <div className="rounded-2xl overflow-hidden border border-border bg-muted">
        <div className="h-[480px] flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.screenshotUrl}
            alt={item.alt}
            className="h-full w-auto max-w-full object-contain"
            loading="lazy"
          />
        </div>
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
