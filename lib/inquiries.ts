export type StoredInquiry = {
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
