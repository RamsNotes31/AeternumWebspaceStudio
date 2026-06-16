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
8. Deploy and copy the Web app URL.
9. Set that URL as `INQUIRY_WEBHOOK_URL` in Vercel Production env.
10. Redeploy production so the new env is active.

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
  "submittedAt": "2026-06-15T00:00:00.000Z"
}
```

## Notes

- The Apps Script URL is treated like a server webhook, not a public client key.
- Keep the sheet private to the Aeternum account.
- If spam increases, add a shared secret header later. For the current MVP, the website honeypot and rate limit already filter low-effort spam.
