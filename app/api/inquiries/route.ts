import { NextResponse } from "next/server";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type InquiryPayload = {
  name?: string;
  business?: string;
  project?: string;
  budget?: string;
  deadline?: string;
  message?: string;
};

const requiredFields: Array<keyof InquiryPayload> = ["name", "business", "project"];

export async function POST(request: Request) {
  let payload: InquiryPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Payload tidak valid." }, { status: 400 });
  }

  const missingFields = requiredFields.filter((field) => !payload[field]?.trim());

  if (missingFields.length > 0) {
    return NextResponse.json(
      { error: "Mohon lengkapi nama, bisnis, dan jenis project." },
      { status: 422 },
    );
  }

  const message = `Halo Aeternum, saya ingin konsultasi project website/sistem digital.
Nama: ${payload.name}
Bisnis: ${payload.business}
Jenis project: ${payload.project}
Budget: ${payload.budget || "-"}
Deadline: ${payload.deadline || "-"}
Kebutuhan: ${payload.message || "-"}`;

  return NextResponse.json({ whatsappUrl: getWhatsAppUrl(message) });
}
