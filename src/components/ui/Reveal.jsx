"use client";
import { useEffect, useRef } from "react";
/** Reveals its children once when scrolled into view. CSS handles reduced motion. */
export function Reveal({ children, className }) {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el)
            return;
        if (!("IntersectionObserver" in window)) {
            el.classList.add("in");
            return;
        }
        const io = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                el.classList.add("in");
                io.disconnect();
            }
        }, { rootMargin: "0px 0px -8% 0px" });
        io.observe(el);
        return () => io.disconnect();
    }, []);
    return (<div ref={ref} className={`reveal${className ? ` ${className}` : ""}`}>
      {children}
    </div>);
}
