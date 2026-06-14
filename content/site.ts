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
  { value: "End-to-end", label: "website, backend, database, deployment" },
  { value: "Scope-first", label: "alur kerja dan biaya dibuat jelas" },
  { value: "Deploy-ready", label: "siap rilis ke hosting pilihan" },
];

export const services = [
  {
    title: "Website Company Profile",
    description: "Website profil bisnis yang rapi, cepat, dan mudah dipahami calon pelanggan saat mereka mencari informasi tentang layanan Anda.",
    icon: Globe2,
  },
  {
    title: "Landing Page Promosi",
    description: "Halaman promosi untuk jasa, produk, campaign, atau iklan dengan pesan yang fokus dan tombol aksi yang jelas.",
    icon: Rocket,
  },
  {
    title: "Web App Internal",
    description: "Aplikasi berbasis web untuk membantu operasional seperti inventory, dashboard, laporan, approval, dan workflow internal.",
    icon: Layers3,
  },
  {
    title: "Backend API & Database",
    description: "Backend, autentikasi, API, PostgreSQL, dan struktur data untuk project yang membutuhkan sistem yang lebih kuat dari website statis.",
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
    name: "Starter",
    price: "Mulai Rp600K",
    target: "Untuk landing page sederhana, profil jasa, atau halaman promosi satu halaman.",
  },
  {
    name: "Business",
    price: "Mulai Rp1,5jt",
    target: "Untuk website bisnis lebih lengkap dengan beberapa halaman, section layanan, portfolio, dan CTA WhatsApp.",
  },
  {
    name: "Professional",
    price: "Mulai Rp3jt+",
    target: "Untuk website yang lebih serius dengan struktur konten matang, form, optimasi dasar, dan halaman yang lebih lengkap.",
  },
  {
    name: "Custom System",
    price: "By scope",
    target: "Untuk dashboard internal, inventory, backend custom, database, laporan, role user, dan deployment.",
  },
];

export const processSteps = [
  { title: "Konsultasi kebutuhan", description: "Kami mulai dari tujuan website, target pengunjung, referensi desain, dan fitur yang dibutuhkan." },
  { title: "Struktur dan konten", description: "Halaman, alur baca, CTA, dan konten utama disusun agar website mudah dipahami." },
  { title: "Desain dan development", description: "Tampilan dibuat responsif, lalu dikembangkan menjadi website yang siap digunakan." },
  { title: "Review dan publish", description: "Website dicek bersama, direvisi sesuai scope, lalu dibantu sampai online." },
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
  "Bisnis sudah berjalan, tapi belum punya website yang terlihat profesional.",
  "Calon pelanggan sering bertanya hal yang sama karena informasi layanan belum tersusun rapi.",
  "Butuh website yang bisa jadi pusat informasi, promosi, dan pintu masuk konsultasi.",
];
