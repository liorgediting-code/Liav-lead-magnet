# Lead Magnet Full Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply all Approach C CRO improvements to maximize opt-in conversions on the Hebrew sales lead magnet landing page.

**Architecture:** Eight self-contained tasks, each modifying or creating one file. No new API routes needed — the exit-intent popup reuses `<OptInForm>` as-is, and the guide phone prompt is a static UI addition.

**Tech Stack:** Next.js 16 App Router, React 19, Tailwind CSS v4, shadcn/ui components, TypeScript. All styling via Tailwind utility classes and existing CSS variables (`bg-navy`, `text-primary`, `bg-card`, etc.).

---

## File Map

| File | Action | What changes |
|---|---|---|
| `components/OptInForm.tsx` | Modify | Phone optional, CTA copy, micro-copy |
| `app/page.tsx` | Modify | Headline, subheadline, bullets, section headers, wire new components |
| `components/OfferMockup.tsx` | Create | CSS-rendered PDF cover mockup |
| `components/AnchorTestimonial.tsx` | Create | Single pull-quote below hero |
| `components/FAQ.tsx` | Create | 5-item Q&A accordion |
| `components/ExitIntentPopup.tsx` | Create | Exit-intent modal wrapping OptInForm |
| `app/guide/page.tsx` | Modify | Phone prompt section at bottom |

---

## Task 1: OptInForm — phone optional + CTA copy + micro-copy

**Files:**
- Modify: `components/OptInForm.tsx`

- [ ] **Step 1: Make phone field optional**

In `components/OptInForm.tsx`, make these changes:

```tsx
// Label: add (אופציונלי)
<Label htmlFor="phone" className="text-sm font-medium text-foreground">
  טלפון <span className="text-muted-foreground font-normal text-xs">(אופציונלי)</span>
</Label>

// Input: remove required attribute
<Input
  id="phone"
  name="phone"
  type="tel"
  placeholder="050-1234567"
  value={form.phone}
  onChange={handleChange}
  className="text-base h-12 bg-white border-border/60 focus-visible:ring-primary"
  disabled={loading}
/>
```

- [ ] **Step 2: Update validation to not require phone**

Replace the validation block (lines 24–27):

```tsx
if (!form.name.trim() || !form.email.trim()) {
  setError("מלא שם ואימייל כדי להמשיך");
  return;
}
```

- [ ] **Step 3: Update CTA button text**

Replace the button label:

```tsx
{loading ? "שולח..." : "שלחו לי את התבנית"}
```

- [ ] **Step 4: Update below-button micro-copy**

Replace the `<p>` at the bottom of the form:

```tsx
<p className="text-xs text-muted-foreground text-center leading-relaxed">
  🔒 100% חינם · לא נשלח ספאם · ביטול בלחיצה אחת
</p>
```

- [ ] **Step 5: Verify at localhost:3000**

Check: phone field shows "(אופציונלי)", submitting with only name+email works, button says "שלחו לי את התבנית", micro-copy updated below button.

- [ ] **Step 6: Commit**

```bash
git add components/OptInForm.tsx
git commit -m "feat: phone optional, update CTA copy and micro-copy"
```

---

## Task 2: Hero copy — headline, subheadline, bullets, form header

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace the headline**

In `app/page.tsx`, replace the `<h1>`:

```tsx
<h1 className="text-3xl md:text-5xl font-black leading-tight mb-4 text-center text-white">
  8 השלבים שאני ולקוחותיי משתמשים בהם{" "}
  <span className="text-primary">כדי לסגור עסקאות בעשרות אלפי ₪</span>
  {" "}— עכשיו בחינם
</h1>
```

- [ ] **Step 2: Replace the subheadline**

Replace the `<p>` subheadline:

```tsx
<p className="text-base text-white/55 text-center mb-10 leading-relaxed">
  כדי שתדע בדיוק מה להגיד בכל רגע בשיחה — ותגיע לסגירה מהר יותר
</p>
```

- [ ] **Step 3: Replace benefit bullets**

Replace the `benefits` array at the top of the file:

