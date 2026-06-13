import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { navItems } from "@/content/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-5 z-50 px-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/70 bg-white/85 px-4 py-3 shadow-ambient backdrop-blur-xl md:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Aeternum Webspace Studio home">
          <span className="relative h-10 w-10 overflow-hidden rounded-full bg-white shadow-ambient ring-1 ring-borderLight">
            <Image
              src="/assets/logo/aeternum-logo.jpeg"
              alt="Aeternum Webspace Studio"
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight text-ink sm:block">
            Aeternum Webspace Studio
          </span>
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium text-slateText lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-ink">
              {item.label}
            </Link>
          ))}
        </div>

        <a
          href={getWhatsAppUrl()}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gold px-4 text-sm font-semibold text-navy transition hover:-translate-y-0.5 hover:shadow-gold"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">Konsultasi Project</span>
          <span className="sm:hidden">Konsultasi</span>
        </a>
      </nav>
    </header>
  );
}
