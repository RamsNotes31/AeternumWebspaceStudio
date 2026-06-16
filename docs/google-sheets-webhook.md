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
10. Deploy and copy the Web app URL.
11. Set that URL as `INQUIRY_WEBHOOK_URL` in Vercel Production env.
12. Optional: set the same URL as `INQUIRY_READ_URL`. If empty, the admin dashboard reads from `INQUIRY_WEBHOOK_URL`.
13. Set `INQUIRY_WEBHOOK_SECRET` in Vercel Production env.
14. Redeploy production so the new env is active.

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

## Notes

- The Apps Script URL is treated like a server webhook, not a public client key.
- Keep the sheet private to the Aeternum account.
- The shared secret is sent server-side only. Do not expose it in any `NEXT_PUBLIC_` variable.
- The website honeypot and rate limit still filter low-effort spam before the webhook runs.
