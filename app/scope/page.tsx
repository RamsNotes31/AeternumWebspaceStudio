import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Scope Note | Aeternum Webspace Studio",
  description: "Catatan ruang lingkup layanan Aeternum Webspace Studio untuk estimasi, revisi, aset, dan handover project.",
};

const scopeItems = [
  {
    title: "Estimasi awal",
    description:
      "Harga dan timeline yang tampil di website adalah titik awal. Estimasi final mengikuti jumlah halaman, fitur, integrasi, aset konten, dan tingkat kompleksitas project.",
  },
  {
    title: "Ruang lingkup kerja",
    description:
      "Setiap project dimulai dari brief yang disepakati. Perubahan besar di luar brief awal dapat memengaruhi timeline, biaya, atau urutan prioritas pengerjaan.",
  },
  {
    title: "Revisi dan feedback",
    description:
      "Revisi difokuskan pada penyempurnaan hasil sesuai brief. Feedback yang jelas dan terkonsolidasi membantu proses berjalan lebih cepat dan rapi.",
  },
  {
    title: "Aset dan konten",
    description:
      "Logo, foto, copywriting final, legal text, dan akses layanan pihak ketiga idealnya disiapkan oleh klien. Jika perlu dibantu, scope dapat dibahas sejak awal.",
  },
  {
    title: "Handover",
    description:
      "Setelah project selesai, Aeternum dapat menyerahkan source code, panduan singkat, dan akses deployment sesuai kebutuhan serta kesepakatan project.",
  },
  {
    title: "Maintenance",
    description:
      "Perawatan setelah launch seperti update konten, monitoring, bug fix lanjutan, atau pengembangan fitur baru dapat dibuat sebagai paket terpisah.",
  },
];

export default function ScopePage() {
  return (
    <PageHero
      eyebrow="Scope Note"
      title="Ekspektasi project yang jelas sejak awal membuat hasil lebih rapi."
      description="Catatan ini membantu calon klien memahami bagaimana estimasi, revisi, aset, handover, dan maintenance biasanya diposisikan dalam project website atau sistem web."
    >
      <section className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2">
        {scopeItems.map((item) => (
          <article key={item.title} className="shine-card rounded-3xl border border-borderLight bg-white p-6 shadow-ambient">
            <h2 className="font-display text-2xl font-bold text-navy">{item.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slateText">{item.description}</p>
          </article>
        ))}
      </section>
    </PageHero>
  );
}
