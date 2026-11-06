import Image from "next/image";
/** Real image when provided; otherwise an abstract grid placeholder (never a stock photo). */
export function ProjectVisual({ project, locale, index }) {
    if (project.image) {
        const { src, width, height, alt } = project.image;
        return (<Image src={src} width={width} height={height} alt={alt[locale]} loading="lazy" sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"/>);
    }
    return (<div aria-hidden="true" className="flex h-full w-full items-center justify-center bg-surface bg-[linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] bg-[size:24px_24px] transition-transform duration-500 group-hover:scale-105">
      <span dir="ltr" className="display text-5xl text-accent opacity-70">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>);
}
