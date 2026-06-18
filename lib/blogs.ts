import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  image: string;
  published: boolean;
  highlights: string[];
  createdAt: string;
  updatedAt: string;
};

const dataPath = path.join(process.cwd(), "data", "blogs.json");
const uploadDir = path.join(process.cwd(), "public", "assets", "blog");
const allowedImageTypes = new Map([
  ["image/jpeg", "jpg"],
  ["image/png", "png"],
  ["image/webp", "webp"],
  ["image/gif", "gif"],
]);

export const defaultBlogPosts: BlogPost[] = [
  {
    id: "checklist-website-bisnis-pertama",
    slug: "checklist-website-bisnis-pertama",
    title: "Checklist sebelum membuat website bisnis pertama",
    category: "Website Strategy",
    date: "12 Juni 2026",
    readTime: "4 menit baca",
    excerpt:
      "Hal yang perlu disiapkan sebelum mulai membuat website: tujuan halaman, target pelanggan, struktur konten, aset brand, dan CTA utama.",
    content:
      "Website bisnis yang baik dimulai dari tujuan yang jelas. Tentukan halaman utama, siapa calon pelanggan yang dituju, penawaran apa yang ingin dijelaskan, dan aksi apa yang ingin diarahkan setelah pengunjung membaca halaman.",
    image: "",
    published: true,
    highlights: ["Tujuan website", "Konten awal", "CTA konsultasi"],
    createdAt: "2026-06-12T00:00:00.000Z",
    updatedAt: "2026-06-12T00:00:00.000Z",
  },
  {
    id: "landing-page-fokus-satu-aksi",
    slug: "landing-page-fokus-satu-aksi",
    title: "Kenapa landing page harus fokus pada satu aksi utama",
    category: "Landing Page",
    date: "10 Juni 2026",
    readTime: "3 menit baca",
    excerpt:
      "Landing page yang efektif membantu calon pelanggan memahami penawaran dengan cepat dan diarahkan ke satu aksi yang paling bernilai.",
    content:
      "Semakin banyak pilihan yang diberikan, semakin besar peluang pengunjung menunda keputusan. Landing page yang fokus menjaga pesan tetap ringkas, visual tetap terarah, dan CTA mudah ditemukan.",
    image: "",
    published: true,
    highlights: ["Pesan jelas", "Alur singkat", "Konversi WA"],
    createdAt: "2026-06-10T00:00:00.000Z",
    updatedAt: "2026-06-10T00:00:00.000Z",
  },
  {
    id: "bisnis-butuh-dashboard-internal",
    slug: "bisnis-butuh-dashboard-internal",
    title: "Kapan bisnis mulai butuh dashboard atau sistem internal",
    category: "Web App",
    date: "7 Juni 2026",
    readTime: "5 menit baca",
    excerpt:
      "Jika data operasional mulai tersebar di chat, spreadsheet, dan catatan manual, sistem internal bisa membantu proses jadi lebih rapi.",
    content:
      "Dashboard internal mulai terasa penting ketika tim perlu melihat data yang sama, memperbarui status pekerjaan, mengurangi pencatatan ganda, dan membaca laporan tanpa mengumpulkan file manual setiap hari.",
    image: "",
    published: true,
    highlights: ["Data terpusat", "Role user", "Laporan dasar"],
    createdAt: "2026-06-07T00:00:00.000Z",
    updatedAt: "2026-06-07T00:00:00.000Z",
  },
];

export async function getStoredBlogs({ includeDrafts = false } = {}) {
  const blogs = await readBlogs();
  return includeDrafts ? blogs : blogs.filter((blog) => blog.published);
}

export async function getStoredBlogBySlug(slug: string, { includeDrafts = false } = {}) {
  const blogs = await getStoredBlogs({ includeDrafts });
  return blogs.find((blog) => blog.slug === slug) || null;
}

