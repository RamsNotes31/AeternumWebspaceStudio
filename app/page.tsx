import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import {
  faqs,
  featuredProject,
  packages,
  processSteps,
  services,
  stats,
  techStack,
  trustItems,
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
    <main>
      <section className="premium-grid syntax-gradient relative overflow-hidden px-4 pb-24 pt-36 text-white md:pb-32 md:pt-44">
        <div className="absolute inset-x-0 top-0 h-px bg-gold/50" />
        <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-gold/16 blur-3xl" />
        <div className="absolute -left-32 bottom-12 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-white/8 px-4 py-2 text-sm text-white/75 backdrop-blur">
            <Sparkles className="h-4 w-4 text-gold" />
            Timeless Digital Spaces for Modern Businesses
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-[-0.04em] md:text-7xl">
                Website, dashboard, dan sistem internal yang rapi dan siap dikembangkan.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
                Aeternum Webspace Studio membantu bisnis membangun company profile, landing page, web app internal, backend API, database, dan deployment dengan struktur yang jelas dari brief sampai launch.
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
                  Lihat Project
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/12 bg-white/8 p-4 shadow-ambient backdrop-blur-xl md:p-6">
              <div className="rounded-[1.5rem] border border-white/10 bg-midnight/80 p-5">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Project Console</p>
                    <p className="mt-2 font-display text-xl font-semibold">Aeternum Delivery Stack</p>
                  </div>
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                    Ready
                  </span>
                </div>

                <div className="grid gap-3">
                  {trustItems.map((item, index) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                      <div className="mb-3 flex items-center justify-between text-sm">
                        <span className="text-white/82">{item}</span>
                        <CheckCircle2 className="h-4 w-4 text-gold" />
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full rounded-full bg-gold" style={{ width: `${92 - index * 6}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-gold/20 bg-gold/10 p-4 text-sm leading-6 text-white/75">
                  Scope first. Clean build. Deployment-ready handover.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-borderLight bg-white px-4 py-8">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-3xl border border-borderLight bg-background p-5">
              <p className="font-display text-2xl font-bold text-navy">{item.value}</p>
              <p className="mt-1 text-sm text-slateText">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-24" id="services">
        <SectionHeader eyebrow="Services" title="Layanan utama untuk membangun fondasi digital bisnis." />
        <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="rounded-3xl border border-borderLight bg-white p-6 shadow-ambient">
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-gold/12 text-gold">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-ink">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slateText">{service.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-white px-4 py-24" id="work">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Featured Work</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.03em] text-navy md:text-5xl">
              TuneBoss sebagai pajangan project custom system.
            </h2>
            <p className="mt-5 text-base leading-8 text-slateText">
              Featured project ini menunjukkan kapabilitas Aeternum dalam membangun sistem internal dengan frontend, backend, database, dan deployment yang terstruktur.
            </p>
          </div>

          <article className="rounded-[2rem] border border-borderLight bg-background p-7 shadow-ambient">
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
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Inventory Snapshot</p>
                  <p className="mt-1 text-sm text-white/55">TuneBoss operations dashboard</p>
                </div>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                  Live-ready
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["SKU", "1.2K"],
                  ["Low Stock", "24"],
                  ["Reports", "4"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-white/40">{label}</p>
                    <p className="mt-2 font-display text-2xl font-bold text-gold">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid gap-2">
                {["Stock movement recorded", "Barcode/SKU lookup", "Admin/staff access"].map((item) => (
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

      <section className="px-4 py-24" id="pricing">
        <SectionHeader eyebrow="Pricing" title="Paket awal sebagai range diskusi scope." />
        <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((item) => {
            const featured = item.name === "Custom System";

            return (
            <article
              key={item.name}
              className={`relative rounded-3xl border bg-white p-6 shadow-ambient ${
                featured ? "border-gold ring-4 ring-gold/10" : "border-borderLight"
              }`}
            >
              {featured ? (
                <span className="absolute right-5 top-5 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy">
                  Recommended
                </span>
              ) : null}
              <h3 className="font-display text-xl font-semibold text-navy">{item.name}</h3>
              <p className="mt-4 font-display text-2xl font-bold text-ink">{item.price}</p>
              <p className="mt-4 text-sm leading-7 text-slateText">{item.target}</p>
            </article>
            );
          })}
        </div>
      </section>

      <section className="syntax-gradient px-4 py-24 text-white" id="process">
        <SectionHeader eyebrow="Process" title="Alur kerja yang jelas dari brief sampai launch." dark />
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

      <section className="overflow-hidden bg-white py-12">
        <div className="gold-line mb-10 h-px" />
        <div className="flex gap-4 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.2em] text-slateText">
          {[...techStack, ...techStack].map((item, index) => (
            <span key={`${item}-${index}`} className="rounded-full border border-borderLight px-5 py-3">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="px-4 py-24">
        <SectionHeader eyebrow="Why Aeternum" title="Tenang secara visual, kuat secara teknis." />
        <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-center gap-3 rounded-3xl border border-borderLight bg-white p-5 shadow-ambient">
                <Icon className="h-5 w-5 text-gold" />
                <span className="text-sm font-semibold text-navy">{item.title}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-white px-4 py-24" id="faq">
        <SectionHeader eyebrow="FAQ" title="Pertanyaan awal sebelum konsultasi." />
        <div className="mx-auto mt-12 grid max-w-4xl gap-4">
          {faqs.map((item) => (
            <details key={item.question} className="group rounded-3xl border border-borderLight bg-background p-6">
              <summary className="cursor-pointer list-none font-display text-lg font-semibold text-navy">
                {item.question}
              </summary>
              <p className="mt-4 text-sm leading-7 text-slateText">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="px-4 py-24" id="contact">
        <div className="syntax-gradient mx-auto max-w-6xl rounded-[2rem] p-8 text-white shadow-ambient md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Start Here</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.03em] md:text-5xl">
                Punya project website atau sistem internal?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
                Ceritakan kebutuhan, budget range, dan deadline. Kami bantu rapikan scope awal sebelum masuk ke penawaran.
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

      <div className="fixed inset-x-4 bottom-4 z-50 md:hidden">
        <a
          href={getWhatsAppUrl()}
          className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-5 font-semibold text-navy shadow-gold"
        >
          <MessageCircle className="h-5 w-5" />
          Chat Konsultasi Project
        </a>
      </div>
    </main>
  );
}

function SectionHeader({ eyebrow, title, dark = false }: { eyebrow: string; title: string; dark?: boolean }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">{eyebrow}</p>
      <h2 className={`mt-4 font-display text-4xl font-bold tracking-[-0.03em] md:text-5xl ${dark ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
    </div>
  );
}
