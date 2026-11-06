import { getLocale } from "@/lib/page";
import { pageMetadata } from "@/lib/seo";
import { navigation } from "@/data/navigation";
import { ui } from "@/data/ui";
import { Timeline } from "@/components/experience/Timeline";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
const nav = navigation.find((n) => n.key === "experience");
export async function generateMetadata({ params }) {
    const locale = await getLocale(params);
    return pageMetadata({ locale, path: nav.path, title: nav.label[locale], description: nav.description[locale] });
}
export default async function ExperiencePage({ params }) {
    const locale = await getLocale(params);
    return (<>
      <PageHeader title={nav.label[locale]} lead={ui.experienceLead[locale]}/>
      <Section>
        <Timeline locale={locale}/>
      </Section>
    </>);
}
