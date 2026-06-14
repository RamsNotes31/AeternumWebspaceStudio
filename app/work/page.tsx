import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Portfolio & Case Study | Aeternum Webspace Studio",
  description: "Lihat arah hasil kerja Aeternum untuk website bisnis, landing page, dashboard internal, dan sistem inventory seperti TuneBoss Indonesia.",
};

export default function WorkPage() {
  return (
    <PageHero
      eyebrow="Karya Aeternum"
      title="Contoh arah hasil kerja: website bisnis, landing page, dan sistem internal."
      description="Portfolio Aeternum dibangun untuk menunjukkan cara kami menerjemahkan kebutuhan bisnis menjadi tampilan dan sistem yang siap digunakan."
    >
      <section className="mx-auto mt-12 max-w-6xl">
        <article className="syntax-gradient shine-card rounded-[2rem] p-8 text-white shadow-ambient md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold">Featured case study</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <h2 className="font-display text-4xl font-bold tracking-[-0.04em]">TuneBoss Indonesia Inventory System</h2>
              <p className="mt-5 text-sm leading-7 text-white/68">
                Sistem inventory internal untuk membantu pengelolaan produk, kategori, stok masuk/keluar, pencarian SKU/barcode, dan laporan operasional dasar.
              </p>
              <Link href="/work/tuneboss-inventory-system" className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-bold text-navy transition hover:-translate-y-0.5 hover:shadow-gold">
                Lihat Detail Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur">
              {["Dashboard inventory", "Login admin/staff", "Data produk dan kategori", "Stok masuk/keluar"].map((item) => (
                <p key={item} className="flex items-center gap-3 border-b border-white/10 py-3 text-sm text-white/76 last:border-0">
                  <CheckCircle2 className="h-4 w-4 text-gold" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </article>
      </section>
    </PageHero>
  );
}
