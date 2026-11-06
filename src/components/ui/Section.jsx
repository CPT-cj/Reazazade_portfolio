import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
export function Section({ id, children }) {
    return (<section id={id} className="border-b border-line py-16 sm:py-24">
      <Container>
        <Reveal>{children}</Reveal>
      </Container>
    </section>);
}
