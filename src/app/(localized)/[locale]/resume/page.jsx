import { Download } from "lucide-react";
import { locales } from "@/lib/i18n";
import { getLocale } from "@/lib/page";
import { pageMetadata } from "@/lib/seo";
import { resumeNav } from "@/data/navigation";
import { site } from "@/data/site";
import { ui } from "@/data/ui";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
export async function generateMetadata({ params }) {
    const locale = await getLocale(params);
    return pageMetadata({
        locale,
        path: resumeNav.path,
        title: resumeNav.label[locale],
        description: resumeNav.description[locale],
    });
}
const labels = { fa: "resumeFa", en: "resumeEn" };
export default async function ResumePage({ params }) {
    const locale = await getLocale(params);
    return (<>
      <PageHeader title={ui.resume[locale]} lead={ui.resumeLead[locale]}/>
      <Section>
        <ul className="grid max-w-2xl gap-5 sm:grid-cols-2">
          {locales.map((code) => {
            const href = site.resume[code];
            return (<li key={code} className="flex flex-col gap-4 rounded-md border border-line bg-surface p-6">
                <h2 className="display text-xl">{ui[labels[code]][locale]}</h2>
                {href && !href.startsWith("#") ? (<a href={href} download className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-accent-ink hover:brightness-110">
                    <Download className="size-4" aria-hidden="true"/>
                    {ui.download[locale]}
                  </a>) : (<span aria-disabled="true" className="inline-flex min-h-11 items-center justify-center rounded-md border border-dashed border-line px-5 text-sm text-mute">
                    {ui.resumeSoon[locale]}
                  </span>)}
              </li>);
        })}
        </ul>
      </Section>
    </>);
}
