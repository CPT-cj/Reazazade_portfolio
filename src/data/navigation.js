import { l } from "@/lib/i18n";
export const navigation = [
  {
    key: "home",
    path: "",
    label: l("خانه", "Home"),
    description: l(
      "دانشجوی مهندسی نفت؛ پیوند مهندسی، فناوری و راهکارهای کاربردی.",
      "Petroleum Engineering student bridging engineering, technology and practical solutions.",
    ),
  },
  {
    key: "about",
    path: "/about",
    label: l("درباره من", "About"),
    description: l(
      "آشنایی با مسیر تحصیلی، علایق و رویکرد حرفه‌ای محمد امین رضازاده.",
      "Academic background, interests and professional approach of Mohammad Amin Rezazade.",
    ),
  },
  {
    key: "skills",
    path: "/skills",
    label: l("مهارت‌ها", "Skills"),
    description: l(
      "مهارت‌ها در حوزه‌های مهندسی نفت، فناوری، وب، مدیریت و آموزش.",
      "Skills across petroleum engineering, technology, web, management and education.",
    ),
  },
  {
    key: "projects",
    path: "/projects",
    label: l("پروژه‌ها", "Projects"),
    description: l(
      "پروژه‌ها و فعالیت‌های منتخب در حوزه وب، آموزش، انرژی و سیستم‌های نهفته.",
      "Selected projects and activities in web, education, energy and embedded systems.",
    ),
  },
  {
    key: "experience",
    path: "/experience",
    label: l("سوابق اجرایی", "Experience"),
    description: l(
      "تحصیلات و سوابق اجرایی و آموزشی.",
      "Education and executive and educational experience.",
    ),
  },
  {
    key: "teaching",
    path: "/teaching",
    label: l("آموزش", "Teaching"),
    description: l(
      "تجربه آموزش مهارت‌های رایانه‌ای و برنامه‌نویسی به فراگیران ۱۲ تا ۱۸ ساله.",
      "Experience teaching computer skills and programming to learners aged 12–18.",
    ),
  },
  {
    key: "interests",
    path: "/interests",
    label: l("علایق", "Interests"),
    description: l(
      "علایق و فعالیت‌های جانبی.",
      "Interests and activities beyond my studies.",
    ),
  },
  {
    key: "contact",
    path: "/contact",
    label: l("تماس", "Contact"),
    description: l(
      "راه‌های ارتباط با محمد امین رضازاده.",
      "Ways to get in touch with Mohammad Amin Rezazade.",
    ),
  },
];
export const resumeNav = {
  path: "/resume",
  label: l("دریافت رزومه", "Résumé"),
  description: l("رزومه فارسی و انگلیسی.", "Persian and English résumé."),
};
