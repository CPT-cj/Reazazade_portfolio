"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { isActivePath } from "@/lib/utils";
export function MobileNav({ items, resume, openLabel, closeLabel, navLabel }) {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const rootRef = useRef(null);
    useEffect(() => {
        if (!open) return;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const onKey = (event) => { if (event.key === "Escape") setOpen(false); };
        const onPointerDown = (event) => {
            if (rootRef.current && !rootRef.current.contains(event.target)) setOpen(false);
        };
        document.addEventListener("keydown", onKey);
        document.addEventListener("pointerdown", onPointerDown);
        return () => {
            document.removeEventListener("keydown", onKey);
            document.removeEventListener("pointerdown", onPointerDown);
            document.body.style.overflow = previousOverflow;
        };
    }, [open]);
    const close = () => setOpen(false);
    return (<div ref={rootRef} className="relative xl:hidden">
      <button type="button" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? closeLabel : openLabel} onClick={() => setOpen((v) => !v)} className="inline-flex size-11 items-center justify-center rounded-md border border-line transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
        {open ? <X className="size-5" aria-hidden="true"/> : <Menu className="size-5" aria-hidden="true"/>}
      </button>
      <nav id="mobile-nav" aria-label={navLabel} hidden={!open} className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-line bg-bg px-5 pb-6 pt-2 sm:px-8">
        <ul>
          {items.map((item) => {
            const active = isActivePath(pathname, item.href, item.isHome);
            return (<li key={item.href} className="border-b border-line">
                <Link href={item.href} onClick={close} aria-current={active ? "page" : undefined} className={`block py-3 ${active ? "text-accent" : "text-fg"}`}>
                  {item.label}
                </Link>
              </li>);
        })}
        </ul>
        <Link href={resume.href} onClick={close} className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-accent px-5 text-sm font-medium text-accent-ink">
          {resume.label}
        </Link>
      </nav>
    </div>);
}
