import { projects } from "@/data/projects";
import { ui } from "@/data/ui";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Hero } from "@/components/sections/Hero";
import { VisionSection } from "@/components/sections/VisionSection";
import { Timeline } from "@/components/experience/Timeline";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SkillsGrid } from "@/components/skills/SkillsGrid";
import { TeachingBody } from "@/components/teaching/TeachingBody";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Shared homepage content used by both / and /[locale]. */
export function HomeContent({ locale }) {
  return (
    <>
      <Hero locale={locale} />
      <AboutPreview locale={locale} />

      <Section id="skills">
        <SectionHeading title={ui.skills[locale]} lead={ui.skillsLead[locale]} />
        <SkillsGrid locale={locale} compact />
        <ButtonLink href={`/${locale}/skills`} variant="secondary" className="mt-8">
          {ui.allSkills[locale]}
        </ButtonLink>
      </Section>

      <Section id="projects">
        <SectionHeading title={ui.featuredProjects[locale]} lead={ui.featuredLead[locale]} />
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} locale={locale} />
            </li>
          ))}
        </ul>
        <ButtonLink href={`/${locale}/projects`} variant="secondary" className="mt-8">
          {ui.allProjects[locale]}
        </ButtonLink>
      </Section>

      <Section id="experience">
        <SectionHeading title={ui.experience[locale]} lead={ui.experienceLead[locale]} />
        <Timeline locale={locale} compact />
        <ButtonLink href={`/${locale}/experience`} variant="secondary" className="mt-8">
          {ui.allExperience[locale]}
        </ButtonLink>
      </Section>

      <Section id="teaching">
        <SectionHeading title={ui.teaching[locale]} />
        <TeachingBody locale={locale} compact />
        <ButtonLink href={`/${locale}/teaching`} variant="secondary" className="mt-8">
          {ui.readMore[locale]}
        </ButtonLink>
      </Section>

      <VisionSection locale={locale} />
      <ContactCTA locale={locale} />
    </>
  );
}
