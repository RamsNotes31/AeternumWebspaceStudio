import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, CheckCircle2, Clock, MessageCircle } from "lucide-react";
import { getStoredBlogBySlug } from "@/lib/blogs";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getStoredBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog tidak ditemukan | Aeternum Webspace Studio",
    };
  }

  return {
    title: `${blog.title} | Blog Aeternum`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: blog.image ? [blog.image] : undefined,
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const blog = await getStoredBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="gold-line-bg px-4 pb-24 pt-36">
      <article className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-borderLight bg-white shadow-ambient">
        <div className="cyber-gold-hero p-6 md:p-10">
          <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slateText transition hover:text-gold">
            <ArrowLeft className="h-4 w-4" />
            Kembali ke blog
          </Link>
          <span className="rounded-full bg-gold/12 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-gold">
            {blog.category}
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-[-0.04em] text-navy md:text-6xl">
            {blog.title}
          </h1>
          <p className="mt-5 text-base leading-8 text-slateText md:text-lg">{blog.excerpt}</p>
          <div className="mt-7 flex flex-wrap gap-3 text-xs font-semibold text-slateText">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-borderLight bg-white px-3 py-1.5">
              <CalendarDays className="h-3.5 w-3.5 text-gold" />
              {blog.date || "Tanggal belum diset"}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-borderLight bg-white px-3 py-1.5">
              <Clock className="h-3.5 w-3.5 text-gold" />
              {blog.readTime || "3 menit baca"}
            </span>
          </div>
        </div>

        <div className="relative h-72 overflow-hidden bg-gradient-to-br from-navy via-midnight to-gold/70 md:h-96">
          {blog.image ? (
            <Image src={blog.image} alt={blog.title} fill sizes="(min-width: 768px) 896px, 100vw" className="object-cover" priority />
          ) : (
            <div className="grid h-full place-items-center px-8 text-center text-white">
              <p className="font-display text-3xl font-bold tracking-[-0.03em] text-gold md:text-5xl">Aeternum Insight</p>
            </div>
          )}
        </div>

        <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-[1fr_260px]">
          <div>
            <div className="prose prose-slate max-w-none">
              {blog.content.split(/\n{2,}/).map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-slateText">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-3xl border border-borderLight bg-background p-5">
            <p className="font-display text-lg font-bold text-navy">Poin utama</p>
            <div className="mt-4 grid gap-3">
              {blog.highlights.map((item) => (
                <p key={item} className="flex items-center gap-2 text-sm font-semibold text-navy">
                  <CheckCircle2 className="h-4 w-4 text-gold" />
                  {item}
                </p>
              ))}
            </div>
            <a
              href={getWhatsAppUrl(`Halo Aeternum, saya membaca blog "${blog.title}" dan ingin konsultasi.\nNama:\nBisnis:\nKebutuhan website:`)}
              data-event="blog_detail_whatsapp_click"
              className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-gold px-5 text-sm font-bold text-navy transition hover:-translate-y-0.5 hover:shadow-gold"
            >
              <MessageCircle className="h-4 w-4" />
              Konsultasi
            </a>
          </aside>
        </div>
      </article>
    </main>
  );
}
