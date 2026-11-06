import { Mail } from "lucide-react";
import { site } from "@/data/site";
import { ui } from "@/data/ui";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
export function ContactCTA({ locale }) {
    return (<Section id="contact">
      <SectionHeading title={ui.contact[locale]} lead={ui.contactLead[locale]}/>
      <div className="flex flex-wrap gap-3">
        <ButtonLink href={`mailto:${site.contact.email}`} external>
          <Mail className="size-4" aria-hidden="true"/>
          {ui.email[locale]}
        </ButtonLink>
        <ButtonLink href={`/${locale}/contact`} variant="secondary">
          {ui.contactMe[locale]}
        </ButtonLink>
      </div>
    </Section>);
}
