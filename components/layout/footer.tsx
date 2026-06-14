import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { navItems } from "@/content/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const services = [
  "Website Company Profile",
  "Landing Page Promosi",
  "Web App Internal",
  "Backend & Database",
];

export function Footer() {
  return (
    <footer className="border-t border-borderLight bg-[#0B1220] px-4 pt-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="gold-corner-lines rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-ambient md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Aeternum Webspace Studio</p>
              <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-[-0.03em] md:text-4xl">
                Bangun website yang lebih rapi, profesional, dan siap dipakai bisnis.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/62">
                Mulai dari landing page sederhana sampai sistem web internal. Konsultasikan dulu kebutuhan Anda, lalu kita susun scope yang masuk akal.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href={getWhatsAppUrl()}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-5 font-semibold text-navy transition hover:-translate-y-0.5 hover:shadow-gold"
              >
                <MessageCircle className="h-5 w-5" />
                Konsultasi Project
              </a>
              <Link
                href="/pricing"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-5 font-semibold text-white transition hover:border-gold hover:text-gold"
              >
                Lihat Paket
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-10 py-12 md:grid-cols-[1.2fr_0.7fr_0.7fr_0.8fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="relative h-12 w-12 overflow-hidden rounded-full bg-white shadow-ambient ring-1 ring-white/20">
                <Image
                  src="/assets/logo/aeternum-logo.jpeg"
                  alt="Aeternum Webspace Studio"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </span>
              <div>
                <p className="font-display text-lg font-semibold">Aeternum</p>
                <p className="text-sm text-white/50">Webspace Studio</p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/58">
              Studio pembuatan website, landing page, dan sistem web untuk bisnis yang ingin tampil lebih profesional secara online.
            </p>
          </div>

          <FooterColumn title="Navigasi">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-gold">
                {item.label}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Layanan">
            {services.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </FooterColumn>

          <FooterColumn title="Kontak">
            <a href={getWhatsAppUrl()} className="inline-flex items-center gap-2 transition hover:text-gold">
              <MessageCircle className="h-4 w-4" />
              Chat WhatsApp
            </a>
            <a href="mailto:hello@aeternum.studio" className="inline-flex items-center gap-2 transition hover:text-gold">
              <Mail className="h-4 w-4" />
              hello@aeternum.studio
            </a>
          </FooterColumn>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-sm text-white/42 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Aeternum Webspace Studio. All rights reserved.</p>
          <p>Designed for modern business presence.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-4 font-display text-base font-semibold text-white">{title}</h3>
      <div className="grid gap-3 text-sm text-white/58">{children}</div>
    </div>
  );
}
