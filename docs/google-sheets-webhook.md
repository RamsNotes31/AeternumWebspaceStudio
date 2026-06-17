# Google Sheets Inquiry Webhook

Use Google Sheets as the first persistent storage for Aeternum website inquiries.

## Setup

1. Create a new Google Sheet named `Aeternum Inquiries`.
2. Open `Extensions` -> `Apps Script`.
3. Paste the contents of `scripts/google-sheets-inquiry-webhook.js` into `Code.gs`.
4. Click `Deploy` -> `New deployment`.
5. Select type `Web app`.
6. Set `Execute as` to `Me`.
7. Set `Who has access` to `Anyone`.
8. Open `Project Settings` in Apps Script.
9. Add Script property `INQUIRY_WEBHOOK_SECRET` with the same value you will set in Vercel.
10. Optional: add Script property `NOTIFICATION_EMAIL` to receive an email for every new inquiry.
11. Deploy and copy the Web app URL.
12. Set that URL as `INQUIRY_WEBHOOK_URL` in Vercel Production env.
13. Optional: set the same URL as `INQUIRY_READ_URL`. If empty, the admin dashboard reads from `INQUIRY_WEBHOOK_URL`.
14. Set `INQUIRY_WEBHOOK_SECRET` in Vercel Production env.
15. Redeploy production so the new env is active.

## Payload

The website sends this JSON to the webhook:

```json
{
  "name": "Client name",
  "business": "Business name",
  "project": "Website",
  "budget": "Rp1,5jt - Rp3jt",
  "deadline": "2 minggu",
  "message": "Project notes",
  "source": "aeternum-website",
  "submittedAt": "2026-06-15T00:00:00.000Z",
  "secret": "shared-secret-from-env"
}
```

## Admin Read

The same Apps Script URL supports `GET` for the admin dashboard:

```text
https://script.google.com/macros/s/.../exec?secret=shared-secret-from-env
```

It returns the latest 25 inquiries as JSON for `/admin`.

## Status Workflow

The admin dashboard can update these lead statuses through the same Apps Script URL:

- `New`
- `Contacted`
- `Quoted`
- `Won`
- `Lost`

Updates write to the `Status` and `Notes` columns in the `Inquiries` sheet.

## Email Notification

Set Apps Script property `NOTIFICATION_EMAIL` to an admin email address. New inquiry submissions will send a short email summary. Status updates do not send email.

## Credential Rotation

- Rotate `INQUIRY_WEBHOOK_SECRET` in both Apps Script properties and Vercel env.
- Rotate `ADMIN_PASSWORD` in Vercel env if it has been shared.
- Revoke exposed Vercel tokens from the Vercel dashboard and create a fresh token when needed.

## Notes

- The Apps Script URL is treated like a server webhook, not a public client key.
- Keep the sheet private to the Aeternum account.
- The shared secret is sent server-side only. Do not expose it in any `NEXT_PUBLIC_` variable.
- The website honeypot and rate limit still filter low-effort spam before the webhook runs.
