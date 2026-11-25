import type { MetadataRoute } from "next";
import { DEPARTMENTS, getAllPrograms } from "@/data/departments";
import { EVENTS, NEWS } from "@/data/home";
import { ADMISSION_GUIDES } from "@/data/bahria-guide";
import { ADMISSION_INFO } from "@/data/admissions";
import { ADMINISTRATION_ENTRIES } from "@/data/administration";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://uswat.edu.pk";

type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"];

const staticRoutes: { path: string; priority: number; changeFrequency: ChangeFrequency }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/history", priority: 0.7, changeFrequency: "yearly" },
  { path: "/academics", priority: 0.8, changeFrequency: "monthly" },
  { path: "/programs", priority: 0.9, changeFrequency: "monthly" },
  { path: "/departments", priority: 0.8, changeFrequency: "monthly" },
  { path: "/faculties", priority: 0.8, changeFrequency: "monthly" },
  { path: "/admissions", priority: 0.9, changeFrequency: "weekly" },
  { path: "/admissions/undergraduate", priority: 0.8, changeFrequency: "weekly" },
  { path: "/admissions/masters", priority: 0.8, changeFrequency: "weekly" },
  { path: "/admissions/phd", priority: 0.8, changeFrequency: "weekly" },
  { path: "/apply", priority: 0.6, changeFrequency: "monthly" },
  { path: "/news", priority: 0.8, changeFrequency: "weekly" },
  { path: "/events", priority: 0.8, changeFrequency: "weekly" },
  { path: "/research", priority: 0.7, changeFrequency: "monthly" },
  { path: "/campuses", priority: 0.7, changeFrequency: "monthly" },
  { path: "/student-life", priority: 0.6, changeFrequency: "monthly" },
  { path: "/library", priority: 0.6, changeFrequency: "monthly" },
  { path: "/administration", priority: 0.6, changeFrequency: "monthly" },
  { path: "/vice-chancellor", priority: 0.6, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  { path: "/careers", priority: 0.6, changeFrequency: "weekly" },
  { path: "/tenders", priority: 0.6, changeFrequency: "weekly" },
  { path: "/downloads", priority: 0.6, changeFrequency: "monthly" },
  { path: "/alumni", priority: 0.5, changeFrequency: "yearly" },
  { path: "/search", priority: 0.4, changeFrequency: "yearly" },
  { path: "/complaints", priority: 0.5, changeFrequency: "yearly" },
  { path: "/report-issue", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cookies-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];
  const seen = new Set<string>();

  const add = (path: string, priority: number, changeFrequency: ChangeFrequency) => {
    if (seen.has(path)) return;
    seen.add(path);
    entries.push({
      url: new URL(path, SITE_URL).toString(),
      lastModified,
      changeFrequency,
      priority,
    });
  };

  for (const route of staticRoutes) {
    add(route.path, route.priority, route.changeFrequency);
  }

  for (const department of DEPARTMENTS) {
    add(department.href, 0.7, "monthly");
  }

  for (const program of getAllPrograms()) {
    add(program.href, 0.6, "monthly");
  }

  for (const article of [NEWS.featured, ...NEWS.list]) {
    add(article.href, 0.5, "weekly");
  }

  for (const event of EVENTS.items) {
    add(event.href, 0.5, "monthly");
  }

  for (const topic of Object.keys(ADMISSION_GUIDES)) {
    add(`/admissions/guide/${topic}`, 0.5, "monthly");
  }

  for (const topic of Object.keys(ADMISSION_INFO)) {
    add(`/admissions/information/${topic}`, 0.5, "monthly");
  }

  for (const entry of ADMINISTRATION_ENTRIES) {
    add(`/administration/${entry.slug}`, 0.5, "monthly");
  }

  return entries;
}
