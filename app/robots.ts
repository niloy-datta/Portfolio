import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/.well-known/"],
    },
    sitemap: "https://niloychandra.dev/sitemap.xml",
    host: "https://niloychandra.dev",
  };
}
