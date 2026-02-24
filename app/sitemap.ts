import { MetadataRoute } from "next";
import { CATEGORIES } from "@/lib/constants";
import { ALL_PRODUCTS } from "@/lib/products";

const BASE = "https://optimdesign.ro";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/produse`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/despre-noi`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((c) => ({
    url: `${BASE}${c.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));
  const productPages: MetadataRoute.Sitemap = ALL_PRODUCTS.map((p) => ({
    url: `${BASE}/produse/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));
  return [...staticPages, ...categoryPages, ...productPages];
}
