import { cn } from "@/lib/utils";
export function SectionHeading({ title, eyebrow, lead, as: Tag = "h2", className }) {
    return (<div className={cn("mb-10 max-w-2xl", className)}>
      {eyebrow && <p className="mb-3 text-sm font-medium text-accent">{eyebrow}</p>}
      <Tag className="display text-3xl sm:text-4xl">{title}</Tag>
      {lead && <p className="mt-4 text-mute">{lead}</p>}
    </div>);
}