```tsx
const benefits = [
  "תהליך מובנה ב-8 שלבים עם תסריטים מוכנים — אף פעם לא תישאר בלי מה להגיד",
  'טיפול בכל התנגדות — "יקר לי", "צריך לחשוב", "לא עכשיו" — כדי שלא תצא יותר משיחה בידיים ריקות',
  "אותה תבנית שאתה מקבל עכשיו — בדיוק מה שמביא לסגירות של עשרות אלפי ₪ בפועל",
];
```

- [ ] **Step 4: Add "reason why free" line above the form card**

Add this line immediately before the form card `<div>` (before `<div className="bg-card rounded-2xl ..."`):

```tsx
<p className="text-xs text-white/45 text-center mb-3 leading-relaxed max-w-sm mx-auto">
  נותן את זה בחינם — כי אחרי שתראה את התבנית, תבין בדיוק למה אנשים משלמים לי לעבוד איתם
</p>
```

- [ ] **Step 5: Update form card header copy**

Replace the two `<p>` tags inside the form card (the "קבלו את תבנית המכירה במתנה" block):

```tsx
<p className="text-sm font-extrabold text-foreground mb-1 text-center">
  קבל את התבנית עכשיו
</p>
<p className="text-xs text-muted-foreground text-center mb-5 leading-relaxed">
  גישה מיידית —{" "}
  <strong className="text-foreground">נשלחת ישירות למייל שלך</strong>
</p>
```

- [ ] **Step 6: Verify at localhost:3000**

Check hero section: new headline renders correctly in RTL, bullets updated, "reason why free" line visible above form card, form card header updated.

- [ ] **Step 7: Commit**

```bash
git add app/page.tsx
git commit -m "feat: update hero copy — headline, subheadline, bullets, form header"
```

---

## Task 3: OfferMockup component

**Files:**
- Create: `components/OfferMockup.tsx`

A CSS-only component that renders as a styled "PDF cover" in navy/gold — makes the intangible offer feel physical and real.

- [ ] **Step 1: Create the component**

Create `components/OfferMockup.tsx`:

```tsx
export default function OfferMockup() {
  return (
    <div className="relative mx-auto mb-6 w-48 select-none" aria-hidden="true">
      {/* Shadow pages behind main cover */}
      <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-xl bg-navy/60 border border-white/10" />
      <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-xl bg-navy/80 border border-white/10" />

      {/* Main cover */}
      <div className="relative rounded-xl bg-navy border border-primary/30 shadow-2xl shadow-black/50 px-5 py-6 flex flex-col gap-3">
        {/* Badge */}
        <div className="inline-flex self-start items-center gap-1.5 bg-primary/20 border border-primary/30 rounded-full px-2.5 py-0.5">
          <span className="w-1 h-1 rounded-full bg-primary" />
          <span className="text-[9px] font-bold text-primary tracking-widest uppercase">Free</span>
        </div>

        {/* Title */}
        <p className="text-white font-black text-sm leading-snug">
          תבנית המכירה
          <br />
          ב-8 שלבים
        </p>

        {/* Step list preview */}
        <div className="flex flex-col gap-1">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <div key={n} className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-primary/80 flex items-center justify-center flex-shrink-0">
                <span className="text-[7px] font-bold text-white">{n}</span>
              </span>
              <span className="h-1 rounded-full bg-white/15 flex-1" />
            </div>
          ))}
        </div>

        {/* Footer line */}
        <p className="text-[9px] text-primary/60 font-semibold tracking-wider uppercase mt-1">
          liav.co.il
        </p>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Add to hero section in page.tsx**

In `app/page.tsx`, add the import at the top:

```tsx
import OfferMockup from "@/components/OfferMockup";
```

Then add `<OfferMockup />` inside the hero section, between the badge `<div>` and the `<h1>`:

```tsx
{/* Badge */}
<div className="flex justify-center mb-8">
  ...
</div>

<OfferMockup />

