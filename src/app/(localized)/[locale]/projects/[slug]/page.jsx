import { notFound } from "next/navigation";
import { getLocale } from "@/lib/page";
import { pageMetadata } from "@/lib/seo";
import { getProject, projects } from "@/data/projects";
import { ProjectDetails } from "@/components/projects/ProjectDetails";
export const dynamicParams = false;
export function generateStaticParams() {
    // The parent [locale] layout generates the locale segment; this segment adds only slugs.
    return projects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({ params }) {
    const locale = await getLocale(params);
    const project = getProject((await params).slug);
    if (!project)
        notFound();
    return pageMetadata({
        locale,
        path: `/projects/${project.slug}`,
        title: project.title[locale],
        description: project.summary[locale],
    });
}
export default async function ProjectPage({ params }) {
    const locale = await getLocale(params);
    const project = getProject((await params).slug);
    if (!project)
        notFound();
    return <ProjectDetails project={project} locale={locale}/>;
}
