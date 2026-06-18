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
  { label: "Blog", href: "/blog" },
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
  { value: "12+", label: "Project selesai", accent: "bg-gold" },
  { value: "12+", label: "Client aktif", accent: "bg-navy" },
  { value: "98%", label: "Kepuasan client", accent: "bg-gold" },
  { value: "99.9%", label: "Uptime reliability", accent: "bg-emerald-400" },
];

export const services = [
  {
    title: "Website Company Profile",
    description: "Jasa pembuatan website profil bisnis yang profesional untuk menampilkan layanan, keunggulan, portfolio, dan kontak perusahaan Anda.",
    icon: Globe2,
  },
  {
    title: "Landing Page Promosi",
    description: "Landing page untuk promosi produk, jasa, campaign, atau iklan dengan struktur konten yang fokus pada konversi dan konsultasi.",
    icon: Rocket,
  },
  {
    title: "Web App Internal",
    description: "Pembuatan aplikasi web internal untuk membantu bisnis mengelola inventory, dashboard, laporan, approval, dan workflow operasional.",
    icon: Layers3,
  },
  {
    title: "Backend API & Database",
    description: "Pengembangan backend, API, autentikasi, database PostgreSQL, dan struktur data untuk website atau aplikasi yang membutuhkan sistem dinamis.",
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
    target: "Cocok untuk halaman promosi, profil jasa, atau website satu halaman yang ingin cepat online.",
  },
  {
    name: "Business",
    price: "Mulai Rp1,5jt",
    target: "Cocok untuk website bisnis dengan beberapa halaman, informasi layanan, portfolio, dan CTA WhatsApp.",
  },
  {
    name: "Professional",
    price: "Mulai Rp3jt+",
    target: "Cocok untuk website profesional dengan struktur konten matang, form, optimasi dasar, dan tampilan lebih premium.",
  },
  {
    name: "Custom System",
    price: "By scope",
    target: "Cocok untuk kebutuhan aplikasi khusus seperti dashboard internal, inventory, backend custom, database, laporan, dan role user.",
  },
];

export const processSteps = [
  { title: "Konsultasi kebutuhan", description: "Kami pahami tujuan website, target pelanggan, referensi desain, fitur, dan budget awal." },
  { title: "Penyusunan konsep", description: "Struktur halaman, alur konten, CTA, dan kebutuhan teknis disusun sebelum masuk development." },
  { title: "Desain dan development", description: "Website dibuat responsif, modern, mudah digunakan, dan sesuai identitas bisnis Anda." },
  { title: "Review dan publish", description: "Setelah dicek dan disesuaikan, website dibantu sampai siap online dan digunakan." },
];

export const techStack = [
  { name: "Next.js", logo: "nextdotjs" },
  { name: "React", logo: "react" },
  { name: "TypeScript", logo: "typescript" },
  { name: "Tailwind CSS", logo: "tailwindcss" },
  { name: "NestJS", logo: "nestjs" },
  { name: "PostgreSQL", logo: "postgresql" },
  { name: "Prisma", logo: "prisma" },
  { name: "Supabase", logo: "supabase" },
  { name: "Vercel", logo: "vercel" },
  { name: "VPS/Nginx", logo: "nginx" },
];

export const faqs = [
  {
    question: "Berapa lama proses pembuatan website?",
    answer: "Landing page atau company profile sederhana biasanya 5-7 hari kerja setelah konten dan scope jelas. Website multi halaman atau sistem internal mengikuti jumlah fitur dan tingkat desain.",
  },
  {
    question: "Apakah bisa membuat website dengan backend dan database?",
    answer: "Bisa. Aeternum dapat menangani frontend, backend API, database PostgreSQL, autentikasi, validasi data, hingga deployment.",
  },
  {
    question: "Apakah bisa membuat sistem inventory atau dashboard internal?",
    answer: "Bisa. TuneBoss Inventory System menjadi contoh awal untuk kebutuhan inventory internal, dashboard operasional, stok masuk/keluar, dan laporan dasar.",
  },
  {
    question: "Apakah harga bisa disesuaikan dengan kebutuhan?",
    answer: "Bisa. Harga akan menyesuaikan jumlah halaman, fitur, desain, kebutuhan backend, deadline, dan tingkat kompleksitas project.",
  },
];

export const valueProps = [
  { title: "Desain modern dan responsif", icon: FileText },
  { title: "Bisa website, backend, dan database", icon: ServerCog },
  { title: "Harga dan output dibahas di awal", icon: CheckCircle2 },
  { title: "Struktur siap dikembangkan", icon: Sparkles },
  { title: "Keamanan dasar diperhatikan", icon: ShieldCheck },
  { title: "Fokus pada kebutuhan bisnis", icon: BarChart3 },
  { title: "Cocok untuk sistem custom", icon: Boxes },
  { title: "Kode rapi dan mudah dirawat", icon: Code2 },
];

export const painPoints = [
  "Bisnis sudah berjalan, tetapi belum memiliki website yang terlihat profesional dan meyakinkan.",
  "Informasi layanan masih tersebar di chat, katalog, atau media sosial sehingga calon pelanggan sulit memahami penawaran Anda.",
  "Anda membutuhkan website yang bisa menjadi pusat informasi, promosi, dan pintu masuk konsultasi pelanggan.",
];

