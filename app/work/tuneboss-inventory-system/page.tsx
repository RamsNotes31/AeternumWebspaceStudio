import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ProjectCaseStudy } from "@/components/sections/project-case-study";
import { projects } from "@/content/site";

const project = projects.find((item) => item.slug === "tuneboss-inventory-system")!;

export const metadata: Metadata = {
  title: "TuneBoss Inventory System Case Study | Aeternum",
  description: "Case study sistem inventory internal TuneBoss Indonesia sebagai contoh project dashboard operasional dan sistem web Aeternum.",
};

export default function TuneBossCaseStudyPage() {
  return (
    <PageHero
      eyebrow="Case Study"
      title={project.title}
      description={project.summary}
    >
      <ProjectCaseStudy project={project} />
    </PageHero>
  );
}
