import type { MetadataRoute } from "next";
import { getStoredBlogs } from "@/lib/blogs";

const routes = [
  "",
  "/services",
  "/work",
  "/work/jivara",
  "/work/sertiku",
  "/work/tuneboss-inventory-system",
  "/pricing",
  "/blog",
  "/about",
  "/contact",
  "/scope",
  "/privacy",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const blogs = await getStoredBlogs();

  return [
    ...routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : 0.8,
    })),
    ...blogs.map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: new Date(blog.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