export const projects = [
  {
    title: "Jivara Health Website",
    slug: "jivara",
    label: "Healthcare Website",
    href: "https://jivara.web.id",
    detailHref: "/work/jivara",
    image: "/assets/projects/jivara-home.jpg",
    tone: "from-[#0F5132] via-[#15803D] to-[#D4AF37]",
    summary: "Website kesehatan untuk memperkenalkan Jivara sebagai platform yang membantu pasien patuh minum obat.",
    description: "Jivara membantu pasien patuh minum obat dan mendeteksi interaksi berbahaya dengan makanan menggunakan teknologi AI.",
    stack: ["Healthcare website", "AI feature messaging", "Responsive landing page", "Product education"],
    categories: ["Website", "Healthcare", "AI"],
    highlights: ["Positioning produk kesehatan", "Hero dan CTA jelas", "Alur fitur mudah dipahami", "Tampilan clean dan trusted"],
    caseStudy: {
      problem: "Produk kesehatan berbasis AI perlu dijelaskan dengan bahasa yang mudah dipahami pasien, bukan hanya istilah teknis.",
      solution: "Website diarahkan untuk menonjolkan manfaat utama: pengingat minum obat, edukasi interaksi makanan, dan rasa aman untuk pengguna.",
      outcome: "Jivara tampil lebih jelas sebagai produk digital kesehatan yang ramah pengguna dan punya value proposition yang mudah ditangkap.",
    },
  },
  {
    title: "SertiKu Certificate Platform",
    slug: "sertiku",
    label: "Digital Certificate",
    href: "https://sertiku.web.id",
    detailHref: "/work/sertiku",
    image: "/assets/projects/sertiku-home.jpg",
    tone: "from-[#0F172A] via-[#2563EB] to-[#8B5CF6]",
    summary: "Platform sertifikat digital dengan penerbitan, pengelolaan, dan verifikasi berbasis QR Code dan blockchain.",
    description: "SertiKu adalah aplikasi untuk menerbitkan, mengelola, dan memverifikasi sertifikat digital dengan teknologi QR Code dan blockchain.",
    stack: ["Certificate platform", "QR verification", "Blockchain messaging", "SaaS landing page"],
    categories: ["Web App", "Certificate", "Blockchain"],
    highlights: ["Value proposition jelas", "Visual dark-tech", "CTA masuk dan verifikasi", "Stat dan trust signal"],
    caseStudy: {
      problem: "Layanan sertifikat digital membutuhkan penjelasan yang meyakinkan tentang verifikasi, keamanan, dan kemudahan penggunaan.",
      solution: "Landing page disusun dengan fokus pada verifikasi QR Code, blockchain, CTA masuk, dan visual dark-tech yang memberi kesan aman.",
      outcome: "SertiKu terlihat sebagai platform sertifikat digital yang modern, terpercaya, dan mudah digunakan oleh penerbit maupun penerima sertifikat.",
    },
  },
  {
    title: "TuneBoss Indonesia Inventory",
    slug: "tuneboss-inventory-system",
    label: "Inventory System",
    href: "/work/tuneboss-inventory-system",
    detailHref: "/work/tuneboss-inventory-system",
    image: "/assets/projects/tuneboss-inventory.png",
    tone: "from-[#080808] via-[#111111] to-[#F97316]",
    summary: "Aplikasi inventory internal untuk distributor sparepart motor TuneBoss ID.",
    description: "Frontend memakai Expo/React Native Web + TypeScript, backend memakai Laravel 12 + Sanctum untuk login admin/staff, stok, produk, penjualan, laporan, audit log, export, dan PWA.",
    stack: ["Expo / React Native Web", "TypeScript", "Laravel 12", "Sanctum", "PWA"],
    categories: ["Web App", "Inventory", "Backend"],
    highlights: ["Login admin/staff", "Manajemen stok dan produk", "Penjualan dan laporan", "Audit log dan export"],
    caseStudy: {
      problem: "Distributor sparepart motor membutuhkan sistem internal untuk mengelola kategori, produk, stok, penjualan, dan laporan secara lebih rapi.",
      solution: "Aplikasi inventory dibangun dengan frontend Expo/React Native Web dan backend Laravel 12 + Sanctum untuk workflow admin/staff.",
      outcome: "TuneBoss memiliki fondasi inventory internal yang siap dipakai sebagai PWA dan dapat dikembangkan ke audit, export, dan laporan operasional.",
    },
  },
];

export const testimonials = [
  {
    project: "Jivara",
    quote: "Aeternum membantu membuat pesan produk kesehatan berbasis AI menjadi lebih mudah dipahami dan terlihat siap dipresentasikan.",
    role: "Healthcare product website",
  },
  {
    project: "SertiKu",
    quote: "Visual dan struktur halaman dibuat untuk menjelaskan verifikasi QR dan sertifikat digital dengan lebih meyakinkan.",
    role: "Digital certificate platform",
  },
  {
    project: "TuneBoss Indonesia",
    quote: "Sistem inventory dibangun dengan alur internal yang rapi untuk kebutuhan produk, stok, penjualan, laporan, dan audit.",
    role: "Inventory internal system",
  },
];
