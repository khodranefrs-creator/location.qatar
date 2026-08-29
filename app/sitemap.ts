import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { properties } from "@/lib/properties";

const locales = ["ar", "en"] as const;

const staticRoutes = [
  "",
  "/properties",
  "/properties/for-sale",
  "/properties/for-rent",
  "/services",
  "/list-your-property",
  "/about",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    const localeEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
      url: `${base}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: route === "" ? 1 : 0.8,
    }));

    const propertyEntries: MetadataRoute.Sitemap = properties.map((p) => ({
      url: `${base}/${locale}/properties/${p.slug}`,
      lastModified: new Date(p.createdAt),
      changeFrequency: "weekly",
      priority: 0.6,
    }));

    entries.push(...localeEntries, ...propertyEntries);
  }

  return entries;
}
