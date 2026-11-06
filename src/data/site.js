import { l } from "@/lib/i18n";
/** Central site configuration. Replace placeholders here (portrait, résumé PDFs, social URLs). */
export const site = {
  name: l("محمد امین رضازاده", "Mohammad Amin Rezazade"),
  monogram: l("ا.ا", "MA"),
  /** Set NEXT_PUBLIC_SITE_URL in production to enable canonical URLs and the sitemap. */
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || null,
  pillars: l(
    "مهندسی · فناوری · مدیریت",
    "Engineering · Technology · Management",
  ),
  title: l(
    "دانشجوی مهندسی نفت | فعال حوزه فناوری، آموزش و مدیریت",
    "Petroleum Engineering Student | Technology, Education & Management",
  ),
  tagline: l(
    "پیوند مهندسی، فناوری و راهکارهای کاربردی",
    "Bridging Engineering, Technology and Practical Solutions.",
  ),
  description: l(
    "دانشجوی مهندسی نفت دانشگاه علم و صنعت ایران؛ پیوند مهندسی، فناوری و راهکارهای کاربردی.",
    "Petroleum Engineering student at Iran University of Science and Technology, bridging engineering, technology and practical solutions.",
  ),
  university: l(
    "دانشگاه علم و صنعت ایران",
    "Iran University of Science and Technology (IUST)",
  ),
  location: l("تهران، ایران", "Tehran, Iran"),
  /** Put a real portrait in /public/images and set `src` (e.g. "/images/portrait.jpg"). */
  portrait: {
    src: null,
    width: 960,
    height: 1200,
    alt: l("پرتره محمد امین رضازاده", "Portrait of Mohammad Amin Rezazade"),
  },
  /** Put PDFs in /public/resume and set the paths (e.g. "/resume/your-resume-fa.pdf"). */
  resume: { fa: "#resume-fa-placeholder", en: "#resume-en-placeholder" },
  contact: { email: "aminrezazade.ir@gmail.com" },
  /** Profiles with `url: null` are hidden everywhere. */
  socials: [
    { id: "linkedin", label: "LinkedIn", url: "#linkedin-placeholder" },
    { id: "github", label: "GitHub", url: "#github-placeholder" },
  ],
};
