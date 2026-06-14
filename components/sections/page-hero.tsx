import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <main className="gold-line-bg px-4 pb-24 pt-36">
      <section className="cyber-gold-hero relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-borderLight bg-white p-8 shadow-ambient md:p-12">
        <Link href="/" className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-slateText transition hover:text-gold">
          <ArrowLeft className="h-4 w-4" />
          Kembali ke landing page
        </Link>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold tracking-[-0.04em] text-navy md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-slateText md:text-lg">{description}</p>
        <a
          href={getWhatsAppUrl()}
          className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-6 font-semibold text-navy transition hover:-translate-y-0.5 hover:shadow-gold"
        >
          <MessageCircle className="h-5 w-5" />
          Konsultasi Project
        </a>
      </section>
      {children}
    </main>
  );
}
