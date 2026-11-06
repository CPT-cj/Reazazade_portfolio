import { locales } from "@/lib/i18n";
import { navigation, resumeNav } from "@/data/navigation";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
// Generate this Metadata Route at build time for static export.
export const dynamic = "force-static";

// Only generated when NEXT_PUBLIC_SITE_URL is configured; no domain is invented.
export default function sitemap() {
    if (!site.url)
        return [];
    const paths = [
        ...navigation.map((n) => n.path),
        resumeNav.path,
        ...projects.map((p) => `/projects/${p.slug}`),
    ];
    return locales.flatMap((locale) => paths.map((path) => ({ url: `${site.url}/${locale}${path}` })));
}
