import { getLocale } from "@/lib/page";
import { pageMetadata } from "@/lib/seo";
import { navigation } from "@/data/navigation";
import { ui } from "@/data/ui";
import { SkillsGrid } from "@/components/skills/SkillsGrid";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
const nav = navigation.find((n) => n.key === "skills");
export async function generateMetadata({ params }) {
    const locale = await getLocale(params);
    return pageMetadata({ locale, path: nav.path, title: nav.label[locale], description: nav.description[locale] });
}
export default async function SkillsPage({ params }) {
    const locale = await getLocale(params);
    return (<>
      <PageHeader title={nav.label[locale]} lead={ui.skillsLead[locale]}/>
      <Section>
        <SkillsGrid locale={locale}/>
      </Section>
    </>);
}
