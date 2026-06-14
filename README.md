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
| `/work` | Portfolio grid and featured project overview |
| `/work/jivara` | Jivara health website case study |
| `/work/sertiku` | SertiKu certificate platform case study |
| `/work/tuneboss-inventory-system` | TuneBoss inventory system case study |
| `/pricing` | Pricing package estimates and WhatsApp consultation CTAs |
| `/about` | Studio positioning, working principles, and brand story |
| `/contact` | WhatsApp consultation page and project brief checklist |
| `/privacy` | Privacy policy for inquiry and consultation data |
| `/api/inquiries` | Inquiry route handler that validates brief data and returns a WhatsApp URL |
| `/sitemap.xml` | Generated SEO sitemap |
| `/robots.txt` | Generated crawler rules |

## Current Features

- Premium floating navbar
- Aeternum brand color system: deep navy, soft white, slate, gold
- Cyber gold hero section with animated studio visuals
- Trust/stat strip
- Full service pages and service preview
- Portfolio project screenshots for Jivara, SertiKu, and TuneBoss
- Filterable portfolio grid by project category
- Jivara, SertiKu, and TuneBoss case study pages
- Project social proof/testimonial section
- Pricing preview/page with recommended package state
- Process timeline
- Tech ecosystem strip
- FAQ section
- Final WhatsApp CTA
- Mobile sticky WhatsApp CTA
- Contact brief form that opens a prefilled WhatsApp message
- Inquiry API route with basic validation for contact briefs
- Tracking-ready `data-event` attributes on primary CTA elements
- Privacy policy page for inquiry data usage
- Responsive mobile navigation
- Footer social links
- Per-page SEO metadata, structured data, sitemap, robots, and generated Open Graph image

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
INQUIRY_WEBHOOK_URL=
```

`NEXT_PUBLIC_WHATSAPP_NUMBER` is used by all WhatsApp CTA links. Use international format without `+`.
`INQUIRY_WEBHOOK_URL` is optional. When set, `POST /api/inquiries` forwards validated brief data to an external webhook such as Google Apps Script, Make, Zapier, Airtable, or a CRM.
The inquiry endpoint includes a hidden honeypot field and a small in-memory rate limit to reduce low-effort spam.

## Project Structure

```text
app/
  api/inquiries/route.ts
  page.tsx
  layout.tsx
  globals.css
  services/page.tsx
  work/page.tsx
  work/jivara/page.tsx
  work/sertiku/page.tsx
  work/tuneboss-inventory-system/page.tsx
  pricing/page.tsx
  about/page.tsx
  contact/page.tsx
  privacy/page.tsx
  sitemap.ts
  robots.ts
components/
  layout/
  sections/
content/
  site.ts
lib/
  whatsapp.ts
public/
  assets/logo/
  assets/projects/
```

## Notes

- This repository only contains frontend/backend source-ready project files.
- Local planning documents, raw assets, scraping files, and proposal documents are intentionally ignored from Git.
- Jivara, SertiKu, and TuneBoss are shown as public project examples. Contract details and pricing are not included in the public site.
- Public documentation is kept concise so the repository remains easy to review from GitHub.

## Next Steps

- Connect `INQUIRY_WEBHOOK_URL` to Google Sheets, Airtable, Make, Zapier, or a CRM for persistent inquiry storage.
- Add database and admin dashboard in a later phase.
- Replace disabled social icons in the footer with official Aeternum social media links.
- Set `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_WHATSAPP_NUMBER` in Vercel project settings before production deployment.
