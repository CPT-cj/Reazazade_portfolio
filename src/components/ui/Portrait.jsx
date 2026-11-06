import Image from "next/image";
import { site } from "@/data/site";
import { ui } from "@/data/ui";
import { WellLog } from "@/components/ui/WellLog";
/** Shows the real portrait when `site.portrait.src` is set, otherwise a neutral placeholder. */
export function Portrait({ locale }) {
    const { src, width, height, alt } = site.portrait;
    if (src) {
        return (<Image src={src} width={width} height={height} alt={alt[locale]} priority sizes="(min-width: 1024px) 400px, 80vw" className="mx-auto h-auto w-full max-w-sm rounded-md border border-line object-cover"/>);
    }
    return (<figure className="mx-auto w-full max-w-sm">
      <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-md border border-line bg-surface text-mute">
        <WellLog className="absolute inset-0 h-full w-full p-6"/>
        <span dir="ltr" className="display relative text-6xl text-fg opacity-90">
          {site.monogram.en}
        </span>
      </div>
      <figcaption className="mt-2 text-center text-xs text-mute">{ui.portraitPlaceholder[locale]}</figcaption>
    </figure>);
}