{/* Headline */}
<h1 ...>
```

- [ ] **Step 3: Verify at localhost:3000**

Check: mockup renders centered above headline, looks like a stacked PDF cover with navy/gold colors, step numbers visible, doesn't break mobile layout.

- [ ] **Step 4: Commit**

```bash
git add components/OfferMockup.tsx app/page.tsx
git commit -m "feat: add offer mockup component to hero"
```

---

## Task 4: AnchorTestimonial component

**Files:**
- Create: `components/AnchorTestimonial.tsx`

A single static pull-quote placed immediately below the hero form — proof at the point of highest intent.

- [ ] **Step 1: Create the component**

Create `components/AnchorTestimonial.tsx`:

```tsx
export default function AnchorTestimonial() {
  return (
    <div className="max-w-sm mx-auto px-5 pt-6 pb-2">
      <figure className="flex flex-col items-center gap-3 text-center">
        <div className="w-8 h-0.5 bg-primary/40 rounded-full" />
        <blockquote className="text-sm text-foreground/80 leading-relaxed font-medium">
          "אני מיישם את זה על לידים חדשים — כל ליד שנכנס, טיק טק שיחת טלפון"
        </blockquote>
        <figcaption className="text-xs text-muted-foreground">
          לקוח של ליאב
        </figcaption>
      </figure>
    </div>
  );
}
```

- [ ] **Step 2: Add to page.tsx between hero and "What's Inside"**

In `app/page.tsx`, add the import:

```tsx
import AnchorTestimonial from "@/components/AnchorTestimonial";
```

Add `<AnchorTestimonial />` between the closing `</section>` of the hero and the opening `<section>` of "What's Inside":

```tsx
      </section>

      <AnchorTestimonial />

      {/* ── 2. WHAT'S INSIDE ── */}
```

- [ ] **Step 3: Verify at localhost:3000**

Check: quote appears cleanly between hero and "What's Inside", centered, readable on mobile.

- [ ] **Step 4: Commit**

```bash
git add components/AnchorTestimonial.tsx app/page.tsx
git commit -m "feat: add anchor testimonial below hero form"
```

---

## Task 5: Section header copy refresh

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Update photo testimonials section header**

Find and replace in `app/page.tsx`:

```tsx
// OLD
<h2 className="text-xl font-extrabold text-foreground text-start mb-8">
  מה אומרים לקוחות
</h2>

// NEW
<h2 className="text-xl font-extrabold text-foreground text-start mb-8">
  הוכחות מהשטח
</h2>
```

- [ ] **Step 2: Update video testimonials section headers**

```tsx
// OLD eyebrow
<p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-3">
  סרטוני המלצה
</p>
<h2 className="text-xl font-extrabold text-foreground text-start mb-8">
  לקוחות מספרים
</h2>

// NEW
<p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-3">
  סרטוני המלצה
</p>
<h2 className="text-xl font-extrabold text-foreground text-start mb-8">
  מה קורה אחרי שמשתמשים בתבנית
</h2>
```

- [ ] **Step 3: Verify at localhost:3000**

Check both section headers updated on the live page.

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "copy: refresh testimonials section headers"
```

---

## Task 6: FAQ component

**Files:**
- Create: `components/FAQ.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create the FAQ component**

Create `components/FAQ.tsx`:

```tsx
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
```

- [ ] **Step 2: Add FAQ section to page.tsx between video testimonials and final CTA**

In `app/page.tsx`, add the import:

```tsx
import FAQ from "@/components/FAQ";
```

Add this section between the closing `</section>` of the video testimonials section and the opening `<section>` of the final CTA:

```tsx
      {/* ── 6. FAQ ── */}
      <FadeIn>
        <section className="bg-background border-t border-border">
          <div className="max-w-[640px] mx-auto px-5 py-16 md:py-20">
            <h2 className="text-xl font-extrabold text-foreground text-start mb-6">
              שאלות נפוצות
            </h2>
            <FAQ />
          </div>
        </section>
      </FadeIn>

      {/* ── 7. FINAL CTA ── */}
```

Also update the final CTA comment from `── 6.` to `── 7.` to keep numbering consistent.

- [ ] **Step 3: Verify at localhost:3000**

Check: FAQ section renders between video testimonials and final CTA, accordion opens/closes smoothly, all 5 questions present.

- [ ] **Step 4: Commit**

```bash
git add components/FAQ.tsx app/page.tsx
git commit -m "feat: add FAQ section with 5 objection-handling questions"
```

---

## Task 7: ExitIntentPopup component

**Files:**
- Create: `components/ExitIntentPopup.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create the component**

Create `components/ExitIntentPopup.tsx`:

