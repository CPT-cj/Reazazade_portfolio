import { skills } from "@/data/skills";
import { TagList } from "@/components/ui/TagList";
export function SkillsGrid({ locale, compact = false }) {
    return (<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {skills.map((category, index) => {
            const shown = compact ? category.items.slice(0, 3) : category.items;
            return (<article key={category.id} className="rounded-md border border-line bg-surface p-6">
            <p dir="ltr" className="text-sm text-accent">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="display mt-2 text-xl">{category.title[locale]}</h3>
            <TagList items={shown.map((i) => i[locale])} className="mt-4"/>
          </article>);
        })}
    </div>);
}
