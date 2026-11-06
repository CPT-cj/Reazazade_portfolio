import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
export function PageHeader({ title, lead, eyebrow }) {
    return (<div className="border-b border-line">
      <Container className="py-14 sm:py-20">
        <SectionHeading as="h1" title={title} lead={lead} eyebrow={eyebrow} className="mb-0"/>
      </Container>
    </div>);
}
