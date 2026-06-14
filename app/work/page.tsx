import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { projects } from "@/content/site";

export const metadata: Metadata = {
  title: "Portfolio & Case Study | Aeternum Webspace Studio",
  description: "Lihat arah hasil kerja Aeternum untuk website bisnis, landing page, dashboard internal, dan sistem inventory seperti TuneBoss Indonesia.",
};

export default function WorkPage() {
  return (
    <PageHero
      eyebrow="Karya Aeternum"
      title="Contoh arah hasil kerja: website bisnis, landing page, dan sistem internal."
      description="Portfolio Aeternum dibangun untuk menunjukkan cara kami menerjemahkan kebutuhan bisnis menjadi tampilan, sistem, dan alur produk digital yang siap digunakan."
    >
      <section className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.slug} className="shine-card overflow-hidden rounded-[2rem] border border-borderLight bg-white shadow-ambient transition hover:-translate-y-1 hover:border-gold/45">
            <div className={`relative h-56 bg-gradient-to-br ${project.tone} p-3`}>
              <div className="relative h-full overflow-hidden rounded-[1.25rem] bg-white">
                <Image src={project.image} alt={`${project.title} screenshot`} fill sizes="(min-width: 1024px) 360px, 100vw" className="object-contain object-center" />
              </div>
            </div>
            <div className="p-6">
              <span className="rounded-full bg-gold/12 px-3 py-1 text-xs font-semibold text-gold">{project.label}</span>
              <h2 className="mt-5 font-display text-2xl font-bold tracking-[-0.03em] text-navy">{project.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slateText">{project.summary}</p>
              <div className="mt-5 grid gap-2">
                {project.highlights.slice(0, 3).map((item) => (
                  <p key={item} className="flex items-center gap-2 text-sm font-semibold text-navy">
                    <CheckCircle2 className="h-4 w-4 text-gold" />
                    {item}
                  </p>
                ))}
              </div>
              <Link href={project.detailHref} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-navy transition hover:text-gold">
                Lihat case study
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </PageHero>
  );
}
