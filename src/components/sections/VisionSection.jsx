import { vision } from "@/data/profile";
import { ui } from "@/data/ui";
import { Section } from "@/components/ui/Section";
export function VisionSection({ locale }) {
    return (<Section id="vision">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <h2 className="display text-3xl sm:text-4xl">{ui.vision[locale]}</h2>
        <div className="space-y-5 border-s-2 border-accent ps-6 text-lg">
          <p className="display text-xl sm:text-2xl">{vision[0][locale]}</p>
          {vision.slice(1).map((p) => (<p key={p.en} className="text-mute">
              {p[locale]}
            </p>))}
        </div>
      </div>
    </Section>);
}
