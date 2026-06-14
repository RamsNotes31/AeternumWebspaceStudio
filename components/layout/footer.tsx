import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import { navItems } from "@/content/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const services = ["Company Profile", "Landing Page", "Web App", "Backend & Database"];
const packages = ["Starter mulai Rp600K", "Business mulai Rp1,5jt", "Professional mulai Rp3jt+"];
const socials = [
  { label: "Instagram segera hadir", icon: Instagram },
  { label: "Facebook segera hadir", icon: Facebook },
  { label: "LinkedIn segera hadir", icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="bg-[#080E1A] px-4 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-5 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 md:flex-row md:items-center md:justify-between md:p-6">
          <div className="flex items-center gap-4">
            <span className="relative h-14 w-14 overflow-hidden rounded-2xl bg-white shadow-ambient ring-1 ring-white/20">
              <Image
                src="/assets/logo/aeternum-logo.jpeg"
                alt="Aeternum Webspace Studio"
                fill
                sizes="56px"
                className="object-cover"
              />
            </span>
            <div>
              <p className="font-display text-xl font-semibold tracking-[-0.02em]">Aeternum Webspace Studio</p>
              <p className="mt-1 text-sm text-white/50">Jasa website, landing page, dan sistem web.</p>
            </div>
          </div>

          <a
            href={getWhatsAppUrl()}
            data-event="footer_top_whatsapp_click"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-5 font-semibold text-navy transition hover:-translate-y-0.5 hover:shadow-gold"
          >
            <MessageCircle className="h-5 w-5" />
            Konsultasi Project
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <FooterCard title="Navigasi">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="group flex items-center justify-between rounded-2xl px-3 py-2 transition hover:bg-white/[0.06] hover:text-gold">
                {item.label}
                <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
              </Link>
            ))}
          </FooterCard>

          <FooterCard title="Layanan">
            {services.map((item) => (
              <span key={item} className="rounded-2xl px-3 py-2 text-white/62">
                {item}
              </span>
            ))}
          </FooterCard>

          <FooterCard title="Paket Awal">
            {packages.map((item) => (
              <span key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 text-white/68">
                {item}
              </span>
            ))}
          </FooterCard>

          <FooterCard title="Kontak">
            <a href={getWhatsAppUrl()} data-event="footer_contact_whatsapp_click" className="flex items-center gap-2 rounded-2xl px-3 py-2 transition hover:bg-white/[0.06] hover:text-gold">
              <MessageCircle className="h-4 w-4" />
              Chat WhatsApp
            </a>
            <a href="mailto:hello@aeternum.studio" className="flex items-center gap-2 rounded-2xl px-3 py-2 transition hover:bg-white/[0.06] hover:text-gold">
              <Mail className="h-4 w-4" />
              hello@aeternum.studio
            </a>
            <div className="mt-3 flex items-center gap-2 px-3">
              {socials.map((item) => {
                const Icon = item.icon;
                return (
                  <span
                    key={item.label}
                    aria-label={item.label}
                    title={item.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/35"
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                );
              })}
            </div>
          </FooterCard>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/42 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Aeternum Webspace Studio.</p>
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
            <Link href="/scope" className="transition hover:text-gold">Scope Note</Link>
            <Link href="/privacy" className="transition hover:text-gold">Privacy Policy</Link>
            <p>Modern website presence for growing businesses.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5">
      <h3 className="mb-4 font-display text-base font-semibold text-white">{title}</h3>
      <div className="grid gap-1 text-sm text-white/58">{children}</div>
    </div>
  );
}
