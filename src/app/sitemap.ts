import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = ["", "/servicios", "/influencers", "/lala", "/contacto"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/lala" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/lala" ? 0.9 : 0.7,
  }));
}
