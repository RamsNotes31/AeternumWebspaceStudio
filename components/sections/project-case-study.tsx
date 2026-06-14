import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { projects } from "@/content/site";

type Project = (typeof projects)[number];

export function ProjectCaseStudy({ project }: { project: Project }) {
  return (
    <section className="mx-auto mt-12 max-w-6xl">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className={`overflow-hidden rounded-[2rem] bg-gradient-to-br ${project.tone} p-3 shadow-ambient`}>
          <div className="relative h-72 overflow-hidden rounded-[1.5rem] bg-white md:h-[26rem]">
            <Image src={project.image} alt={`${project.title} screenshot`} fill sizes="(min-width: 1024px) 640px, 100vw" className="object-contain object-center" priority />
          </div>
        </div>
        <div className="rounded-[2rem] border border-borderLight bg-white p-7 shadow-ambient">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold">Project Overview</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.04em] text-navy">{project.title}</h2>
          <p className="mt-4 text-sm leading-7 text-slateText">{project.description}</p>
          <div className="mt-6 grid gap-3">
            {project.highlights.map((item) => (
              <p key={item} className="flex items-center gap-3 text-sm font-semibold text-navy">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" />
                {item}
              </p>
            ))}
          </div>
          <Link href="/contact" className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gold px-5 text-sm font-bold text-navy transition hover:-translate-y-0.5 hover:shadow-gold">
            Buat project serupa
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="mt-6 rounded-[2rem] border border-borderLight bg-white p-7 shadow-ambient">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold">Stack & capability</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="rounded-full border border-borderLight bg-background px-4 py-2 text-sm font-semibold text-slateText">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
