"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie-notice-dismissed-v1";

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const t = setTimeout(() => setVisible(true), 800);
        return () => clearTimeout(t);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="הודעה על שימוש בעוגיות"
      className="fixed inset-x-3 bottom-24 z-[70] md:inset-x-auto md:left-4 md:right-auto md:bottom-4 md:max-w-md rounded-2xl bg-navy text-white shadow-2xl ring-1 ring-white/10"
    >
      <div className="p-4 md:p-5 flex flex-col gap-3">
        <p className="text-sm leading-relaxed text-white/90">
          האתר שלנו משתמש בעוגיות (Cookies) ובכלי ניתוח ופרסום (Meta Pixel, Microsoft Clarity)
          כדי לשפר את חוויית הגלישה ולמדוד קמפיינים. המשך גלישה באתר מהווה הסכמתך לכך.
          לפרטים, ראה{" "}
          <Link href="/privacy" className="underline hover:text-gold">
            מדיניות הפרטיות
          </Link>
          .
        </p>
        <div className="flex items-center justify-end gap-2">
          <Link
            href="/privacy"
            className="text-sm px-3 py-2 rounded-md text-white/80 hover:text-white"
          >
            פרטים נוספים
          </Link>
          <button
            onClick={dismiss}
            className="text-sm px-4 py-2 rounded-md bg-gold text-navy font-bold hover:bg-gold/90 cursor-pointer"
          >
            הבנתי
          </button>
        </div>
      </div>
    </div>
  );
}
