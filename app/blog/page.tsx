import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, CheckCircle2, Clock, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { getStoredBlogs } from "@/lib/blogs";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Blog | Aeternum Webspace Studio",
  description:
    "Artikel Aeternum Webspace Studio tentang website bisnis, landing page, sistem web, dan strategi digital untuk brand yang ingin tampil profesional.",
};

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const blogPosts = await getStoredBlogs();

  return (
    <PageHero
      eyebrow="Blog Aeternum"
      title="Insight praktis seputar website, landing page, dan sistem web untuk bisnis."
      description="Kumpulan catatan singkat dari Aeternum untuk membantu bisnis memahami kebutuhan website, menyusun konten, dan memilih fitur digital yang benar-benar berguna."
    >
      <section className="mx-auto mt-12 grid max-w-6xl gap-5 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="shine-card group flex h-full flex-col overflow-hidden rounded-[2rem] border border-borderLight bg-white shadow-ambient transition duration-300 hover:-translate-y-1 hover:border-gold/45"
          >
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-navy via-midnight to-gold/70">
              {post.image ? (
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 360px, 100vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="grid h-full place-items-center text-white">
                  <div className="grid h-16 w-16 place-items-center rounded-3xl border border-white/20 bg-white/10 backdrop-blur">
                    <BookOpen className="h-8 w-8 text-gold" />
                  </div>
                </div>
              )}
              <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/90 px-3 py-1 text-xs font-bold text-navy shadow-sm">
                0{index + 1}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <span className="w-fit rounded-full bg-gold/12 px-3 py-1 text-xs font-semibold text-gold">
                {post.category}
              </span>
              <h2 className="mt-5 font-display text-2xl font-bold tracking-[-0.03em] text-navy">
                {post.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slateText">{post.excerpt}</p>

              <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold text-slateText">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-borderLight bg-background px-3 py-1.5">
                  <CalendarDays className="h-3.5 w-3.5 text-gold" />
                  {post.date || "Tanggal belum diset"}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-borderLight bg-background px-3 py-1.5">
                  <Clock className="h-3.5 w-3.5 text-gold" />
                  {post.readTime || "3 menit baca"}
                </span>
              </div>

              <div className="mt-7 grid gap-3 border-t border-borderLight pt-5">
                {post.highlights.map((item) => (
                  <p key={item} className="flex items-center gap-2 text-sm font-semibold text-navy">
                    <CheckCircle2 className="h-4 w-4 text-gold" />
                    {item}
                  </p>
                ))}
              </div>

              <div className="mt-auto pt-7">
                <span className="inline-flex items-center gap-2 text-sm font-bold text-navy transition group-hover:text-gold">
                  Baca ringkasan
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <section className="mx-auto mt-10 max-w-6xl">
        <div className="syntax-gradient shine-card relative overflow-hidden rounded-[2rem] p-7 text-white shadow-ambient md:p-10">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />
          <div className="relative grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Butuh arahan website?</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.03em] md:text-4xl">
                Diskusikan kebutuhan digital bisnis Anda sebelum mulai development.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68">
                Aeternum dapat membantu merapikan scope, struktur halaman, CTA, dan estimasi fitur agar project lebih jelas sejak awal.
              </p>
            </div>
            <a
              href={getWhatsAppUrl("Halo Aeternum, saya ingin konsultasi setelah membaca blog.\nNama:\nBisnis:\nKebutuhan website:")}
              data-event="blog_cta_whatsapp_click"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-6 font-semibold text-navy transition hover:-translate-y-0.5 hover:shadow-gold"
            >
              <MessageCircle className="h-5 w-5" />
              Konsultasi via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </PageHero>
  );
}
