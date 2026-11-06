import { Newsreader, Vazirmatn } from "next/font/google";
import "../../globals.css";
import { dirOf, locales } from "@/lib/i18n";
import { getLocale } from "@/lib/page";
import { site } from "@/data/site";
import { ui } from "@/data/ui";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PortfolioExperience } from "@/components/layout/PortfolioExperience";

const vazir = Vazirmatn({ subsets: ["arabic", "latin"], variable: "--font-vazir", display: "swap" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader", display: "swap" });

// Apply the saved theme before the first paint to avoid a light/dark flash.
const themeScript = `(function(){var d=document.documentElement;try{d.dataset.theme=localStorage.getItem("theme")==="light"?"light":"dark"}catch(e){d.dataset.theme="dark"}d.classList.add("js")})()`;

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const locale = await getLocale(params);
  return {
    metadataBase: site.url ? new URL(site.url) : undefined,
    title: {
      default: `${site.name[locale]} · ${site.tagline[locale]}`,
      template: `%s · ${site.name[locale]}`,
    },
    description: site.description[locale],
    applicationName: site.name[locale],
  };
}

export default async function LocaleLayout({ children, params }) {
  const locale = await getLocale(params);

  return (
    <html lang={locale} dir={dirOf(locale)} data-theme="dark" suppressHydrationWarning className={`${vazir.variable} ${newsreader.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
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
        {children}
      </PortfolioExperience>
      </body>
    </html>
  );
}
