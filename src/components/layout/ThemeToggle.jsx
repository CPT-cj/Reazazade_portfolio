"use client";
import { Moon, Sun } from "lucide-react";
export function ThemeToggle({ label }) {
    function toggle() {
        const root = document.documentElement;
        const next = root.dataset.theme === "light" ? "dark" : "light";
        root.dataset.theme = next;
        try {
            localStorage.setItem("theme", next);
        }
        catch {
            // Storage unavailable: the theme still changes for this visit.
        }
    }
    return (<button type="button" onClick={toggle} aria-label={label} title={label} className="inline-flex size-11 items-center justify-center rounded-md border border-line transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
      <Sun className="hidden size-5 dark:block" aria-hidden="true"/>
      <Moon className="size-5 dark:hidden" aria-hidden="true"/>
    </button>);
}
