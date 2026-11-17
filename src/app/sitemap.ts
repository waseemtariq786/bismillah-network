import type { MetadataRoute } from "next";

const baseUrl = "https://bismillah.bnetwork.workers.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/projects",
    "/contact",
    "/network",
    "/join",
    "/app",
    "/app/apply",
    "/rules",
    "/roles",
    "/participation",
    "/opportunities",
    "/emi-services-786",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    changeFrequency: "monthly",
    priority: page === "" ? 1 : 0.7,
  }));
}
