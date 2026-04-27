"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import OptInForm from "@/components/OptInForm";

const SESSION_KEY = "exit_popup_shown";

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    function handleMouseLeave(e: MouseEvent) {
      if (e.clientY <= 0) {
        setVisible(true);
        sessionStorage.setItem(SESSION_KEY, "1");
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="הצעה לפני עזיבה"
    >
      <div className="relative bg-card rounded-2xl shadow-2xl w-full max-w-sm p-6">
        <button
          onClick={() => setVisible(false)}
          aria-label="סגור"
          className="cursor-pointer absolute top-4 left-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition-colors"
        >
          <X className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
        </button>

        <div className="text-center mb-5">
          <p className="text-xs font-bold tracking-widest text-primary/60 uppercase mb-2">
            רגע לפני שאתה עוזב:
          </p>
          <h2 className="text-lg font-extrabold text-foreground leading-snug">
            קח את תבנית המכירה בחינם
          </h2>
          <p className="text-xs text-muted-foreground mt-1">
            30 שניות בלבד. גישה מיידית למייל.
          </p>
        </div>

        <OptInForm />
      </div>
    </div>
  );
}
