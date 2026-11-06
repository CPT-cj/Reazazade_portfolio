import { teaching } from "@/data/teaching";
import { ui } from "@/data/ui";
import { TagList } from "@/components/ui/TagList";
export function TeachingBody({ locale, compact = false }) {
    return (<div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">
      <div className="rounded-md border border-line bg-surface p-8">
        <p className="display text-6xl text-accent">
          <bdi dir="ltr">{teaching.count[locale]}</bdi>
        </p>
        <p className="mt-2 text-mute">{teaching.countLabel[locale]}</p>
      </div>
      <div>
        <h3 className="display text-2xl">{teaching.title[locale]}</h3>
        <div className="mt-4 max-w-2xl space-y-3 text-mute">
          {(compact ? teaching.description.slice(0, 1) : teaching.description).map((p) => (<p key={p.en}>{p[locale]}</p>))}
        </div>
        {!compact && (<>
            <h4 className="mt-8 text-sm font-medium">{ui.teachingAreas[locale]}</h4>
            <TagList items={teaching.areas.map((a) => a[locale])} className="mt-3"/>
          </>)}
      </div>
    </div>);
}
