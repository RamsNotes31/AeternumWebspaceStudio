import { PageHero } from "@/components/sections/page-hero";

export default function ContactPage() {
  return (
    <PageHero
      eyebrow="Contact"
      title="Mulai dari brief singkat, lalu kita rapikan scope projectnya."
      description="Halaman contact akan memuat form inquiry, CTA WhatsApp, email/contact info, dan FAQ singkat. Untuk versi awal, CTA WhatsApp sudah aktif melalui environment variable."
    />
  );
}
