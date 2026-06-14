import { MessageCircle } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function ContactPage() {
  return (
    <PageHero
      eyebrow="Kontak"
      title="Mulai dari brief singkat, lalu Aeternum bantu rapikan kebutuhan websitenya."
      description="Ceritakan jenis bisnis, tujuan website, referensi desain, fitur yang dibutuhkan, dan kisaran budget. Kami bantu arahkan menjadi scope yang jelas."
    >
      <section className="mx-auto mt-12 grid max-w-6xl gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <a href={getWhatsAppUrl()} className="shine-card rounded-[2rem] border border-gold bg-gold p-7 text-navy shadow-ambient transition hover:-translate-y-1 hover:shadow-gold">
          <MessageCircle className="h-8 w-8" />
          <h2 className="mt-5 font-display text-3xl font-bold tracking-[-0.04em]">Konsultasi via WhatsApp</h2>
          <p className="mt-4 text-sm leading-7 text-navy/70">Klik untuk membuka template pesan. Isi data singkat agar estimasi bisa diarahkan lebih cepat.</p>
        </a>
        <div className="rounded-[2rem] border border-borderLight bg-white p-7 shadow-ambient">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold">Brief yang membantu</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {["Nama bisnis", "Jenis website", "Jumlah halaman", "Fitur khusus", "Referensi desain", "Budget dan deadline"].map((item) => (
              <div key={item} className="rounded-2xl border border-borderLight bg-background p-4 text-sm font-semibold text-navy">{item}</div>
            ))}
          </div>
        </div>
      </section>
    </PageHero>
  );
}
