import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { navItems } from "@/content/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-3 z-50 px-3 md:top-5 md:px-4">
      <nav className="mx-auto max-w-6xl rounded-[1.6rem] border border-white/70 bg-white/90 p-2 shadow-ambient backdrop-blur-xl md:rounded-full md:px-6 md:py-3">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="flex min-w-0 items-center gap-2 rounded-full pr-2" aria-label="Aeternum Webspace Studio home">
            <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-white shadow-ambient ring-1 ring-borderLight md:h-10 md:w-10">
              <Image
                src="/assets/logo/aeternum-logo.jpeg"
                alt="Aeternum Webspace Studio"
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-sm font-bold tracking-tight text-ink sm:text-[15px]">
                Aeternum
              </span>
              <span className="block truncate text-[10px] font-semibold uppercase tracking-[0.16em] text-slateText sm:hidden">
                Webspace Studio
              </span>
              <span className="hidden truncate font-display text-sm font-bold tracking-tight text-ink sm:block">
                Webspace Studio
              </span>
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
            className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-gold px-3 text-sm font-bold text-navy transition hover:-translate-y-0.5 hover:shadow-gold sm:min-h-11 sm:px-4"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Konsultasi Project</span>
            <span className="sm:hidden">Chat</span>
          </a>
        </div>

        <div className="relative mt-2 lg:hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-5 bg-gradient-to-r from-white/95 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-5 bg-gradient-to-l from-white/95 to-transparent" />
          <div className="no-scrollbar flex gap-2 overflow-x-auto rounded-full border border-borderLight bg-background/80 p-1 text-xs font-bold text-slateText">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="shrink-0 rounded-full px-4 py-2 transition hover:bg-white hover:text-gold">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
