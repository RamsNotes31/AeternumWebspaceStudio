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
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const trustItems = [
  "Website",
  "Web App",
  "Backend",
  "Database",
  "Deployment",
];

export const stats = [
  { value: "Full-stack", label: "delivery" },
  { value: "Scope", label: "terdokumentasi" },
  { value: "Deploy", label: "ready" },
  { value: "Built", label: "to scale" },
];

export const services = [
  {
    title: "Website Company Profile",
    description: "Website bisnis yang rapi, cepat, responsif, dan siap dipakai untuk validasi brand.",
    icon: Globe2,
  },
  {
    title: "Landing Page Promosi",
    description: "Halaman campaign dengan pesan jelas, CTA kuat, dan struktur konversi yang fokus.",
    icon: Rocket,
  },
  {
    title: "Web App Internal",
    description: "Aplikasi operasional untuk inventory, dashboard, workflow, reporting, dan tools internal.",
    icon: Layers3,
  },
  {
    title: "Backend API & Database",
    description: "API, autentikasi, database PostgreSQL, dan struktur data yang siap dikembangkan.",
    icon: Database,
  },
];

export const featuredProject = {
  title: "TuneBoss Indonesia Inventory System",
  labels: ["Inventory System", "Backend", "Database", "Deployment"],
  description:
    "Sistem inventory internal untuk membantu pengelolaan stok, produk, kategori, barang masuk/keluar, SKU/barcode lookup, dan laporan operasional.",
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
    target: "Landing page atau company profile sederhana.",
  },
  {
    name: "Business Website",
    price: "Rp5jt - Rp10jt",
    target: "Website multi halaman, form inquiry, dan SEO dasar.",
  },
  {
    name: "Web App MVP",
    price: "Rp10jt - Rp20jt",
    target: "Frontend, backend, database, dan dashboard awal.",
  },
  {
    name: "Custom System",
    price: "Mulai Rp15jt",
    target: "Inventory, dashboard internal, workflow khusus, dan deployment.",
  },
];

export const processSteps = [
  { title: "Diskusi & Analisa", description: "Memetakan tujuan bisnis, user, scope, dan prioritas fitur." },
  { title: "Desain & Arsitektur", description: "Menyusun struktur halaman, data model, flow, dan arah visual." },
  { title: "Development", description: "Membangun frontend, backend, database, integrasi, dan validasi." },
  { title: "QA & Deployment", description: "Testing, revisi, setup production, dan handover awal." },
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
    answer: "Landing page sederhana biasanya 5-7 hari kerja. Web app atau sistem internal mengikuti scope fitur.",
  },
  {
    question: "Apakah bisa membuat backend dan database?",
    answer: "Bisa. Aeternum dapat menangani frontend, backend API, database PostgreSQL, autentikasi, dan deployment.",
  },
  {
    question: "Apakah bisa membuat sistem inventory atau dashboard internal?",
    answer: "Bisa. TuneBoss Inventory System menjadi contoh featured project untuk kebutuhan inventory internal.",
  },
  {
    question: "Apakah harga bisa disesuaikan dengan scope?",
    answer: "Bisa. Harga final ditentukan setelah scope, timeline, integrasi, dan kebutuhan backend/database jelas.",
  },
];

export const valueProps = [
  { title: "Rapi dari brief sampai launch", icon: FileText },
  { title: "Frontend, backend, database", icon: ServerCog },
  { title: "Scope jelas dan terukur", icon: CheckCircle2 },
  { title: "Siap dikembangkan", icon: Sparkles },
  { title: "Security-aware", icon: ShieldCheck },
  { title: "Bisnis dan teknis seimbang", icon: BarChart3 },
  { title: "Custom system ready", icon: Boxes },
  { title: "Clean implementation", icon: Code2 },
];
