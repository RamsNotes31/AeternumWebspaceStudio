import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ProjectCaseStudy } from "@/components/sections/project-case-study";
import { projects } from "@/content/site";

const project = projects.find((item) => item.slug === "jivara")!;

export const metadata: Metadata = {
  title: "Jivara Case Study | Aeternum Webspace Studio",
  description: "Case study Jivara, website kesehatan berbasis AI untuk membantu pasien patuh minum obat dan mendeteksi interaksi makanan berbahaya.",
};

export default function JivaraCaseStudyPage() {
  return (
    <PageHero eyebrow="Case Study" title={project.title} description={project.summary}>
      <ProjectCaseStudy project={project} />
    </PageHero>
  );
}
