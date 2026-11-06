import { getLocale } from "@/lib/page";
import { pageMetadata } from "@/lib/seo";
import { about } from "@/data/profile";
import { navigation } from "@/data/navigation";
import { ui } from "@/data/ui";
import { EducationCard } from "@/components/experience/EducationCard";
import { VisionSection } from "@/components/sections/VisionSection";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
const nav = navigation.find((n) => n.key === "about");
export async function generateMetadata({ params }) {
    const locale = await getLocale(params);
    return pageMetadata({ locale, path: nav.path, title: nav.label[locale], description: nav.description[locale] });
}
export default async function AboutPage({ params }) {
    const locale = await getLocale(params);
    return (<>
      <PageHeader title={nav.label[locale]}/>
      <Section>
        <div className="max-w-2xl space-y-5 text-lg">
          {about.map((p, i) => (<p key={p.en} className={i === 0 ? "display text-2xl" : "text-mute"}>
              {p[locale]}
            </p>))}
        </div>
      </Section>
      <Section id="education">
        <SectionHeading title={ui.education[locale]}/>
        <EducationCard locale={locale}/>
      </Section>
      <VisionSection locale={locale}/>
    </>);
}
