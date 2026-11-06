import { education } from "@/data/education";
import { ui } from "@/data/ui";
import { TagList } from "@/components/ui/TagList";
export function EducationCard({ locale }) {
    return (<article className="rounded-md border border-line bg-surface p-6 sm:p-8">
      <p className="inline-block rounded-full border border-accent px-3 text-sm text-accent">{ui.status[locale]}</p>
      <h3 className="display mt-4 text-2xl">{education.degree[locale]}</h3>
      <p className="mt-1 text-mute">{education.university[locale]}</p>
      <h4 className="mt-8 text-sm font-medium">{ui.academicInterests[locale]}</h4>
      <TagList items={education.interests.map((i) => i[locale])} className="mt-3"/>
      <p className="mt-4 text-sm text-mute">{ui.academicNote[locale]}</p>
    </article>);
}
