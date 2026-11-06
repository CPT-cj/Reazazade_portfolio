import { getLocale } from "@/lib/page";
import { pageMetadata } from "@/lib/seo";
import { navigation } from "@/data/navigation";
import { ui } from "@/data/ui";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
const nav = navigation.find((n) => n.key === "projects");
export async function generateMetadata({ params }) {
    const locale = await getLocale(params);
    return pageMetadata({ locale, path: nav.path, title: nav.label[locale], description: nav.description[locale] });
}
export default async function ProjectsPage({ params }) {
    const locale = await getLocale(params);
    return (<>
      <PageHeader title={nav.label[locale]} lead={ui.featuredLead[locale]}/>
      <Section>
        <ProjectsExplorer locale={locale}/>
      </Section>
    </>);
}
