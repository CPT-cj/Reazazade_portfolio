"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActivePath } from "@/lib/utils";
export function NavLinks({ items, label }) {
    const pathname = usePathname();
    return (<nav aria-label={label} className="hidden xl:block">
      <ul className="flex items-center gap-6 text-sm">
        {items.map((item) => {
            const active = isActivePath(pathname, item.href, item.isHome);
            return (<li key={item.href}>
              <Link href={item.href} aria-current={active ? "page" : undefined} className={`relative border-b py-1 transition-all duration-200 after:absolute after:inset-x-0 after:-bottom-px after:h-px after:origin-center after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${active ? "border-accent text-fg after:scale-x-100" : "border-transparent text-mute hover:text-fg"}`}>
                {item.label}
              </Link>
            </li>);
        })}
      </ul>
    </nav>);
}
