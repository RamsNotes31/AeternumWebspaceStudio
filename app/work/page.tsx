import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ProjectFilterGrid } from "@/components/sections/project-filter-grid";
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
      <ProjectFilterGrid projects={projects} />
    </PageHero>
  );
}
