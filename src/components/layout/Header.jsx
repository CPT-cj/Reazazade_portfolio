import Link from "next/link";
import { navigation, resumeNav } from "@/data/navigation";
import { site } from "@/data/site";
import { ui } from "@/data/ui";
import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { MobileNav } from "@/components/layout/MobileNav";
import { NavLinks } from "@/components/layout/NavLinks";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
export function Header({ locale }) {
    const items = navigation.map((n) => ({
        href: `/${locale}${n.path}`,
        label: n.label[locale],
        isHome: n.path === "",
    }));
    const resume = { href: `/${locale}${resumeNav.path}`, label: ui.resume[locale] };
    return (<header className="sticky top-0 z-40 border-b border-line bg-bg">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-3 px-5 sm:px-8">
        <Link href={`/${locale}`} className="me-auto flex items-center gap-3 font-bold">
          <span dir="ltr" className="inline-flex size-9 items-center justify-center rounded-md border border-line text-sm text-accent">
            {site.monogram.en}
          </span>
          <span className="hidden sm:inline">{site.name[locale]}</span>
        </Link>
        <NavLinks items={items} label={ui.mainNav[locale]}/>
        <Link href={resume.href} className="hidden min-h-11 items-center rounded-md bg-accent px-4 text-sm font-medium text-accent-ink hover:brightness-110 sm:inline-flex">
          {resume.label}
        </Link>
        <LanguageToggle locale={locale}/>
        <ThemeToggle label={ui.themeToggle[locale]}/>
        <MobileNav items={items} resume={resume} openLabel={ui.menuOpen[locale]} closeLabel={ui.menuClose[locale]} navLabel={ui.mainNav[locale]}/>
      </div>
    </header>);
}
