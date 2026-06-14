import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { services } from "@/content/site";

export const metadata: Metadata = {
  title: "Layanan Website & Sistem Web | Aeternum Webspace Studio",
  description: "Layanan pembuatan website company profile, landing page, web app internal, backend API, database, dan deployment untuk bisnis modern.",
};

export default function ServicesPage() {
  return (
    <PageHero
      eyebrow="Layanan Aeternum"
      title="Website, landing page, dan sistem web yang dibuat untuk kebutuhan bisnis nyata."
      description="Kami tidak hanya membuat tampilan. Setiap layanan diarahkan ke output yang jelas: halaman yang meyakinkan, alur konsultasi yang mudah, struktur teknis yang rapi, dan fondasi yang siap dikembangkan."
    >
      <section className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article key={service.title} className="shine-card rounded-[2rem] border border-borderLight bg-white p-7 shadow-ambient transition hover:-translate-y-1 hover:border-gold/45">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/12 text-gold">
                  <Icon className="h-6 w-6" />
                </div>
                <ArrowRight className="h-5 w-5 text-slateText" />
              </div>
              <h2 className="font-display text-2xl font-bold tracking-[-0.03em] text-navy">{service.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slateText">{service.description}</p>
              <div className="mt-6 grid gap-3">
                {["Brief dan scope dirapikan", "Desain responsif", "CTA konsultasi jelas"].map((item) => (
                  <p key={item} className="flex items-center gap-2 text-sm font-semibold text-navy">
                    <CheckCircle2 className="h-4 w-4 text-gold" />
                    {item}
                  </p>
                ))}
              </div>
            </article>
          );
        })}
      </section>
    </PageHero>
  );
}
