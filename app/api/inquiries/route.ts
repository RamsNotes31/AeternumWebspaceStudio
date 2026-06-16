import { NextResponse } from "next/server";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type InquiryPayload = {
  name?: string;
  business?: string;
  project?: string;
  budget?: string;
  deadline?: string;
  message?: string;
  website?: string;
};

const requiredFields: Array<keyof InquiryPayload> = ["name", "business", "project"];
const rateLimitWindowMs = 10 * 60 * 1000;
const rateLimitMaxRequests = 5;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function clean(value?: string) {
  return value?.trim() || "-";
}

async function forwardInquiryToWebhook(inquiry: Record<string, string>) {
  const webhookUrl = process.env.INQUIRY_WEBHOOK_URL;
  const webhookSecret = process.env.INQUIRY_WEBHOOK_SECRET;

  if (!webhookUrl) {
    return { configured: false, delivered: false };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(webhookSecret ? { ...inquiry, secret: webhookSecret } : inquiry),
    });

    return { configured: true, delivered: response.ok };
  } catch {
    return { configured: true, delivered: false };
  }
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwardedFor || request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(request: Request) {
  const ip = getClientIp(request);
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + rateLimitWindowMs });
    return false;
  }

  if (current.count >= rateLimitMaxRequests) {
    return true;
  }

  current.count += 1;
  return false;
}

function logInquiryEvent(event: string, metadata: Record<string, string | boolean>) {
  console.info("aeternum_inquiry_event", {
    event,
    source: "aeternum-website",
    at: new Date().toISOString(),
    ...metadata,
  });
}

export async function POST(request: Request) {
  let payload: InquiryPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Payload tidak valid." }, { status: 400 });
  }

  if (payload.website?.trim()) {
    logInquiryEvent("spam_filtered", { reason: "honeypot" });
    return NextResponse.json({ accepted: true, spamFiltered: true }, { status: 202 });
  }

  if (isRateLimited(request)) {
    logInquiryEvent("rate_limited", { reason: "ip_window" });
    return NextResponse.json(
      { error: "Terlalu banyak percobaan. Silakan coba lagi beberapa menit lagi." },
      { status: 429 },
    );
  }

  const missingFields = requiredFields.filter((field) => !payload[field]?.trim());

  if (missingFields.length > 0) {
    return NextResponse.json(
      { error: "Mohon lengkapi nama, bisnis, dan jenis project." },
      { status: 422 },
    );
  }

  const inquiry = {
    name: clean(payload.name),
    business: clean(payload.business),
    project: clean(payload.project),
    budget: clean(payload.budget),
    deadline: clean(payload.deadline),
    message: clean(payload.message),
    source: "aeternum-website",
    submittedAt: new Date().toISOString(),
  };

  const message = `Halo Aeternum, saya ingin konsultasi project website/sistem digital.
Nama: ${inquiry.name}
Bisnis: ${inquiry.business}
Jenis project: ${inquiry.project}
Budget: ${inquiry.budget}
Deadline: ${inquiry.deadline}
Kebutuhan: ${inquiry.message}`;

  const webhook = await forwardInquiryToWebhook(inquiry);

  logInquiryEvent("accepted", {
    project: inquiry.project,
    webhookConfigured: webhook.configured,
    webhookDelivered: webhook.delivered,
  });

  return NextResponse.json({
    whatsappUrl: getWhatsAppUrl(message),
    webhookConfigured: webhook.configured,
    webhookDelivered: webhook.delivered,
  });
}
