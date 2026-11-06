import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projectCategories, projects } from "@/data/projects";
import { ui } from "@/data/ui";
import { Container } from "@/components/ui/Container";
import { TagList } from "@/components/ui/TagList";
import { ProjectCard } from "@/components/projects/ProjectCard";
function Block({ title, children }) {
    return (<section className="border-t border-line py-8">
      <h2 className="display text-2xl">{title}</h2>
      <div className="mt-4 max-w-2xl space-y-3 text-mute">{children}</div>
    </section>);
}
export function ProjectDetails({ project, locale }) {
    const related = [
        ...projects.filter((p) => p.slug !== project.slug && p.category === project.category),
        ...projects.filter((p) => p.slug !== project.slug && p.category !== project.category),
    ].slice(0, 2);
    return (<Container className="py-12 sm:py-16">
      <Link href={`/${locale}/projects`} className="inline-flex min-h-11 items-center gap-2 text-sm text-mute hover:text-fg">
        <ArrowLeft className="size-4 rtl:rotate-180" aria-hidden="true"/>
        {ui.backToProjects[locale]}
      </Link>

      <header className="mb-10 mt-6 max-w-3xl">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="font-medium text-accent">{projectCategories[project.category][locale]}</span>
          <span className="rounded-full border border-line px-3 text-mute">
            {project.kind === "activity" ? ui.kindActivity[locale] : ui.kindProject[locale]}
          </span>
        </div>
        <h1 className="display mt-4 text-3xl sm:text-5xl">{project.title[locale]}</h1>
      </header>

      <div className="max-w-3xl">
        <Block title={ui.overview[locale]}>
          <p>{project.summary[locale]}</p>
        </Block>
        <Block title={ui.objective[locale]}>
          <p>{project.objective[locale]}</p>
        </Block>
        <Block title={ui.role[locale]}>
          <p>{project.role[locale]}</p>
        </Block>
        {project.process && project.process.length > 0 && (<Block title={ui.process[locale]}>
            {project.process.map((step) => (<p key={step.en}>{step[locale]}</p>))}
          </Block>)}
        {project.tools && project.tools.length > 0 && (<Block title={ui.tools[locale]}>
            <TagList items={project.tools.map((t) => t[locale])}/>
          </Block>)}
        {project.outcomes && project.outcomes.length > 0 && (<Block title={ui.outcomes[locale]}>
            <ul className="list-disc space-y-2 ps-5">
              {project.outcomes.map((o) => (<li key={o.en}>{o[locale]}</li>))}
            </ul>
          </Block>)}
        {project.gallery && project.gallery.length > 0 && (<Block title={ui.gallery[locale]}>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.gallery.map((img) => (<Image key={img.src} src={img.src} width={img.width} height={img.height} alt={img.alt[locale]} loading="lazy" sizes="(min-width: 640px) 50vw, 100vw" className="h-auto w-full rounded-md border border-line"/>))}
            </div>
          </Block>)}
        <p className="border-t border-line pt-6 text-sm text-mute">{ui.moreDetails[locale]}</p>
      </div>

      <section className="mt-16">
        <h2 className="display mb-6 text-2xl">{ui.related[locale]}</h2>
        <ul className="grid gap-6 md:grid-cols-2">
          {related.map((p) => (<li key={p.slug}>
              <ProjectCard project={p} locale={locale}/>
            </li>))}
        </ul>
      </section>
    </Container>);
}
