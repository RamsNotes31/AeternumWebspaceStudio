import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Minus,
  Sparkles,
} from "lucide-react";
import {
  faqs,
  featuredProject,
  packages,
  painPoints,
  processSteps,
  services,
  stats,
  techStack,
  valueProps,
} from "@/content/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const projectMessage = `Halo Aeternum, saya tertarik membuat project serupa TuneBoss Inventory System.
Nama:
Bisnis:
Kebutuhan:
Budget:
Deadline:`;

export default function HomePage() {
  return (
    <main className="gold-line-bg overflow-hidden bg-background">
      <Hero />
      <TrustBar />
      <PainPointSection />
      <ServicesSection />
      <FeaturedWorkSection />
      <ProcessSection />
      <PricingSection />
      <PrinciplesSection />
      <TechSection />
      <FaqSection />
      <FinalCta />
      <MobileStickyCta />
    </main>
  );
}

function Hero() {
  return (
    <section className="premium-grid syntax-gradient relative px-4 pb-20 pt-36 text-white md:pb-28 md:pt-44">
      <div className="absolute inset-x-0 top-0 h-px bg-gold/50" />
      <div className="absolute right-[-12rem] top-16 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
      <div className="absolute bottom-10 left-[-10rem] h-72 w-72 rounded-full bg-white/8 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-white/8 px-4 py-2 text-sm text-white/75 backdrop-blur">
            <Sparkles className="h-4 w-4 text-gold" />
            Jasa Website Profesional
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/55">
            Website, landing page, dan sistem web untuk bisnis modern
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="mb-5 max-w-xl text-sm font-semibold uppercase tracking-[0.24em] text-gold">
              Aeternum Webspace Studio
            </p>
            <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-[-0.055em] md:text-7xl">
              Jasa Pembuatan Website Profesional untuk Bisnis Anda.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
              Kami membantu bisnis membangun website company profile, landing page, dan sistem web yang modern, responsif, dan mudah digunakan. Dari konsultasi awal sampai website siap online.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={getWhatsAppUrl()}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-6 font-semibold text-navy transition hover:-translate-y-0.5 hover:shadow-gold"
              >
                <MessageCircle className="h-5 w-5" />
                Konsultasi Project
              </a>
              <Link
                href="/work"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 font-semibold text-white transition hover:border-gold hover:text-gold"
              >
                Lihat Paket Website
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="gold-corner-lines rounded-[2rem] border border-white/12 bg-white/8 p-4 shadow-ambient backdrop-blur-xl md:p-6">
            <div className="rounded-[1.5rem] border border-white/10 bg-midnight/85 p-5">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Website Plan</p>
                  <p className="mt-2 font-display text-2xl font-semibold">Dari konsultasi singkat ke website yang siap dipakai.</p>
                </div>
                <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                  MVP Ready
                </span>
              </div>

              <div className="grid gap-3">
                {[
                  ["01", "Konsultasi", "Tujuan website, referensi, dan kebutuhan utama."],
                  ["02", "Rancangan", "Struktur halaman, copy utama, dan CTA dibuat jelas."],
                  ["03", "Publish", "Website responsif, siap online, dan mudah dibagikan."],
                ].map(([number, title, description]) => (
                  <div key={title} className="grid grid-cols-[auto_1fr] gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-gold text-sm font-bold text-navy">
                      {number}
                    </span>
                    <div>
                      <div className="mb-1 flex items-center justify-between gap-3">
                        <p className="font-display text-base font-semibold text-white">{title}</p>
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" />
                      </div>
                      <p className="text-sm leading-6 text-white/58">{description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  ["Mulai", "Rp600K"],
                  ["Durasi", "5-7 hari"],
                  ["CTA", "WhatsApp"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-gold/15 bg-gold/10 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/45">{label}</p>
                    <p className="mt-2 font-display text-lg font-bold text-gold">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="border-b border-borderLight bg-white px-4 py-8">
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="rounded-3xl border border-borderLight bg-background p-5">
            <p className="font-display text-2xl font-bold text-navy">{item.value}</p>
            <p className="mt-1 text-sm leading-6 text-slateText">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PainPointSection() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <SectionEyebrow>Solusi Digital untuk Bisnis</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.035em] text-navy md:text-5xl">
            Website yang tepat membantu bisnis terlihat lebih profesional.
          </h2>
        </div>
        <div className="grid gap-4">
          {painPoints.map((item, index) => (
            <div key={item} className="rounded-3xl border border-borderLight bg-white p-6 shadow-ambient">
              <p className="font-display text-sm font-bold text-gold">0{index + 1}</p>
              <p className="mt-3 text-lg leading-8 text-ink">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="bg-white px-4 py-24" id="services">
      <SectionHeader eyebrow="Layanan Kami" title="Solusi website profesional untuk kebutuhan bisnis Anda." />
      <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article key={service.title} className="group rounded-[2rem] border border-borderLight bg-background p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-ambient">
              <div className="mb-7 flex items-center justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/12 text-gold">
                  <Icon className="h-6 w-6" />
                </div>
                <ArrowRight className="h-5 w-5 text-slateText transition group-hover:translate-x-1 group-hover:text-gold" />
              </div>
              <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink">{service.title}</h3>
              <p className="mt-4 text-base leading-8 text-slateText">{service.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function FeaturedWorkSection() {
  return (
    <section className="px-4 py-24" id="work">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <SectionEyebrow>Featured Work</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.035em] text-navy md:text-5xl">
            TuneBoss sebagai contoh project sistem internal.
          </h2>
          <p className="mt-5 text-base leading-8 text-slateText">
            Project ini menunjukkan bagaimana website dapat berkembang menjadi sistem operasional: ada login, data produk, stok masuk/keluar, dan laporan dasar.
          </p>
        </div>

          <article className="gold-corner-lines rounded-[2rem] border border-borderLight bg-white p-6 shadow-ambient md:p-7">
          <div className="mb-5 flex flex-wrap gap-2">
            {featuredProject.labels.map((label) => (
              <span key={label} className="rounded-full bg-midnight px-3 py-1 text-xs font-semibold text-gold">
                {label}
              </span>
            ))}
          </div>
          <h3 className="font-display text-3xl font-bold tracking-[-0.03em] text-navy">{featuredProject.title}</h3>
          <p className="mt-4 text-sm leading-7 text-slateText">{featuredProject.description}</p>

          <div className="mt-7 rounded-[1.5rem] bg-midnight p-5 text-white">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Inventory Snapshot</p>
                <p className="mt-1 text-sm text-white/55">Contoh ringkasan dashboard operasional</p>
              </div>
              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                Case study
              </span>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[["Produk", "SKU"], ["Stok", "Masuk/Keluar"], ["Laporan", "Dasar"]].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-white/40">{label}</p>
                  <p className="mt-2 font-display text-xl font-bold text-gold">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 grid gap-2">
              {["Dashboard inventory", "Login admin/staff", "SKU/barcode lookup"].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-2xl bg-white/[0.06] px-4 py-3 text-sm text-white/72">
                  <span>{item}</span>
                  <CheckCircle2 className="h-4 w-4 text-gold" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {featuredProject.highlights.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-ink">
                <CheckCircle2 className="h-4 w-4 text-gold" />
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/work/tuneboss-inventory-system" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-midnight px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-ambient">
              Lihat Case Study
              <ExternalLink className="h-4 w-4" />
            </Link>
            <a href={getWhatsAppUrl(projectMessage)} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-borderLight px-5 text-sm font-semibold text-navy transition hover:border-gold hover:text-gold">
              Buat Project Serupa
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="syntax-gradient px-4 py-24 text-white" id="process">
      <SectionHeader eyebrow="Alur Kerja" title="Proses pembuatan website yang jelas dan terarah." dark />
      <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <article key={step.title} className="rounded-3xl border border-white/10 bg-white/8 p-6">
            <p className="font-display text-5xl font-bold text-gold/75">0{index + 1}</p>
            <h3 className="mt-6 font-display text-xl font-semibold">{step.title}</h3>
            <p className="mt-4 text-sm leading-7 text-white/62">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="bg-white px-4 py-24" id="pricing">
      <SectionHeader eyebrow="Paket Website" title="Pilih paket website sesuai kebutuhan bisnis Anda." />
      <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-4">
        {packages.map((item) => {
          const featured = item.name === "Professional";

          return (
            <article
              key={item.name}
              className={`gold-corner-lines relative rounded-3xl border bg-white p-6 shadow-ambient ${
                featured ? "border-gold ring-4 ring-gold/10" : "border-borderLight"
              }`}
            >
              {featured ? (
                <span className="absolute right-5 top-5 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy">
                  Recommended
                </span>
              ) : null}
              <h3 className="pr-24 font-display text-xl font-semibold text-navy">{item.name}</h3>
              <p className="mt-5 font-display text-2xl font-bold text-ink">{item.price}</p>
              <p className="mt-4 text-sm leading-7 text-slateText">{item.target}</p>
            </article>
          );
        })}
      </div>
      <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-slateText">
        Harga di atas adalah estimasi awal. Biaya final menyesuaikan jumlah halaman, tingkat desain, fitur, form, integrasi, dan deadline pengerjaan.
      </p>
    </section>
  );
}

function PrinciplesSection() {
  return (
    <section className="px-4 py-24">
      <SectionHeader eyebrow="Keunggulan" title="Mengapa memilih Aeternum Webspace Studio?" />
      <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {valueProps.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="flex items-start gap-3 rounded-3xl border border-borderLight bg-white p-5 shadow-ambient">
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <span className="text-sm font-semibold leading-6 text-navy">{item.title}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function TechSection() {
  return (
    <section className="overflow-hidden bg-white py-12">
      <div className="gold-line mb-10 h-px" />
      <div className="mx-auto mb-6 max-w-6xl px-4">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Tech ecosystem</p>
      </div>
      <div className="flex gap-4 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.2em] text-slateText">
        {[...techStack, ...techStack].map((item, index) => (
          <span key={`${item}-${index}`} className="rounded-full border border-borderLight bg-background px-5 py-3">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-white px-4 py-24" id="faq">
      <SectionHeader eyebrow="FAQ" title="Pertanyaan umum sebelum membuat website." />
      <div className="mx-auto mt-12 grid max-w-4xl gap-4">
        {faqs.map((item) => (
          <details key={item.question} className="group rounded-3xl border border-borderLight bg-background p-6 open:border-gold open:bg-white">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-navy">
              {item.question}
              <Minus className="h-5 w-5 text-gold" />
            </summary>
            <p className="mt-4 text-sm leading-7 text-slateText">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="px-4 py-24" id="contact">
      <div className="syntax-gradient mx-auto max-w-6xl rounded-[2rem] p-8 text-white shadow-ambient md:p-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Siap Memiliki Website Profesional?</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.03em] md:text-5xl">
              Konsultasikan kebutuhan website Anda bersama Aeternum.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
              Sampaikan jenis bisnis, tujuan website, contoh referensi, dan kisaran budget. Kami bantu susun kebutuhan dan estimasi pengerjaannya.
            </p>
          </div>
          <a
            href={getWhatsAppUrl()}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-6 font-semibold text-navy transition hover:-translate-y-0.5 hover:shadow-gold"
          >
            <MessageCircle className="h-5 w-5" />
            Konsultasi via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function MobileStickyCta() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-50 md:hidden">
      <a
        href={getWhatsAppUrl()}
        className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-5 font-semibold text-navy shadow-gold"
      >
        <MessageCircle className="h-5 w-5" />
        Chat Konsultasi Project
      </a>
    </div>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">{children}</p>;
}

function SectionHeader({ eyebrow, title, dark = false }: { eyebrow: string; title: string; dark?: boolean }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <SectionEyebrow>{eyebrow}</SectionEyebrow>
      <h2 className={`mt-4 font-display text-4xl font-bold tracking-[-0.035em] md:text-5xl ${dark ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
    </div>
  );
}
