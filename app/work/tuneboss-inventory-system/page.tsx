import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";

export default function TuneBossCaseStudyPage() {
  return (
    <PageHero
      eyebrow="Case Study"
      title="TuneBoss Indonesia Inventory System"
      description="Contoh project sistem internal yang menunjukkan kemampuan Aeternum dalam membangun dashboard operasional, struktur data, dan alur kerja digital untuk kebutuhan bisnis."
    >
      <section className="mx-auto mt-12 grid max-w-6xl gap-5 lg:grid-cols-3">
        {[
          ["Problem", "Data inventory perlu lebih mudah dicatat, dicari, dan dipantau oleh tim internal."],
          ["Solution", "Dashboard inventory dengan data produk, kategori, stok masuk/keluar, dan pencarian SKU/barcode."],
          ["Outcome", "Fondasi sistem operasional yang lebih rapi dan siap dikembangkan ke laporan serta role user lebih lengkap."],
        ].map(([title, desc]) => (
          <article key={title} className="shine-card rounded-3xl border border-borderLight bg-white p-6 shadow-ambient">
            <CheckCircle2 className="h-6 w-6 text-gold" />
            <h2 className="mt-5 font-display text-2xl font-bold text-navy">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-slateText">{desc}</p>
          </article>
        ))}
      </section>
    </PageHero>
  );
}
