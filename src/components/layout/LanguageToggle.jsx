"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeMeta, locales, otherLocale } from "@/lib/i18n";
import { ui } from "@/data/ui";
const localePrefix = new RegExp(`^/(${locales.join("|")})(?=/|$)`);
export function LanguageToggle({ locale }) {
    const pathname = usePathname();
    const next = otherLocale(locale);
    const href = pathname === "/" ? `/${next}` : pathname.replace(localePrefix, `/${next}`);
    return (<Link href={href} hrefLang={next} lang={next} aria-label={ui.langSwitch[locale]} className="inline-flex min-h-11 items-center rounded-md border border-line px-3 text-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
      {localeMeta[next].name}
    </Link>);
}
