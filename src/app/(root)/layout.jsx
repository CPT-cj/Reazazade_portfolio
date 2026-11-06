import { Newsreader, Vazirmatn } from "next/font/google";
import "../globals.css";

const vazir = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazir",
  display: "swap",
});
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

// Apply the saved theme before the first paint to avoid a light/dark flash.
const themeScript = `(function(){var d=document.documentElement;try{d.dataset.theme=localStorage.getItem("theme")==="light"?"light":"dark"}catch(e){d.dataset.theme="dark"}d.classList.add("js")})()`;

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" data-theme="dark" suppressHydrationWarning className={`${vazir.variable} ${newsreader.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
