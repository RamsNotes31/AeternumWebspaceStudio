import type { MetadataRoute } from "next";

const routes = [
  "",
  "/services",
  "/work",
  "/work/jivara",
  "/work/sertiku",
  "/work/tuneboss-inventory-system",
  "/pricing",
  "/about",
  "/contact",
  "/scope",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
