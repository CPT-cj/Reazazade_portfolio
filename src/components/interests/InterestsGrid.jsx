import { interests } from "@/data/interests";
export function InterestsGrid({ locale }) {
    return (<div className="grid gap-5 sm:grid-cols-2">
      {interests.map((item) => (<article key={item.id} className="rounded-md border border-line bg-surface p-6">
          <h3 className="display text-xl">{item.title[locale]}</h3>
          <p className="mt-3 text-mute">{item.description[locale]}</p>
        </article>))}
    </div>);
}
