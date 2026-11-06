import { getLocale } from "@/lib/page";
import { pageMetadata } from "@/lib/seo";
import { navigation } from "@/data/navigation";
import { ui } from "@/data/ui";
import { InterestsGrid } from "@/components/interests/InterestsGrid";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
const nav = navigation.find((n) => n.key === "interests");
export async function generateMetadata({ params }) {
    const locale = await getLocale(params);
    return pageMetadata({ locale, path: nav.path, title: ui.interests[locale], description: nav.description[locale] });
}
export default async function InterestsPage({ params }) {
    const locale = await getLocale(params);
    return (<>
      <PageHeader title={ui.interests[locale]} lead={ui.interestsLead[locale]}/>
      <Section>
        <InterestsGrid locale={locale}/>
      </Section>
    </>);
}
