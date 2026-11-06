import { pageMetadata } from "@/lib/seo";
import { ui } from "@/data/ui";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PortfolioExperience } from "@/components/layout/PortfolioExperience";
import { HomeContent } from "@/components/home/HomeContent";

const locale = "fa";

export function generateMetadata() {
  return pageMetadata({ locale });
}

/**
 * The root URL is a real landing page, not a redirect.
 * The portfolio UI is revealed in-place after the visitor's interaction.
 */
export default function IndexPage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
      >
        {ui.skipToContent[locale]}
      </a>
      <PortfolioExperience
        locale={locale}
        header={<Header locale={locale} />}
        footer={<Footer locale={locale} />}
      >
        <HomeContent locale={locale} />
      </PortfolioExperience>
    </>
  );
}
