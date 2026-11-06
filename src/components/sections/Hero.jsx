import { ArrowUpRight } from "lucide-react";
import { otherLocale } from "@/lib/i18n";
import { home } from "@/data/profile";
import { resumeNav } from "@/data/navigation";
import { site } from "@/data/site";
import { ui } from "@/data/ui";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Portrait } from "@/components/ui/Portrait";
import { TagList } from "@/components/ui/TagList";
export function Hero({ locale }) {
    const other = otherLocale(locale);
    const delay = (ms) => ({ animationDelay: `${ms}ms` });
    return (<section className="border-b border-line">
      <Container className="grid items-center gap-12 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24">
        <div>
          <p className="animate-rise text-sm font-medium text-accent">{site.pillars[locale]}</p>
          <h1 className="display animate-rise mt-5 text-4xl sm:text-5xl lg:text-6xl" style={delay(80)}>
            {site.name[locale]}
          </h1>
          <p lang={other} className="animate-rise mt-2 text-lg text-mute" style={delay(120)}>
            {site.name[other]}
          </p>
          <p className="animate-rise mt-6 font-medium" style={delay(160)}>
            {site.title[locale]}
          </p>
          <p className="display animate-rise mt-6 max-w-xl text-xl sm:text-2xl" style={delay(220)}>
            {home.headline[locale]}
          </p>
          <p className="animate-rise mt-4 max-w-xl text-mute" style={delay(280)}>
            {home.intro[0][locale]}
          </p>
          <TagList items={home.interests.map((i) => i[locale])} className="animate-rise mt-6"/>
          <div className="animate-rise mt-8 flex flex-wrap gap-3" style={delay(360)}>
            <ButtonLink href={`/${locale}/projects`}>
              {ui.viewProjects[locale]}
              <ArrowUpRight className="size-4 rtl:-scale-x-100" aria-hidden="true"/>
            </ButtonLink>
            <ButtonLink href={`/${locale}${resumeNav.path}`} variant="secondary">
              {ui.resume[locale]}
            </ButtonLink>
          </div>
          <div className="animate-rise mt-3 flex flex-wrap gap-2 text-sm" style={delay(420)}>
            <ButtonLink href={`/${locale}/about`} variant="ghost">
              {ui.aboutMe[locale]}
            </ButtonLink>
            <ButtonLink href={`/${locale}/contact`} variant="ghost">
              {ui.contactMe[locale]}
            </ButtonLink>
          </div>
        </div>
        <div className="animate-rise" style={delay(200)}>
          <Portrait locale={locale}/>
        </div>
      </Container>
    </section>);
}
