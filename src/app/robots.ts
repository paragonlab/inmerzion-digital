import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/** AI crawlers + major search bots — all explicitly allowed. */
const aiAndSearchAgents = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "Google-Extended",
  "Googlebot",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "Applebot-Extended",
  "Bingbot",
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      ...aiAndSearchAgents.map((userAgent) => ({
        userAgent,
        allow: "/" as const,
      })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
