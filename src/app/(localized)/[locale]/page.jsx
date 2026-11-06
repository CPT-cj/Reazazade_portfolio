import { getLocale } from "@/lib/page";
import { pageMetadata } from "@/lib/seo";
import { HomeContent } from "@/components/home/HomeContent";

export async function generateMetadata({ params }) {
  return pageMetadata({ locale: await getLocale(params) });
}

export default async function HomePage({ params }) {
  const locale = await getLocale(params);
  return <HomeContent locale={locale} />;
}
