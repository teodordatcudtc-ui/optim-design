import { MetadataRoute } from "next";
import { CATEGORIES } from "@/lib/constants";
import { ALL_LUCRARI } from "@/lib/lucrari";

const BASE = "https://optimdesign.ro";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/lucrari`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/despre-noi`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/termeni-si-conditii`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/politica-confidentialitate`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/politica-cookies`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((c) => ({
    url: `${BASE}${c.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));
  const lucrariPages: MetadataRoute.Sitemap = ALL_LUCRARI.map((l) => ({
    url: `${BASE}/lucrari/${l.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));
  return [...staticPages, ...categoryPages, ...lucrariPages];
}
