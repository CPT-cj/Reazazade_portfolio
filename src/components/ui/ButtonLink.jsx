import Link from "next/link";
import { cn } from "@/lib/utils";
const variants = {
    primary: "bg-accent text-accent-ink hover:brightness-110",
    secondary: "border border-line hover:border-accent",
    ghost: "text-mute hover:text-fg px-2",
};
export function ButtonLink({ href, variant = "primary", external, className, children }) {
    const classes = cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent", variants[variant], className);
    if (external) {
        return (<a href={href} className={classes}>
        {children}
      </a>);
    }
    return (<Link href={href} className={classes}>
      {children}
    </Link>);
}
