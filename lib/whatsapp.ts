const DEFAULT_MESSAGE = `Halo Aeternum, saya ingin konsultasi project website/sistem digital.
Nama:
Bisnis:
Jenis project:
Kebutuhan:
Budget:
Deadline:`;

export function getWhatsAppUrl(message = DEFAULT_MESSAGE) {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6289697100997";

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
