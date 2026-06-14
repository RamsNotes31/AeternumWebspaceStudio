"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { projects } from "@/content/site";

type Project = (typeof projects)[number];

export function ProjectFilterGrid({ projects }: { projects: Project[] }) {
  const filters = ["All", ...Array.from(new Set(projects.flatMap((project) => project.categories)))] as const;
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const filteredProjects = activeFilter === "All" ? projects : projects.filter((project) => project.categories.includes(activeFilter));

  return (
    <section className="mx-auto mt-12 max-w-6xl">
      <div className="no-scrollbar flex gap-2 overflow-x-auto rounded-full border border-borderLight bg-white/80 p-1 shadow-sm">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold transition ${
              activeFilter === filter ? "bg-gold text-navy shadow-gold" : "text-slateText hover:bg-background hover:text-navy"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <article key={project.slug} className="shine-card overflow-hidden rounded-[2rem] border border-borderLight bg-white shadow-ambient transition hover:-translate-y-1 hover:border-gold/45">
            <div className={`relative h-56 bg-gradient-to-br ${project.tone} p-3`}>
              <div className="relative h-full overflow-hidden rounded-[1.25rem] bg-white">
                <Image src={project.image} alt={`${project.title} screenshot`} fill sizes="(min-width: 1024px) 360px, 100vw" className="object-contain object-center" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2">
                {project.categories.map((category) => (
                  <span key={category} className="rounded-full bg-gold/12 px-3 py-1 text-xs font-semibold text-gold">{category}</span>
                ))}
              </div>
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
              <Link href={project.detailHref} data-event="portfolio_case_study_click" data-project={project.slug} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-navy transition hover:text-gold">
                Lihat case study
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
