import {
  BarChart3,
  Boxes,
  CheckCircle2,
  Code2,
  Database,
  FileText,
  Globe2,
  Layers3,
  Rocket,
  ServerCog,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const navItems = [
  { label: "Layanan", href: "/services" },
  { label: "Karya", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "Tentang", href: "/about" },
  { label: "Kontak", href: "/contact" },
];

export const trustItems = [
  "Brief dan scope dirapikan dulu",
  "Desain mengikuti kebutuhan bisnis",
  "Frontend, backend, dan database bisa satu paket",
  "Siap dibantu sampai deploy",
];

export const stats = [
  { value: "1", label: "featured project: TuneBoss Inventory" },
  { value: "End-to-end", label: "dari landing page sampai backend" },
  { value: "Scope-first", label: "biar budget dan timeline jelas" },
  { value: "Deploy-ready", label: "bisa Vercel, Supabase, atau VPS" },
];

export const services = [
  {
    title: "Website Company Profile",
    description: "Untuk bisnis yang butuh profil resmi, kredibel, dan mudah dipahami calon client tanpa penjelasan panjang di chat.",
    icon: Globe2,
  },
  {
    title: "Landing Page Promosi",
    description: "Untuk campaign, jasa, produk, atau iklan. Fokus pada satu pesan, satu alur baca, dan CTA yang jelas.",
    icon: Rocket,
  },
  {
    title: "Web App Internal",
    description: "Untuk operasional seperti inventory, dashboard, reporting, approval, atau workflow internal yang mulai kewalahan di spreadsheet.",
    icon: Layers3,
  },
  {
    title: "Backend API & Database",
    description: "Untuk project yang butuh login, data real, integrasi, PostgreSQL, API, dan fondasi teknis yang tidak asal jalan.",
    icon: Database,
  },
];

export const featuredProject = {
  title: "TuneBoss Indonesia Inventory System",
  labels: ["Inventory System", "Backend", "Database", "Deployment"],
  description:
    "Sistem inventory internal untuk membantu tim mengelola produk, kategori, stok masuk/keluar, pencarian SKU/barcode, dan laporan operasional harian.",
  highlights: [
    "Dashboard inventory",
    "Login admin/staff",
    "Produk & kategori",
    "Stok masuk/keluar",
    "SKU/barcode lookup",
    "Laporan dasar",
  ],
};

export const packages = [
  {
    name: "Starter Website",
    price: "Rp2,5jt - Rp5jt",
    target: "Cocok untuk landing page atau profil bisnis satu sampai beberapa section.",
  },
  {
    name: "Business Website",
    price: "Rp5jt - Rp10jt",
    target: "Untuk website multi halaman dengan struktur layanan, portfolio, form, dan SEO dasar.",
  },
  {
    name: "Web App MVP",
    price: "Rp10jt - Rp20jt",
    target: "Untuk dashboard awal, login, database, dan workflow internal versi pertama.",
  },
  {
    name: "Custom System",
    price: "Mulai Rp15jt",
    target: "Untuk inventory, admin dashboard, backend custom, report, role user, dan deployment.",
  },
];

export const processSteps = [
  { title: "Rapikan kebutuhan", description: "Kita mulai dari tujuan, contoh referensi, batasan budget, dan fitur yang benar-benar penting." },
  { title: "Susun struktur", description: "Konten, halaman, flow, data, dan desain dibuat dulu supaya pengerjaan tidak menebak-nebak." },
  { title: "Bangun bertahap", description: "Frontend, backend, database, dan integrasi dikerjakan per modul agar mudah direview." },
  { title: "Test dan launch", description: "Sebelum publish, fitur dicek, tampilan dirapikan, lalu dibantu deploy ke environment yang disepakati." },
];

export const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "NestJS",
  "PostgreSQL",
  "Prisma",
  "Supabase",
  "Vercel",
  "VPS/Nginx",
];

export const faqs = [
  {
    question: "Berapa lama pembuatan website?",
    answer: "Landing page atau company profile sederhana biasanya 5-7 hari kerja setelah konten dan scope jelas. Website multi halaman atau sistem internal akan dihitung berdasarkan fitur.",
  },
  {
    question: "Apakah bisa membuat backend dan database?",
    answer: "Bisa. Aeternum bisa menangani frontend, backend API, PostgreSQL, autentikasi, validasi data, sampai deployment.",
  },
  {
    question: "Apakah bisa membuat sistem inventory atau dashboard internal?",
    answer: "Bisa. TuneBoss Inventory System menjadi contoh awal untuk kebutuhan inventory internal, dashboard operasional, stok masuk/keluar, dan laporan dasar.",
  },
  {
    question: "Apakah harga bisa disesuaikan dengan scope?",
    answer: "Bisa. Kami lebih suka menentukan harga setelah scope jelas, supaya tidak terlalu murah di awal lalu banyak biaya tambahan di tengah jalan.",
  },
];

export const valueProps = [
  { title: "Tidak langsung coding sebelum scope jelas", icon: FileText },
  { title: "Bisa handle UI, API, database", icon: ServerCog },
  { title: "Timeline dan output dibuat terukur", icon: CheckCircle2 },
  { title: "Struktur siap dikembangkan lagi", icon: Sparkles },
  { title: "Validasi dan keamanan dasar diperhatikan", icon: ShieldCheck },
  { title: "Bahasa teknis diterjemahkan ke kebutuhan bisnis", icon: BarChart3 },
  { title: "Cocok untuk sistem custom", icon: Boxes },
  { title: "Kode dibuat bersih dan mudah dirawat", icon: Code2 },
];

export const painPoints = [
  "Website lama terlihat kurang meyakinkan saat dibagikan ke calon client.",
  "Masih terlalu banyak proses bisnis yang jalan lewat chat, Excel, atau catatan manual.",
  "Punya ide sistem, tapi belum tahu harus mulai dari flow, database, atau desainnya.",
];
