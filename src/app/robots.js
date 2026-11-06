import { site } from "@/data/site";

// Generate this Metadata Route at build time for static export.
export const dynamic = "force-static";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(site.url ? { sitemap: `${site.url}/sitemap.xml` } : {}),
  };
}
