import { cn } from "@/lib/utils";
export function TagList({ items, className }) {
    return (<ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (<li key={item} className="rounded-full border border-line px-3 py-1 text-sm text-mute">
          {item}
        </li>))}
    </ul>);
}
