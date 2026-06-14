import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Privacy Policy | Aeternum Webspace Studio",
  description: "Kebijakan privasi Aeternum Webspace Studio terkait data brief, konsultasi, dan inquiry project website.",
};

const privacyItems = [
  {
    title: "Data yang dikumpulkan",
    description: "Form brief dapat meminta nama, nama bisnis, jenis project, budget, deadline, dan kebutuhan singkat untuk membantu proses konsultasi.",
  },
  {
    title: "Tujuan penggunaan",
    description: "Data digunakan untuk memahami kebutuhan project, menyusun estimasi awal, dan melakukan follow-up melalui WhatsApp atau kanal kontak yang tersedia.",
  },
  {
    title: "Penyimpanan data",
    description: "Pada versi MVP ini, brief diproses untuk membuat pesan WhatsApp. Jika nanti inquiry disimpan ke database atau layanan eksternal, kebijakan ini akan diperbarui.",
  },
  {
    title: "Kontrol pengguna",
    description: "Pengguna dapat meminta koreksi atau penghapusan data inquiry dengan menghubungi Aeternum melalui WhatsApp atau email yang tersedia di website.",
  },
];

export default function PrivacyPage() {
  return (
    <PageHero
      eyebrow="Privacy Policy"
      title="Data brief Anda digunakan untuk membantu proses konsultasi project."
      description="Aeternum menjaga informasi yang dikirim melalui form inquiry agar hanya digunakan untuk memahami kebutuhan website, sistem web, atau konsultasi digital Anda."
    >
      <section className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2">
        {privacyItems.map((item) => (
          <article key={item.title} className="shine-card rounded-3xl border border-borderLight bg-white p-6 shadow-ambient">
            <h2 className="font-display text-2xl font-bold text-navy">{item.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slateText">{item.description}</p>
          </article>
        ))}
      </section>
    </PageHero>
  );
}