```tsx
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
            רגע לפני שאתה עוזב —
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
```

- [ ] **Step 2: Add to page.tsx**

In `app/page.tsx`, add the import:

```tsx
import ExitIntentPopup from "@/components/ExitIntentPopup";
```

Add `<ExitIntentPopup />` at the very bottom of the returned JSX, just before the closing `</main>`:

```tsx
      </section>

      <ExitIntentPopup />
    </main>
```

- [ ] **Step 3: Verify at localhost:3000**

Test: move mouse above the browser viewport — the modal should appear. Clicking X closes it. Moving mouse out again should NOT retrigger (sessionStorage guard). Form inside modal is functional.

- [ ] **Step 4: Commit**

```bash
git add components/ExitIntentPopup.tsx app/page.tsx
git commit -m "feat: add exit-intent popup with session guard"
```

---

## Task 8: Guide page — phone prompt

**Files:**
- Modify: `app/guide/page.tsx`

- [ ] **Step 1: Add phone prompt section**

In `app/guide/page.tsx`, add this section between the "Celebrate" section and `<OfferPanel>`:

```tsx
      {/* Phone Prompt */}
      <section className="max-w-[680px] mx-auto px-5 pb-8">
        <div className="bg-navy rounded-2xl p-6 text-center">
          <h2 className="text-lg font-extrabold text-white mb-1">
            רוצה סקירה אישית של התבנית?
          </h2>
          <p className="text-sm text-white/60 mb-4">
            השאר מספר ונחזור אליך
          </p>
          <PhonePrompt />
        </div>
      </section>
```

- [ ] **Step 2: Create PhonePrompt as inline client component**

At the top of `app/guide/page.tsx`, add `"use client"` is not possible on a Server Component page — so create a small client component file instead.

Create `components/PhonePrompt.tsx`:

```tsx
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function PhonePrompt() {
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!phone.trim()) return;
    setLoading(true);
    try {
      await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "guide-phone", phone, email: "" }),
      });
    } finally {
      setSent(true);
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <p className="text-sm text-primary font-semibold">
        תודה! נחזור אליך בהקדם.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-xs mx-auto">
      <Input
        type="tel"
        placeholder="050-1234567"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="h-11 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-primary"
        disabled={loading}
      />
      <Button
        type="submit"
        disabled={loading}
        className="cursor-pointer h-11 px-4 font-semibold bg-primary text-white hover:bg-primary/90 whitespace-nowrap"
      >
        {loading ? "..." : "כן, דברו איתי"}
      </Button>
    </form>
  );
}
```

- [ ] **Step 3: Import PhonePrompt into guide page**

In `app/guide/page.tsx`, add the import:

```tsx
import PhonePrompt from "@/components/PhonePrompt";
```

- [ ] **Step 4: Verify at localhost:3000/guide**

Check: phone prompt section renders between "לקוח נסלק!" and the OfferPanel. Submitting a phone number shows "תודה! נחזור אליך בהקדם." Form is readable on navy background.

- [ ] **Step 5: Commit**

```bash
git add components/PhonePrompt.tsx app/guide/page.tsx
git commit -m "feat: add phone prompt to guide page for warm lead capture"
```

---

## Task 9: Push to GitHub and verify deployment

- [ ] **Step 1: Final check at localhost:3000**

Walk through the full page:
- Hero: new headline, mockup visible, bullets updated, "reason why free" line, form card updated, phone optional
- AnchorTestimonial visible below hero
- "What's Inside" section unchanged
- Credentials section unchanged ("עשרות בעלי עסקים" kept as-is)
- "הוכחות מהשטח" photo testimonials
- "מה קורה אחרי שמשתמשים בתבנית" video testimonials
- FAQ section with 5 questions
- Final CTA with updated form
- Exit-intent popup triggers on mouse-out

Check localhost:3000/guide:
- Phone prompt section between celebrate block and OfferPanel

- [ ] **Step 2: Run lint**

```bash
npm run lint
```

Expected: no errors.

- [ ] **Step 3: Push to GitHub (triggers Vercel deploy)**

```bash
git push origin main
```

- [ ] **Step 4: Verify Vercel deployment**

Wait ~60s, then open the production URL and confirm all changes are live.
