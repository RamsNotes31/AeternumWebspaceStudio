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
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=
INQUIRY_WEBHOOK_URL=
INQUIRY_READ_URL=
INQUIRY_WEBHOOK_SECRET=
ADMIN_PASSWORD=
```

`NEXT_PUBLIC_WHATSAPP_NUMBER` is used by all WhatsApp CTA links. Use international format without `+`.
`NEXT_PUBLIC_GA_MEASUREMENT_ID` is optional. When set, Google Analytics loads automatically.
`NEXT_PUBLIC_PLAUSIBLE_DOMAIN` is optional. When set, Plausible loads automatically for the configured domain.
`INQUIRY_WEBHOOK_URL` is optional. When set, `POST /api/inquiries` forwards validated brief data to an external webhook such as Google Apps Script, Make, Zapier, Airtable, or a CRM.
`INQUIRY_READ_URL` is optional. When set, `/admin` reads stored inquiries from this endpoint; otherwise it falls back to `INQUIRY_WEBHOOK_URL`.
`INQUIRY_WEBHOOK_SECRET` is optional but recommended for Google Sheets storage. It is sent server-side only and must match the Apps Script property with the same name.
`ADMIN_PASSWORD` enables the private `/admin` dashboard foundation. Leave empty to keep admin login disabled.
The inquiry endpoint includes a hidden honeypot field and a small in-memory rate limit to reduce low-effort spam.

## Analytics Events

CTA elements use `data-event` attributes. The global event tracker forwards clicks to `window.gtag`, `window.dataLayer`, or `window.plausible` when those analytics providers are installed. Add only one provider env if you want a single analytics source.

## Production Hardening

The Next.js config applies baseline security headers for all routes, including `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, and production-only `Strict-Transport-Security`.

## Inquiry Observability

`POST /api/inquiries` writes minimal server logs for accepted submissions, honeypot filtering, and rate limiting. Logs avoid storing full names, business details, or message content.

## Admin Dashboard

`/admin` is a private dashboard protected by `ADMIN_PASSWORD`. It shows inquiry integration status and can list recent inquiries from Google Sheets when the Apps Script read endpoint is deployed.
Admins can update inquiry status to `New`, `Contacted`, `Quoted`, `Won`, or `Lost`, and store follow-up notes back to Google Sheets.
The dashboard also shows lightweight stats from the latest 25 inquiries: total leads, today, 7-day count, win rate, latest inquiry, top project, and status counts.

For MVP storage, use the Google Sheets webhook guide in `docs/google-sheets-webhook.md` and the Apps Script template in `scripts/google-sheets-inquiry-webhook.js`.

Webhook storage receives this JSON shape from `POST /api/inquiries`:

```json
{
  "name": "Client name",
  "business": "Business name",
  "project": "Website",
  "budget": "Rp1,5jt - Rp3jt",
  "deadline": "2 minggu",
  "message": "Project notes",
  "source": "aeternum-website",
  "submittedAt": "2026-06-15T00:00:00.000Z"
}
```

## Project Structure

```text
app/
  admin/page.tsx
  api/admin/login/route.ts
  api/admin/logout/route.ts
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
  scope/page.tsx
  privacy/page.tsx
  sitemap.ts
  robots.ts
components/
  layout/
  sections/
  seo/
content/
  site.ts
docs/
  google-sheets-webhook.md
lib/
  admin-auth.ts
  whatsapp.ts
public/
  assets/logo/
  assets/projects/
scripts/
  google-sheets-inquiry-webhook.js
```

## Notes

- This repository only contains frontend/backend source-ready project files.
- Local planning documents, raw assets, scraping files, and proposal documents are intentionally ignored from Git.
- Jivara, SertiKu, and TuneBoss are shown as public project examples. Contract details and pricing are not included in the public site.
- Public documentation is kept concise so the repository remains easy to review from GitHub.

## Next Steps

- Deploy the Google Sheets Apps Script webhook and set `INQUIRY_WEBHOOK_URL` in Vercel.
- Add inquiry list reading to the admin dashboard after Sheets or another storage is connected.
- Replace disabled social icons in the footer with official Aeternum social media links.
- Set production env values in Vercel before deployment.
