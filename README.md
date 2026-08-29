# لوكيشن للعقارات — LOCATION REAL ESTATE

Premium bilingual (Arabic-first, RTL) marketing website for **Location Real Estate**, a Qatari real-estate brokerage (License No. 40). Built with Next.js 16 (App Router), React 19, TypeScript (strict), and Tailwind CSS v4.

## Overview

- Full i18n: `/ar` (Arabic, RTL) and `/en` (English, LTR). Root `/` redirects to `/ar` via `proxy.ts`.
- Editorial, design-forward layout inspired by premium global real-estate brands — no fabricated stats, awards, or testimonials. Quality is communicated through design.
- Brand colors: gold `#b08d3f`, ink `#16140f`, paper `#fafaf8`, stone `#8a8478`. Fonts via `next/font/google`: Inter + IBM Plex Sans Arabic.

## Pages

- `/[lang]` — Homepage: Hero, Search, Featured (asymmetric), Sell CTA, Services, Investment, Areas, Cinematic, About, Trust (honest Google 5.0 rating), Contact.
- `/[lang]/properties` — Dynamic filterable listings (purpose / type / area / price) via `searchParams`.
- `/[lang]/properties/[slug]` — Property detail + Product JSON-LD + gallery + WhatsApp enquiry.
- `/[lang]/properties/for-sale`, `/[lang]/properties/for-rent` — Categorized listing routes.
- `/[lang]/services`, `/[lang]/about`, `/[lang]/contact`, `/[lang]/list-your-property`.

## Data & Content

- `lib/properties.ts` — **Demo dataset** (10 properties) drawn from the company's public listings; clearly marked as replaceable with real data.
- `lib/dictionaries.ts` — `ar` / `en` dictionary objects + exported `Dict` interface.
- `lib/site.ts` — verified company contact/license/social data.
- `lib/utils.ts` — price/area formatting + purpose labels.

## Lead Generation

- `ContactForm` + `ListPropertyForm` are client components that open WhatsApp with a prefilled message (no backend) at `wa.me/97431333789`.

## Getting Started

```bash
npm install
npm run dev
```

Build and lint:

```bash
npm run lint
npm run build
```

## Tech Stack

- Next.js 16.3 (App Router, Turbopack, `proxy.ts` for middleware)
- React 19, TypeScript (strict, no `as any`)
- Tailwind CSS v4 (`@theme` tokens in `app/globals.css`)
- ESLint 9 with `next/core-web-vitals` + `next/typescript`
