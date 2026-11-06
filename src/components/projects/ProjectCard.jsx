import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projectCategories, projects } from "@/data/projects";
import { ui } from "@/data/ui";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
export function ProjectCard({ project, locale }) {
    const index = projects.findIndex((p) => p.slug === project.slug);
    return (<Link href={`/${locale}/projects/${project.slug}`} className="group flex h-full flex-col overflow-hidden rounded-md border border-line bg-surface shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent hover:shadow-[0_16px_40px_-24px_rgba(79,209,197,0.32)] focus-visible:-translate-y-1 focus-visible:border-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent active:scale-[0.99]">
      <div className="aspect-[16/9] overflow-hidden border-b border-line">
        <ProjectVisual project={project} locale={locale} index={index}/>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
          <span className="font-medium text-accent">{projectCategories[project.category][locale]}</span>
          {project.kind === "activity" && (<span className="rounded-full border border-line px-2 text-mute">{ui.kindActivity[locale]}</span>)}
        </div>
        <h3 className="display text-xl transition-colors duration-200 group-hover:text-accent">{project.title[locale]}</h3>
        <p className="line-clamp-4 text-sm text-mute">{project.summary[locale]}</p>
        <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm text-accent">
          {ui.viewDetails[locale]}
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 rtl:-scale-x-100" aria-hidden="true"/>
        </span>
      </div>
    </Link>);
}
