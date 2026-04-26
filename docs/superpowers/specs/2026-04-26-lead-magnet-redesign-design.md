# Lead Magnet Landing Page — Full Redesign (Approach C)

**Date:** 2026-04-26  
**Based on:** Research across 40+ high-converting lead magnet pages (Hormozi, Brunson, Dan Lok, HubSpot, Copyhackers, and others)

---

## Goal

Maximize opt-in conversion rate on the Hebrew sales lead magnet landing page by applying the highest-impact changes identified through CRO research. Target: move from industry median (~10%) toward top-performer range (25–35%).

---

## Section 1 — Hero & Form Changes

### Headline (replace)
```
8 השלבים שאני ולקוחותיי משתמשים בהם כדי לסגור עסקאות בעשרות אלפי ₪ — עכשיו בחינם
```

### Subheadline (replace)
```
כדי שתדע בדיוק מה להגיד בכל רגע בשיחה — ותגיע לסגירה מהר יותר
```

### Benefit bullets (replace — second-person, fear-removal)
1. תהליך מובנה ב-8 שלבים עם תסריטים מוכנים — אף פעם לא תישאר בלי מה להגיד
2. טיפול בכל התנגדות — "יקר לי", "צריך לחשוב", "לא עכשיו" — כדי שלא תצא יותר משיחה בידיים ריקות
3. אותה תבנית שאתה מקבל עכשיו — בדיוק מה שמביא לסגירות של עשרות אלפי ₪ בפועל

### Form changes
- Phone field: stays visible, add `(אופציונלי)` label
- CTA button text: `שלחו לי את התבנית`
- Below-button micro-copy: `🔒 100% חינם · לא נשלח ספאם · ביטול בלחיצה אחת`
- Above-form "reason why free" line: `נותן את זה בחינם — כי אחרי שתראה את התבנית, תבין בדיוק למה אנשים משלמים לי לעבוד איתם`

### Offer mockup image (new)
- A 3D-rendered PDF cover image placed above the form card in the hero section
- Colors: navy/gold matching the brand
- Shows the template title and step numbers to make the offer feel tangible
- Implementation: static image (`/public/mockup.png`) or generated with CSS if no image available

---

## Section 2 — Navigation, Testimonials & Social Proof

### Remove navigation header
- Strip any site header/nav from the landing page (`app/page.tsx` layout)
- Visitors have no escape routes — only convert or close
- The `/guide` page keeps its layout unchanged

### Anchor testimonial block (new section)
- Placed immediately below the hero form, before "What's Inside"
- Pulls the single strongest result-specific quote from existing WhatsApp testimonials
- Format: large pull-quote text + name + business type
- Not a carousel — one static testimonial at this position

### Credentials section copy update
- Change `עשרות בעלי עסקים` → `יותר מ-[X] בעלי עסקים` (use real number)

### Section header refreshes
| Current | New |
|---|---|
| מה אומרים לקוחות | הוכחות מהשטח |
| לקוחות מספרים | מה קורה אחרי שמשתמשים בתבנית |

---

## Section 3 — FAQ + Exit-Intent Popup + /guide Phone Prompt

### FAQ section (new)
- Placed between video testimonials and the final CTA section
- Header: `שאלות נפוצות`
- Implemented as a simple accordion or flat Q&A list

**5 questions:**

| Question | Answer |
|---|---|
| זה באמת בחינם? מה התפיסה? | כן, בחינם לגמרי. אין כרטיס אשראי, אין תשלום. פשוט מלאו פרטים וקבלו גישה מיידית. |
| לאיזה עסקים זה מתאים? | לכל מי שמוכר שירות ומנהל שיחות מכירה — פרילנסרים, מאמנים, סוכנויות, בעלי עסקים מקומיים. |
| מה בדיוק אקבל? | תבנית 8 שלבים עם תסריטים מוכנים, נשלחת ישירות למייל שלכם מיד אחרי ההרשמה. |
| מה קורה אחרי שנרשמים? יתקשרו אליי? | לא. תקבלו את התבנית במייל. אם תרצו שיחה אישית — יש אפשרות לקבוע, אבל זה לגמרי ביוזמתכם. |
| למה ליאב נותן את זה בחינם? | כי אני מאמין שכשתראו תוצאות, תרצו ללמוד עוד. אין לי מה להסתיר — התבנית עובדת. |

### Exit-intent popup (new component)
- Triggers on: mouse leaving viewport top edge (desktop) + back-button gesture signal (mobile)
- One trigger per session (sessionStorage flag)
- Content:
  - Headline: `רגע לפני שאתה עוזב —`
  - Subtext: `קח את תבנית המכירה בחינם. 30 שניות בלבד.`
  - Same `<OptInForm>` component (reused as-is)
  - Close X button
- Styling: modal overlay, same navy/gold brand colors

### /guide page — phone prompt (new)
- Added below the existing content on `app/guide/page.tsx`
- Soft ask, not a gate:
  - Headline: `רוצה סקירה אישית של התבנית?`
  - Subtext: `השאר מספר ונחזור אליך`
  - Single phone input + CTA: `כן, דברו איתי`
- Submission: POST to existing `/api/submit` or a new `/api/phone` route that appends to the same sheet

---

## Components to Create/Modify

| File | Change |
|---|---|
| `app/page.tsx` | Headline, subheadline, bullets, section headers, add anchor testimonial block, add FAQ section |
| `components/OptInForm.tsx` | Phone → optional, CTA button text, add micro-copy below button, add "reason why free" line above |
| `app/layout.tsx` or page wrapper | Remove nav header from landing page only |
| `components/OfferMockup.tsx` | New — renders the PDF cover mockup image |
| `components/AnchorTestimonial.tsx` | New — single static pull-quote block |
| `components/FAQ.tsx` | New — accordion or flat Q&A, 5 items |
| `components/ExitIntentPopup.tsx` | New — modal with mouse-leave trigger and session guard |
| `app/guide/page.tsx` | Add phone prompt section at bottom |

---

## What We Are NOT Changing
- Overall page structure and section order (already well-calibrated)
- Color palette and typography (navy/gold is correct for category)
- WhatsApp + video testimonial carousels (already strong)
- API route and form submission logic

---

## Success Metric
Target opt-in rate: 20–30% (up from assumed baseline of ~10–15%)
