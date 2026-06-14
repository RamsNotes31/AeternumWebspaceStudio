import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";

export default function AboutPage() {
  return (
    <PageHero
      eyebrow="Tentang Aeternum"
      title="Studio website yang fokus pada tampilan premium, struktur rapi, dan hasil yang bisa dipakai bisnis."
      description="Aeternum Webspace Studio hadir untuk membantu bisnis punya digital space yang terlihat profesional, mudah dipahami pelanggan, dan tidak rumit untuk dikembangkan ke tahap berikutnya."
    >
      <section className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-3">
        {[
          ["Clarity first", "Kami mulai dari tujuan bisnis, target pelanggan, dan output yang benar-benar dibutuhkan."],
          ["Premium but practical", "Desain dibuat modern dan meyakinkan tanpa mengorbankan kecepatan serta kemudahan penggunaan."],
          ["Built to grow", "Struktur halaman, komponen, dan kode disiapkan agar bisa dikembangkan menjadi sistem lebih lengkap."],
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
