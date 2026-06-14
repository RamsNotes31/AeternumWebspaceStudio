import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { packages } from "@/content/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Harga Pembuatan Website | Aeternum Webspace Studio",
  description: "Estimasi paket website Aeternum mulai Rp600K untuk landing page, company profile, website profesional, dan custom system.",
};

export default function PricingPage() {
  return (
    <PageHero
      eyebrow="Paket Website"
      title="Estimasi harga yang jelas, lalu disesuaikan dengan scope project."
      description="Paket berikut membantu menentukan titik awal. Harga final tetap mengikuti jumlah halaman, fitur, kebutuhan backend, deadline, dan tingkat desain."
    >
      <section className="mx-auto mt-16 grid max-w-6xl gap-7 md:grid-cols-2 lg:grid-cols-4">
        {packages.map((item) => {
          const featured = item.name === "Professional";
          return (
            <article key={item.name} className={`gold-corner-lines shine-card relative rounded-3xl border bg-white p-6 shadow-ambient ${featured ? "border-gold ring-4 ring-gold/10" : "border-borderLight"}`}>
              <div className="mb-5 flex h-7 items-center justify-center">
                {featured ? <span className="rounded-full bg-gold px-4 py-1.5 text-xs font-bold text-navy shadow-gold">Recommended</span> : null}
              </div>
              <h2 className="font-display text-xl font-bold text-navy">{item.name}</h2>
              <p className="mt-5 font-display text-2xl font-bold text-ink">{item.price}</p>
              <p className="mt-4 text-sm leading-7 text-slateText">{item.target}</p>
              <a href={getWhatsAppUrl(`Halo Aeternum, saya ingin konsultasi paket ${item.name}.\nNama:\nBisnis:\nKebutuhan website:\nBudget:`)} data-event="pricing_page_whatsapp_click" data-package={item.name} className={`mt-7 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full px-4 text-sm font-semibold transition hover:-translate-y-0.5 ${featured ? "bg-gold text-navy hover:shadow-gold" : "border border-borderLight text-navy hover:border-gold hover:text-gold"}`}>
                <MessageCircle className="h-4 w-4" />
                Konsultasi di WA
              </a>
            </article>
          );
        })}
      </section>
    </PageHero>
  );
}
