import { localeMeta, locales } from "@/lib/i18n";
import { site } from "@/data/site";
/** Canonical/alternate URLs are only emitted when NEXT_PUBLIC_SITE_URL is configured. */
export function pageMetadata({ locale, path = "", title, description }) {
    const desc = description ?? site.description[locale];
    const url = site.url ? `${site.url}/${locale}${path}` : undefined;
    return {
        ...(title ? { title } : {}),
        description: desc,
        alternates: site.url
            ? {
                canonical: url,
                languages: Object.fromEntries(locales.map((x) => [x, `${site.url}/${x}${path}`])),
            }
            : undefined,
        openGraph: {
            title: title ?? site.name[locale],
            description: desc,
            type: "website",
            locale: localeMeta[locale].og,
            siteName: site.name[locale],
            url,
        },
        twitter: { card: "summary", title: title ?? site.name[locale], description: desc },
    };
}
