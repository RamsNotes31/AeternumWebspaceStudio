import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle, Minus } from "lucide-react";
import {
  faqs,
  packages,
  painPoints,
  processSteps,
  services,
  stats,
  techStack,
  valueProps,
} from "@/content/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function HomePage() {
  return (
    <main className="gold-line-bg overflow-hidden bg-background">
      <Hero />
      <TrustBar />
      <StudioTeamStrip />
      <PainPointSection />
      <ServicesSection />
      <ProcessSection />
      <FeaturedWorkSection />
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
    <section className="cyber-gold-hero relative px-4 pb-16 pt-28 text-navy md:pb-20 md:pt-32">
      <div className="absolute left-[8%] top-32 hidden text-6xl font-bold text-gold/10 lg:block">{`{ }`}</div>
      <div className="absolute right-[9%] top-48 hidden text-6xl font-bold text-navy/5 lg:block">{`</>`}</div>
      <div className="absolute bottom-20 left-[14%] hidden text-4xl font-bold text-gold/10 lg:block">WA</div>
      <div className="hero-glyph absolute left-[7%] top-52 hidden lg:block">
        <FloatingCharacter name="Strategy" role="Brief & scope" tone="gold" />
      </div>
      <div className="hero-glyph-delayed absolute right-[6%] top-32 hidden lg:block">
        <FloatingCharacter name="Design" role="UI landing page" tone="white" />
      </div>
      <div className="hero-glyph absolute bottom-12 right-[3%] hidden 2xl:block">
        <FloatingCharacter name="Deploy" role="Online ready" tone="navy" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <div className="reveal-soft mx-auto max-w-4xl">
          <p className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-white/75 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-slateText shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Studio website profesional untuk bisnis modern
          </p>
          <h1 className="font-display text-5xl font-bold leading-[0.98] tracking-[-0.06em] text-navy md:text-7xl">
            Aeternum <span className="bg-gradient-to-r from-gold via-[#F5D46A] to-navy bg-clip-text text-transparent">Webspace</span>
            <br />Studio
          </h1>
          <h2 className="mt-6 font-display text-2xl font-semibold tracking-[-0.03em] text-slate-700 md:text-3xl">
            Jasa Pembuatan Website & Sistem Web Profesional
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slateText md:text-lg">
            Kami merancang website company profile, landing page, backend, dan dashboard internal yang terlihat premium, responsif, mudah dipakai, dan siap online.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={getWhatsAppUrl()}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-navy px-6 font-semibold text-white shadow-ambient transition hover:-translate-y-0.5 hover:bg-midnight hover:shadow-gold"
            >
              Mulai Diskusi
              <MessageCircle className="h-5 w-5" />
            </a>
            <Link
              href="#services"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-borderLight bg-white/70 px-6 font-semibold text-navy backdrop-blur transition hover:-translate-y-0.5 hover:border-gold hover:text-gold"
            >
              Intip Layanan
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <p className="mt-5 font-display text-sm italic text-gold">Crafted with care for growing brands</p>

          <div className="mt-10 grid gap-3 text-left sm:grid-cols-3">
            {[
              ["Software house mindset", "Website rapi, scalable, dan mudah dirawat."],
              ["Quality guaranteed", "Scope, revisi, dan output dibahas dari awal."],
              ["WA-first conversion", "CTA dibuat jelas agar calon client mudah masuk."],
            ].map(([title, desc]) => (
              <div key={title} className="shine-card rounded-2xl border border-borderLight bg-white/75 p-4 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-gold/45">
                <CheckCircle2 className="h-5 w-5 text-gold" />
                <p className="mt-3 font-display text-sm font-bold uppercase tracking-[0.14em] text-navy">{title}</p>
                <p className="mt-2 text-xs leading-5 text-slateText">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="white-gold-lines relative border-y border-borderLight bg-white/92 px-4 py-16 backdrop-blur">
      <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="text-center">
            <p className="font-display text-4xl font-bold tracking-[-0.04em] text-navy md:text-5xl">{item.value}</p>
            <span className={`mx-auto mt-2 block h-1 w-10 rounded-full ${item.accent}`} />
            <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.2em] text-slateText">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function StudioTeamStrip() {
  const team = [
    { name: "Strategist", role: "Scope & arah konten", tone: "gold" as const },
    { name: "UI Designer", role: "Visual premium", tone: "white" as const },
    { name: "Developer", role: "Frontend & backend", tone: "navy" as const },
    { name: "Launch Partner", role: "Deploy & handover", tone: "gold" as const },
  ];

  return (
    <section className="white-gold-lines bg-white px-4 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-[2rem] border border-borderLight bg-background/80 p-5 shadow-ambient backdrop-blur md:flex-row md:items-center md:justify-between md:p-6">
        <div className="max-w-sm">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">Studio characters</p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-[-0.03em] text-navy">Tim kecil, proses jelas, hasil terlihat profesional.</h2>
        </div>
        <div className="grid flex-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <div key={member.name} className={index % 2 === 0 ? "character-bob" : "character-bob-delayed"}>
              <FloatingCharacter className="w-full" name={member.name} role={member.role} tone={member.tone} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PainPointSection() {
  return (
    <section className="relative px-4 py-24">
      <div className="absolute left-0 top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <SectionEyebrow>Solusi Digital untuk Bisnis</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.035em] text-navy md:text-5xl">
            Website yang tepat membantu bisnis terlihat lebih profesional.
          </h2>
        </div>
        <div className="grid gap-4">
          {painPoints.map((item, index) => (
            <div key={item} className="shine-card rounded-3xl border border-borderLight bg-white p-6 shadow-ambient transition duration-300 hover:-translate-y-1 hover:border-gold/40">
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
    <section className="white-gold-lines relative bg-white px-4 py-24" id="services">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <SectionHeader eyebrow="Layanan Kami" title="Solusi website profesional untuk kebutuhan bisnis Anda." />
      <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article key={service.title} className="shine-card group rounded-[2rem] border border-borderLight bg-background p-7 transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white hover:shadow-ambient">
              <div className="mb-7 flex items-center justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/12 text-gold transition group-hover:scale-110 group-hover:bg-gold group-hover:text-navy">
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
  const showcaseItems = [
    {
      title: "Jivara Health Website",
      description: "Website jivara.web.id dirancang untuk memperkenalkan Jivara sebagai platform kesehatan yang membantu pasien tetap patuh minum obat.",
      tone: "from-[#0F5132] via-[#15803D] to-[#D4AF37]",
      label: "Healthcare Website",
      image: "/assets/projects/jivara-home.png",
      href: "https://jivara.web.id",
    },
    {
      title: "SertiKu Certificate Platform",
      description: "SertiKu adalah aplikasi untuk menerbitkan, mengelola, dan memverifikasi sertifikat digital dengan teknologi QR Code dan blockchain.",
      tone: "from-[#0F172A] via-[#2563EB] to-[#8B5CF6]",
      label: "Digital Certificate",
      image: "/assets/projects/sertiku-home.png",
      href: "https://sertiku.web.id",
    },
    {
      title: "TuneBoss Indonesia Inventory",
      description: "Aplikasi inventory internal distributor sparepart motor dengan Expo/React Native Web, TypeScript, Laravel 12, Sanctum, stok, produk, penjualan, laporan, audit log, export, dan PWA.",
      tone: "from-[#080808] via-[#111111] to-[#F97316]",
      label: "Inventory System",
      image: "/assets/projects/tuneboss-inventory.png",
      href: "/work/tuneboss-inventory-system",
    },
  ];

  const trustedBy = ["Jivara", "jivara.web.id", "AI Medication Reminder", "SertiKu", "sertiku.web.id", "QR Verification", "TuneBoss Indonesia", "Inventory Internal", "Laravel 12", "Expo Web", "PWA" ];

  return (
    <section className="relative px-4 py-24" id="work">
      <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-navy/10 blur-3xl" />
      <div className="mx-auto max-w-6xl">
        <div>
          <SectionEyebrow>Contoh Tampilan</SectionEyebrow>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-[-0.035em] text-navy md:text-5xl">
            Hasil kerja Aeternum untuk project digital nyata.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slateText">
            Dari Jivara, SertiKu, sampai TuneBoss Indonesia, Aeternum membantu menyusun website dan aplikasi web yang menjelaskan manfaat produk digital secara jelas, profesional, dan mudah dipercaya pengguna.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {showcaseItems.map((item) => (
            <article key={item.title} className="shine-card group overflow-hidden rounded-[2rem] border border-borderLight bg-white shadow-ambient transition duration-300 hover:-translate-y-1 hover:border-gold/45">
              <div className={`relative h-64 overflow-hidden bg-gradient-to-br ${item.tone} p-3 text-white md:h-72`}>
                <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0_30%,rgba(255,255,255,0.16)_30.2%,transparent_30.8%_100%)] opacity-35" />
                <div className="relative h-full overflow-hidden rounded-[1.35rem] border border-white/20 bg-white shadow-ambient transition duration-300 group-hover:scale-[1.02]">
                  <Image src={item.image} alt={`${item.title} website screenshot`} fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover object-top" />
                </div>
              </div>
              <div className="p-6">
                <span className="rounded-full bg-gold/12 px-3 py-1 text-xs font-semibold text-gold">{item.label}</span>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.02em] text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slateText">{item.description}</p>
                {item.href.startsWith("http") ? (
                  <a href={item.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-navy transition hover:text-gold">
                    Lihat website
                    <ArrowRight className="h-4 w-4" />
                  </a>
                ) : (
                  <Link href={item.href} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-navy transition hover:text-gold">
                    Lihat case study
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] border border-borderLight bg-white/90 p-6 shadow-ambient backdrop-blur md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Project Aeternum</p>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.02em] text-navy">Kami membantu Jivara, SertiKu, dan TuneBoss menampilkan nilai produknya: AI kesehatan, QR verification, blockchain certificate, dan inventory internal.</h3>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <a href="https://jivara.web.id" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-borderLight px-5 text-sm font-semibold text-navy transition hover:border-gold hover:text-gold">
                Jivara
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="https://sertiku.web.id" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-borderLight px-5 text-sm font-semibold text-navy transition hover:border-gold hover:text-gold">
                SertiKu
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="/work/tuneboss-inventory-system" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-borderLight px-5 text-sm font-semibold text-navy transition hover:border-gold hover:text-gold">
                TuneBoss
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-borderLight bg-background/80 p-3">
            <div className="walking-marquee flex gap-3">
              {[...trustedBy, ...trustedBy].map((name, index) => (
                <div key={`${name}-${index}`} className="shine-card grid min-h-20 w-44 shrink-0 place-items-center rounded-2xl border border-borderLight bg-white px-4 text-center font-display text-sm font-semibold text-slateText transition duration-300 hover:border-gold/45 hover:text-navy">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="syntax-gradient relative overflow-hidden px-4 py-24 text-white" id="process">
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <SectionHeader eyebrow="Alur Kerja" title="Proses pembuatan website yang jelas dan terarah." dark />
      <div className="mx-auto mt-16 grid max-w-6xl gap-7 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <article key={step.title} className="shine-card rounded-3xl border border-white/10 bg-white/8 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-gold/35 hover:bg-white/12">
            <p className="font-display text-5xl font-bold text-gold/75 drop-shadow">0{index + 1}</p>
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
    <section className="white-gold-lines bg-white px-4 py-24" id="pricing">
      <SectionHeader eyebrow="Paket Website" title="Pilih paket website sesuai kebutuhan bisnis Anda." />
      <div className="mx-auto mt-16 grid max-w-6xl gap-7 md:grid-cols-2 lg:grid-cols-4">
        {packages.map((item) => {
          const featured = item.name === "Professional";

          return (
            <article
              key={item.name}
              className={`gold-corner-lines shine-card relative rounded-3xl border bg-white p-6 shadow-ambient transition duration-300 hover:-translate-y-1 ${
                featured ? "border-gold ring-4 ring-gold/10" : "border-borderLight hover:border-gold/40"
              }`}
            >
              <div className="mb-5 flex h-7 items-center justify-center">
                {featured ? (
                  <span className="rounded-full border border-gold bg-gold px-4 py-1.5 text-xs font-bold text-navy shadow-gold">
                    Recommended
                  </span>
                ) : null}
              </div>
              <h3 className="font-display text-xl font-semibold text-navy">{item.name}</h3>
              <p className="mt-5 font-display text-2xl font-bold text-ink">{item.price}</p>
              <p className="mt-4 text-sm leading-7 text-slateText">{item.target}</p>
              <a
                href={getWhatsAppUrl(`Halo Aeternum, saya ingin konsultasi paket ${item.name}.\nNama:\nBisnis:\nKebutuhan website:\nBudget:`)}
                className={`mt-7 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full px-4 text-sm font-semibold transition hover:-translate-y-0.5 ${
                  featured ? "bg-gold text-navy hover:shadow-gold" : "border border-borderLight text-navy hover:border-gold hover:text-gold"
                }`}
              >
                <MessageCircle className="h-4 w-4" />
                Konsultasi di WA
              </a>
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
    <section className="relative px-4 py-24">
      <div className="absolute left-1/2 top-12 h-80 w-80 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
      <SectionHeader eyebrow="Keunggulan" title="Mengapa memilih Aeternum Webspace Studio?" />
      <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {valueProps.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="shine-card flex items-start gap-3 rounded-3xl border border-borderLight bg-white p-5 shadow-ambient transition duration-300 hover:-translate-y-1 hover:border-gold/40">
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
    <section className="white-gold-lines bg-white px-4 py-20">
      <div className="gold-line mb-10 h-px" />
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <SectionEyebrow>Tech ecosystem</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.03em] text-navy md:text-4xl">
              Stack modern untuk website yang cepat dan mudah dikembangkan.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slateText">
              Teknologi dipilih sesuai kebutuhan project, bukan sekadar ikut tren. Tujuannya agar website tetap rapi, stabil, dan siap scale saat bisnis berkembang.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {techStack.map((item) => (
              <div key={item.name} className="shine-card flex items-center gap-4 rounded-2xl border border-borderLight bg-background p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:bg-white hover:shadow-ambient">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-borderLight bg-white">
                  <img
                    src={`https://cdn.simpleicons.org/${item.logo}/1E3A5F`}
                    alt=""
                    className="h-5 w-5"
                    loading="lazy"
                  />
                </span>
                <div>
                  <p className="font-display text-sm font-bold uppercase tracking-[0.16em] text-navy">{item.name}</p>
                  <p className="mt-1 text-xs text-slateText">Production ready</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="white-gold-lines bg-white px-4 py-24" id="faq">
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
      <div className="syntax-gradient shine-card relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] p-8 text-white shadow-ambient md:p-12">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gold/15 blur-3xl" />
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

function FloatingCharacter({ name, role, tone, className = "w-52" }: { name: string; role: string; tone: "gold" | "white" | "navy"; className?: string }) {
  const styles = {
    gold: {
      card: "border-gold/35 bg-gold/90 text-navy",
      head: "bg-navy",
      body: "bg-navy/85",
      eye: "bg-gold",
    },
    white: {
      card: "border-borderLight bg-white/90 text-navy",
      head: "bg-gold",
      body: "bg-navy",
      eye: "bg-white",
    },
    navy: {
      card: "border-navy/10 bg-navy/95 text-white",
      head: "bg-gold",
      body: "bg-white/90",
      eye: "bg-navy",
    },
  }[tone];

  return (
    <div className={`shine-card flex items-center gap-3 rounded-3xl border p-3 text-left shadow-ambient backdrop-blur ${styles.card} ${className}`}>
      <div className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/40">
        <div className={`h-7 w-7 rounded-full ${styles.head}`} />
        <div className={`absolute bottom-2 h-4 w-8 rounded-t-full ${styles.body}`} />
        <span className={`absolute left-4 top-5 h-1.5 w-1.5 rounded-full ${styles.eye}`} />
        <span className={`absolute right-4 top-5 h-1.5 w-1.5 rounded-full ${styles.eye}`} />
      </div>
      <div>
        <p className="font-display text-sm font-bold">{name}</p>
        <p className="mt-1 text-xs leading-5 opacity-65">{role}</p>
      </div>
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
