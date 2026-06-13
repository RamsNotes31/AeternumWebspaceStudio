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
| `/services` | Services placeholder page |
| `/work` | Portfolio placeholder page |
| `/work/tuneboss-inventory-system` | TuneBoss case study placeholder page |
| `/pricing` | Pricing placeholder page |
| `/about` | About placeholder page |
| `/contact` | Contact placeholder page |

## Current Features

- Premium floating navbar
- Aeternum brand color system: deep navy, soft white, slate, gold
- Hero section with project console visual
- Trust/stat strip
- Services preview
- TuneBoss featured project showcase
- Pricing preview with recommended package state
- Process timeline
- Tech ecosystem strip
- FAQ section
- Final WhatsApp CTA
- Mobile sticky WhatsApp CTA
- Static route placeholders for MVP pages

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
NEXT_PUBLIC_WHATSAPP_NUMBER=6280000000000
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

## Next Steps

- Build full `/services`, `/work`, `/pricing`, `/about`, and `/contact` pages.
- Replace placeholder page content with final copy.
- Add contact form handling.
- Add backend route handlers for inquiries.
- Add database and admin dashboard in a later phase.
