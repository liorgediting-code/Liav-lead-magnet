# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

Hebrew-language lead magnet landing page built with **Next.js 16** (App Router), **React 19**, **Tailwind CSS v4**, and **shadcn** components. The entire UI is RTL (`dir="rtl"`) and uses the Heebo font.

### Pages

- `/` (`app/page.tsx`) — Long-form landing page with 10+ sections (hero → mirror → agitate → root cause → solution → proof → FAQ → final CTA). Each non-hero section is wrapped in `<FadeIn>` for scroll-triggered animation. `<OptInForm>` appears four times at strategic conversion points.
- `/guide` (`app/guide/page.tsx`) — Thank-you/delivery page (noindexed). Contains the full 8-step sales guide via `<SalesGuide>` and a calendar CTA. `CALENDAR_LINK` env var drives the booking button.

### API

- `POST /api/submit` (`app/api/submit/route.ts`) — Collects name/phone/email, POSTs to `SHEETS_WEBHOOK_URL` (Google Sheets webhook), then returns `{ success: true }`. On success the form (`OptInForm`) redirects to `/guide`.

### Key components

- `OptInForm` — client component, validates and submits the lead form, redirects to `/guide` on success.
- `SalesGuide` — static component rendering the 8-step sales script cards with per-step color accents (`.step-card-N`, `.step-badge-N` utility classes defined in `globals.css`).
- `FadeIn` — scroll-triggered fade animation wrapper.

### Styling

Tailwind v4 with CSS variable tokens defined in `globals.css`. Brand palette:
- `--navy` / `bg-navy` — dark blue (`oklch(0.18 0.04 264)`)
- `--gold` / `text-gold` — orange-gold (`oklch(0.78 0.17 70)`)
- `primary` maps to gold; `foreground`/`card` maps to navy.

shadcn UI components live in `components/ui/`. Additional custom components are in `components/`.

### Environment variables

| Variable | Purpose |
|---|---|
| `SHEETS_WEBHOOK_URL` | Google Sheets webhook URL for lead capture |
| `CALENDAR_LINK` | Booking calendar URL shown on the guide page |
