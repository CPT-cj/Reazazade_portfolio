import { getLocale } from "@/lib/page";
import { pageMetadata } from "@/lib/seo";
import { navigation } from "@/data/navigation";
import { TeachingBody } from "@/components/teaching/TeachingBody";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
const nav = navigation.find((n) => n.key === "teaching");
export async function generateMetadata({ params }) {
    const locale = await getLocale(params);
    return pageMetadata({ locale, path: nav.path, title: nav.label[locale], description: nav.description[locale] });
}
export default async function TeachingPage({ params }) {
    const locale = await getLocale(params);
    return (<>
      <PageHeader title={nav.label[locale]}/>
      <Section>
        <TeachingBody locale={locale}/>
      </Section>
    </>);
}
