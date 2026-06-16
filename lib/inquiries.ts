export type StoredInquiry = {
  rowNumber: number;
  submittedAt: string;
  name: string;
  business: string;
  project: string;
  budget: string;
  deadline: string;
  message: string;
  source: string;
  status: string;
  notes: string;
};

const statuses = ["New", "Contacted", "Quoted", "Won", "Lost"];

export function isValidInquiryStatus(status: string) {
  return statuses.includes(status);
}

export async function getStoredInquiries() {
  const readUrl = process.env.INQUIRY_READ_URL || process.env.INQUIRY_WEBHOOK_URL;
  const secret = process.env.INQUIRY_WEBHOOK_SECRET;

  if (!readUrl) {
    return { configured: false, inquiries: [] as StoredInquiry[], error: "Read URL belum diset." };
  }

  try {
    const url = new URL(readUrl);

    if (secret) {
      url.searchParams.set("secret", secret);
    }

    const response = await fetch(url, { cache: "no-store" });

    if (!response.ok) {
      return { configured: true, inquiries: [] as StoredInquiry[], error: "Storage belum bisa dibaca." };
    }

    const data = await response.json();
    return { configured: true, inquiries: (data.inquiries || []) as StoredInquiry[], error: "" };
  } catch {
    return { configured: true, inquiries: [] as StoredInquiry[], error: "Storage belum bisa dibaca." };
  }
}

export async function updateStoredInquiry(rowNumber: string, status: string, notes: string) {
  const webhookUrl = process.env.INQUIRY_WEBHOOK_URL;
  const secret = process.env.INQUIRY_WEBHOOK_SECRET;

  if (!webhookUrl) {
    return { ok: false, error: "Webhook URL belum diset." };
  }

  if (!isValidInquiryStatus(status)) {
    return { ok: false, error: "Status tidak valid." };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "updateStatus",
        rowNumber,
        status,
        notes,
        secret,
      }),
    });

    return { ok: response.ok, error: response.ok ? "" : "Gagal update inquiry." };
  } catch {
    return { ok: false, error: "Gagal update inquiry." };
  }
}
