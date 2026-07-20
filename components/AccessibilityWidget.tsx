"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Toggles = {
  contrast: boolean;
  grayscale: boolean;
  links: boolean;
  noAnim: boolean;
  readable: boolean;
};

type Settings = Toggles & {
  fontStep: number; // -2 .. 3
};

const STORAGE_KEY = "a11y-settings";
const FONT_STEPS = [0.9, 1, 1.1, 1.2, 1.35, 1.5]; // index offset by 1 (fontStep -1..4)
const MIN_STEP = -1;
const MAX_STEP = 4;

const DEFAULTS: Settings = {
  contrast: false,
  grayscale: false,
  links: false,
  noAnim: false,
  readable: false,
  fontStep: 0,
};

const CLASS_MAP: Record<keyof Toggles, string> = {
  contrast: "a11y-contrast",
  grayscale: "a11y-grayscale",
  links: "a11y-links",
  noAnim: "a11y-no-anim",
  readable: "a11y-readable",
};

function apply(settings: Settings) {
  const root = document.documentElement;
  (Object.keys(CLASS_MAP) as (keyof Toggles)[]).forEach((key) => {
    root.classList.toggle(CLASS_MAP[key], settings[key]);
  });
  const scale = FONT_STEPS[settings.fontStep + 1] ?? 1;
  root.style.fontSize = scale === 1 ? "" : `${scale * 100}%`;
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>(DEFAULTS);
  const panelRef = useRef<HTMLDivElement>(null);

  // Load persisted settings on mount.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = { ...DEFAULTS, ...JSON.parse(raw) } as Settings;
        setSettings(parsed);
        apply(parsed);
      }
    } catch {
      // ignore malformed storage
    }
  }, []);

  const update = useCallback((next: Settings) => {
    setSettings(next);
    apply(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore write failures
    }
  }, []);

  const toggle = (key: keyof Toggles) =>
    update({ ...settings, [key]: !settings[key] });

  const changeFont = (dir: 1 | -1) => {
    const fontStep = Math.min(MAX_STEP, Math.max(MIN_STEP, settings.fontStep + dir));
    update({ ...settings, fontStep });
  };

  const reset = () => update(DEFAULTS);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="a11y-widget" dir="rtl">
      <button
        type="button"
        className="a11y-fab"
        aria-label="תפריט נגישות"
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => setOpen((v) => !v)}
      >
        <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" focusable="false">
          <circle cx="12" cy="4" r="2" fill="currentColor" />
          <path
            fill="currentColor"
            d="M21 7.5a1 1 0 0 1-.7 1.22l-4.3 1.13V21a1 1 0 1 1-2 0v-6h-2v6a1 1 0 1 1-2 0V9.85L5.7 8.72A1 1 0 0 1 6.3 6.8L11 8.04h2L17.7 6.8a1 1 0 0 1 1.3.7z"
          />
        </svg>
      </button>

      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="אפשרויות נגישות"
          className="a11y-panel"
        >
          <div className="a11y-panel-head">
            <span>נגישות</span>
            <button
              type="button"
              className="a11y-close"
              aria-label="סגירת תפריט הנגישות"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>

          <div className="a11y-font-row">
            <button type="button" onClick={() => changeFont(-1)} aria-label="הקטנת טקסט">
              א−
            </button>
            <span>גודל טקסט</span>
            <button type="button" onClick={() => changeFont(1)} aria-label="הגדלת טקסט">
              א+
            </button>
          </div>

          <div className="a11y-options">
            <button
              type="button"
              className={settings.contrast ? "on" : ""}
              aria-pressed={settings.contrast}
              onClick={() => toggle("contrast")}
            >
              ניגודיות גבוהה
            </button>
            <button
              type="button"
              className={settings.grayscale ? "on" : ""}
              aria-pressed={settings.grayscale}
              onClick={() => toggle("grayscale")}
            >
              גווני אפור
            </button>
            <button
              type="button"
              className={settings.links ? "on" : ""}
              aria-pressed={settings.links}
              onClick={() => toggle("links")}
            >
              הדגשת קישורים
            </button>
            <button
              type="button"
              className={settings.readable ? "on" : ""}
              aria-pressed={settings.readable}
              onClick={() => toggle("readable")}
            >
              פונט קריא
            </button>
            <button
              type="button"
              className={settings.noAnim ? "on" : ""}
              aria-pressed={settings.noAnim}
              onClick={() => toggle("noAnim")}
            >
              עצירת אנימציות
            </button>
          </div>

          <button type="button" className="a11y-reset" onClick={reset}>
            איפוס הגדרות
          </button>
        </div>
      )}
    </div>
  );
}