export async function createStoredBlog(formData: FormData) {
  const now = new Date().toISOString();
  const title = getText(formData, "title");
  const blogs = await readBlogs();
  const slug = createUniqueSlug(getText(formData, "slug") || title || "blog", blogs);
  const blog: BlogPost = {
    id: `${slug}-${Date.now()}`,
    slug,
    title,
    category: getText(formData, "category"),
    date: getText(formData, "date"),
    readTime: getText(formData, "readTime"),
    excerpt: getText(formData, "excerpt"),
    content: getText(formData, "content"),
    image: await saveUploadedImage(formData, "image"),
    published: formData.get("published") === "on",
    highlights: parseHighlights(getText(formData, "highlights")),
    createdAt: now,
    updatedAt: now,
  };

  if (!blog.title || !blog.category || !blog.excerpt) {
    return { ok: false, error: "Judul, kategori, dan ringkasan wajib diisi." };
  }

  await writeBlogs([blog, ...blogs]);
  return { ok: true, error: "" };
}

export async function updateStoredBlog(formData: FormData) {
  const id = getText(formData, "id");
  const blogs = await readBlogs();
  const existing = blogs.find((blog) => blog.id === id);

  if (!existing) {
    return { ok: false, error: "Blog tidak ditemukan." };
  }

  const image = await saveUploadedImage(formData, "image");
  const slug = createUniqueSlug(getText(formData, "slug") || getText(formData, "title") || "blog", blogs, id);
  const nextBlogs = blogs.map((blog) =>
    blog.id === id
      ? {
          ...blog,
          slug,
          title: getText(formData, "title"),
          category: getText(formData, "category"),
          date: getText(formData, "date"),
          readTime: getText(formData, "readTime"),
          excerpt: getText(formData, "excerpt"),
          content: getText(formData, "content"),
          image: image || blog.image,
          published: formData.get("published") === "on",
          highlights: parseHighlights(getText(formData, "highlights")),
          updatedAt: new Date().toISOString(),
        }
      : blog,
  );

  await writeBlogs(nextBlogs);
  return { ok: true, error: "" };
}

export async function deleteStoredBlog(formData: FormData) {
  const id = getText(formData, "id");
  const blogs = await readBlogs();
  await writeBlogs(blogs.filter((blog) => blog.id !== id));
  return { ok: true, error: "" };
}

async function readBlogs() {
  try {
    const data = await readFile(dataPath, "utf8");
    const parsed = JSON.parse(data) as BlogPost[];
    return Array.isArray(parsed) ? normalizeBlogs(parsed) : defaultBlogPosts;
  } catch {
    return defaultBlogPosts;
  }
}

async function writeBlogs(blogs: BlogPost[]) {
  await mkdir(path.dirname(dataPath), { recursive: true });
  await writeFile(dataPath, `${JSON.stringify(blogs, null, 2)}\n`, "utf8");
}

async function saveUploadedImage(formData: FormData, field: string) {
  const value = formData.get(field);

  if (!isUploadedFile(value) || value.size === 0) {
    return "";
  }

  const extension = allowedImageTypes.get(value.type);
  if (!extension || value.size > 4 * 1024 * 1024) {
    return "";
  }

  await mkdir(uploadDir, { recursive: true });
  const fileName = `${Date.now()}-${slugify(value.name.replace(/\.[^.]+$/, ""))}.${extension}`;
  const target = path.join(uploadDir, fileName);
  const buffer = Buffer.from(await value.arrayBuffer());
  await writeFile(target, buffer);
  return `/assets/blog/${fileName}`;
}

function isUploadedFile(value: FormDataEntryValue | null): value is File {
  return Boolean(value && typeof value === "object" && "arrayBuffer" in value && "size" in value && "type" in value);
}

function getText(formData: FormData, key: string) {
  return String(formData.get(key) || "").trim();
}

function parseHighlights(value: string) {
  return value
    .split(/\r?\n|,/)
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 4);
}

function normalizeBlogs(blogs: BlogPost[]) {
  return blogs.map((blog) => ({
    ...blog,
    slug: blog.slug || slugify(blog.id || blog.title),
  }));
}

function createUniqueSlug(value: string, blogs: BlogPost[], exceptId = "") {
  const baseSlug = slugify(value);
  const usedSlugs = new Set(blogs.filter((blog) => blog.id !== exceptId).map((blog) => blog.slug));
  let slug = baseSlug;
  let index = 2;

  while (usedSlugs.has(slug)) {
    slug = `${baseSlug}-${index}`;
    index += 1;
  }

  return slug;
}

function slugify(value: string) {
  return (
    value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 70) || "blog"
  );
}
