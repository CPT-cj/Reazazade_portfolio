import { Mail, MapPin } from "lucide-react";
import { getLocale } from "@/lib/page";
import { pageMetadata } from "@/lib/seo";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";
import { ui } from "@/data/ui";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
const nav = navigation.find((n) => n.key === "contact");
export async function generateMetadata({ params }) {
    const locale = await getLocale(params);
    return pageMetadata({ locale, path: nav.path, title: nav.label[locale], description: nav.description[locale] });
}
export default async function ContactPage({ params }) {
    const locale = await getLocale(params);
    const socials = site.socials.filter((s) => s.url);
    return (<>
      <PageHeader title={ui.contact[locale]} lead={ui.contactLead[locale]}/>
      <Section>
        <dl className="grid max-w-2xl gap-5">
          <div className="flex items-start gap-4 rounded-md border border-line bg-surface p-6">
            <Mail className="mt-1 size-5 text-accent" aria-hidden="true"/>
            <div>
              <dt className="text-sm text-mute">{ui.email[locale]}</dt>
              <dd>
                <a href={`mailto:${site.contact.email}`} dir="ltr" className="inline-block py-1 text-lg hover:text-accent">
                  {site.contact.email}
                </a>
              </dd>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-md border border-line bg-surface p-6">
            <MapPin className="mt-1 size-5 text-accent" aria-hidden="true"/>
            <div>
              <dt className="text-sm text-mute">{ui.location[locale]}</dt>
              <dd className="text-lg">{site.location[locale]}</dd>
            </div>
          </div>
          {socials.map((s) => (<div key={s.id} className="rounded-md border border-line bg-surface p-6">
              <dt className="text-sm text-mute">{s.label}</dt>
              <dd>
                <a href={s.url ?? "#"} target="_blank" rel="noopener noreferrer" dir="ltr" className="inline-block py-1 text-lg hover:text-accent">
                  {s.url}
                </a>
              </dd>
            </div>))}
        </dl>
      </Section>
    </>);
}
