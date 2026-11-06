"use client";
import { useState } from "react";
import { projectCategories, projects } from "@/data/projects";
import { ui } from "@/data/ui";
import { ProjectCard } from "@/components/projects/ProjectCard";
export function ProjectsExplorer({ locale }) {
    const [filter, setFilter] = useState("all");
    const used = Array.from(new Set(projects.map((p) => p.category)));
    const visible = filter === "all" ? projects : projects.filter((p) => p.category === filter);
    const button = (id, label) => (<button key={id} type="button" aria-pressed={filter === id} onClick={() => setFilter(id)} className={`min-h-11 rounded-full border px-4 text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${filter === id ? "border-accent bg-accent text-accent-ink" : "border-line text-mute hover:border-accent hover:text-fg"}`}>
      {label}
    </button>);
    return (<>
      <div role="group" aria-label={ui.filterLabel[locale]} className="mb-8 flex flex-wrap gap-2">
        {button("all", ui.filterAll[locale])}
        {used.map((id) => button(id, projectCategories[id][locale]))}
      </div>
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (<li key={project.slug}>
            <ProjectCard project={project} locale={locale}/>
          </li>))}
      </ul>
    </>);
}
