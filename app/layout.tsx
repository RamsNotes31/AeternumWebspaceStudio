import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Aeternum Webspace Studio | Website, Web App, Backend & Deployment",
  description:
    "Aeternum Webspace Studio membangun website, dashboard, sistem internal, backend, database, dan deployment yang rapi, tahan lama, dan siap dikembangkan.",
  openGraph: {
    title: "Aeternum Webspace Studio",
    description:
      "Timeless Digital Spaces for Modern Businesses. Website, web app, backend, database, dan deployment untuk bisnis modern.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
