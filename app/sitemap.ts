import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/business";

// Die 5 echten Seiten des Hybrid-Aufbaus (One-Pager + SEO-Unterseiten + Recht).
const routes: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/leistungen", priority: 0.8, changeFrequency: "monthly" },
  { path: "/preise", priority: 0.7, changeFrequency: "monthly" },
  { path: "/impressum", priority: 0.2, changeFrequency: "yearly" },
  { path: "/datenschutz", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((r) => ({
    url: `${SITE_URL}${r.path === "/" ? "" : r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
