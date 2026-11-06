import Link from "next/link";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";
import { ui } from "@/data/ui";
import { Container } from "@/components/ui/Container";
export function Footer({ locale }) {
    const socials = site.socials.filter((s) => s.url);
    return (<footer className="py-12 text-sm text-mute">
      <Container className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="display text-lg text-fg">{site.name[locale]}</p>
          <p className="mt-2 max-w-xs">{site.tagline[locale]}</p>
        </div>
        <nav aria-label={ui.mainNav[locale]}>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-1">
            {navigation.map((n) => (<li key={n.key}>
                <Link href={`/${locale}${n.path}`} className="inline-block py-1 hover:text-fg">
                  {n.label[locale]}
                </Link>
              </li>))}
          </ul>
        </nav>
        <ul className="space-y-1">
          <li>
            <a href={`mailto:${site.contact.email}`} dir="ltr" className="inline-block py-1 hover:text-fg">
              {site.contact.email}
            </a>
          </li>
          <li>{site.location[locale]}</li>
          {socials.map((s) => (<li key={s.id}>
              {s.url && !s.url.includes("-placeholder") ? (
                <a href={s.url} target="_blank" rel="noreferrer" aria-label={s.label} className="inline-block py-1 hover:text-fg">
                  {s.label}
                </a>
              ) : (
                <span aria-label={`${s.label} (not available yet)`} className="inline-block cursor-not-allowed py-1 opacity-50">
                  {s.label} <span className="text-xs">(به‌زودی)</span>
                </span>
              )}
            </li>))}
        </ul>
      </Container>
      <Container className="mt-10 border-t border-line pt-6">
        <p>
          © {new Date().getFullYear()} {site.name[locale]}. {ui.rights[locale]}
        </p>
      </Container>
    </footer>);
}
