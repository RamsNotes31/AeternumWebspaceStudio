# Aeternum Webspace Studio

Landing page and public website MVP for **Aeternum Webspace Studio**, a studio focused on company websites, landing pages, internal web apps, backend APIs, databases, and deployment.

The current implementation is a static frontend MVP built from the project PRD, brand assets, and reference UX patterns.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Lucide React icons
- Static content files for the MVP

## Routes

| Route | Description |
|---|---|
| `/` | Landing page |
| `/services` | Services page for website, landing page, web app, backend, database, and deployment offers |
| `/work` | Portfolio and featured case study overview |
| `/work/tuneboss-inventory-system` | TuneBoss inventory system case study |
| `/pricing` | Pricing package estimates and WhatsApp consultation CTAs |
| `/about` | Studio positioning, working principles, and brand story |
| `/contact` | WhatsApp consultation page and project brief checklist |

## Current Features

- Premium floating navbar
- Aeternum brand color system: deep navy, soft white, slate, gold
- Cyber gold hero section with animated studio visuals
- Trust/stat strip
- Full service pages and service preview
- TuneBoss featured project showcase and case study page
- Pricing preview/page with recommended package state
- Process timeline
- Tech ecosystem strip
- FAQ section
- Final WhatsApp CTA
- Mobile sticky WhatsApp CTA
- Responsive mobile navigation
- Footer social links
- Per-page SEO metadata and generated Open Graph image

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Build for production:

```bash
npm run build
```

Start production server after build:

```bash
npm run start
```

## Environment Variables

Create `.env.local` from `.env.example`:

```bash
cp .env.example .env.local
```

Available variables:

```text
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WHATSAPP_NUMBER=6289697100997
```

`NEXT_PUBLIC_WHATSAPP_NUMBER` is used by all WhatsApp CTA links. Use international format without `+`.

## Project Structure

```text
app/
  page.tsx
  layout.tsx
  globals.css
  services/page.tsx
  work/page.tsx
  work/tuneboss-inventory-system/page.tsx
  pricing/page.tsx
  about/page.tsx
  contact/page.tsx
components/
  layout/
  sections/
content/
  site.ts
lib/
  whatsapp.ts
public/
  assets/logo/
```

## Notes

- This repository only contains frontend/backend source-ready project files.
- Local planning documents, raw assets, scraping files, and proposal documents are intentionally ignored from Git.
- The TuneBoss project is used as the first featured project showcase. Contract details and pricing are not included in the public site.
- Public documentation is kept concise so the repository remains easy to review from GitHub.

## Next Steps

- Add contact form handling.
- Add backend route handlers for inquiries.
- Add database and admin dashboard in a later phase.
- Replace placeholder social URLs in the footer with official Aeternum social media links.
- Set `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_WHATSAPP_NUMBER` in Vercel project settings before production deployment.
