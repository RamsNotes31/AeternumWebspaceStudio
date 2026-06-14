import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ProjectCaseStudy } from "@/components/sections/project-case-study";
import { projects } from "@/content/site";

const project = projects.find((item) => item.slug === "sertiku")!;

export const metadata: Metadata = {
  title: "SertiKu Case Study | Aeternum Webspace Studio",
  description: "Case study SertiKu, aplikasi sertifikat digital untuk menerbitkan, mengelola, dan memverifikasi sertifikat dengan QR Code dan blockchain.",
};

export default function SertiKuCaseStudyPage() {
  return (
    <PageHero eyebrow="Case Study" title={project.title} description={project.summary}>
      <ProjectCaseStudy project={project} />
    </PageHero>
  );
}
