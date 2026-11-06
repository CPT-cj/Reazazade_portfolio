import { home } from "@/data/profile";
import { ui } from "@/data/ui";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
export function AboutPreview({ locale }) {
    return (<Section id="about">
      <SectionHeading title={ui.aboutMe[locale]}/>
      <div className="max-w-2xl space-y-4 text-mute">
        {home.intro.slice(1).map((p) => (<p key={p.en}>{p[locale]}</p>))}
      </div>
      <ButtonLink href={`/${locale}/about`} variant="secondary" className="mt-8">
        {ui.readMore[locale]}
      </ButtonLink>
    </Section>);
}
