import { education } from "@/data/education";
import { positions } from "@/data/experience";
import { ui } from "@/data/ui";
export function Timeline({ locale, compact = false }) {
    const entries = [
        {
            id: "education",
            title: education.degree[locale],
            org: education.university[locale],
            badge: ui.status[locale],
        },
        ...positions.map((p) => ({
            id: p.id,
            title: p.title[locale],
            org: p.organization?.[locale],
            text: compact ? undefined : p.description[locale],
        })),
    ];
    return (<ol className="border-s border-line">
      {entries.map((e) => (<li key={e.id} className="relative pb-10 ps-8 last:pb-0">
          <span className="absolute -start-[6px] top-2.5 size-[11px] rounded-full border-2 border-accent bg-bg" aria-hidden="true"/>
          <h3 className="display text-xl">{e.title}</h3>
          {e.org && <p className="mt-1 text-sm text-mute">{e.org}</p>}
          {e.badge && (<p className="mt-2 inline-block rounded-full border border-accent px-3 text-sm text-accent">{e.badge}</p>)}
          {e.text && <p className="mt-3 max-w-2xl text-mute">{e.text}</p>}
        </li>))}
    </ol>);
}
