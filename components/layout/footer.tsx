import Link from "next/link";
import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";
import { navItems } from "@/content/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="syntax-gradient px-4 py-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="relative h-11 w-11 overflow-hidden rounded-full bg-white shadow-ambient ring-1 ring-white/20">
              <Image
                src="/assets/logo/aeternum-logo.jpeg"
                alt="Aeternum Webspace Studio"
                fill
                sizes="44px"
                className="object-cover"
              />
            </span>
            <div>
              <p className="font-display text-lg font-semibold">Aeternum Webspace Studio</p>
              <p className="text-sm text-white/60">Timeless Digital Spaces</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/68">
            Kami membantu bisnis membangun website, dashboard, sistem internal, backend, database, dan deployment yang rapi, tahan lama, dan siap dikembangkan.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-display text-base font-semibold">Navigasi</h3>
          <div className="grid gap-3 text-sm text-white/68">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-gold">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-display text-base font-semibold">Kontak</h3>
          <div className="grid gap-3 text-sm text-white/68">
            <a href={getWhatsAppUrl()} className="inline-flex items-center gap-2 transition hover:text-gold">
              <MessageCircle className="h-4 w-4" />
              Chat WhatsApp
            </a>
            <a href="mailto:hello@aeternum.studio" className="inline-flex items-center gap-2 transition hover:text-gold">
              <Mail className="h-4 w-4" />
              hello@aeternum.studio
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-6 text-sm text-white/45">
        © {new Date().getFullYear()} Aeternum Webspace Studio. All rights reserved.
      </div>
    </footer>
  );
}
