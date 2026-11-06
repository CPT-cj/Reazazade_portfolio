import { l } from "@/lib/i18n";
/** No proficiency levels are shown: none were provided. */
export const skills = [
    {
        id: "petroleum",
        title: l("مهندسی نفت", "Petroleum Engineering"),
        items: [
            l("مهندسی نفت", "Petroleum Engineering"),
            l("مبانی مهندسی مخزن", "Reservoir Engineering Fundamentals"),
            l("مبانی مهندسی حفاری", "Drilling Engineering Fundamentals"),
            l("فناوری‌های دیجیتال در صنعت نفت و انرژی", "Digital Technologies in Oil and Energy"),
        ],
    },
    {
        id: "programming",
        title: l("برنامه‌نویسی و فناوری", "Programming & Technology"),
        items: [
            l("پایتون", "Python"),
            l("ICDL", "ICDL"),
            l("کار با میکروکنترلرها", "Microcontrollers"),
            l("Embedded C", "Embedded C"),
            l("آشنایی با ابزارهای شبیه‌سازی و توسعه نرم‌افزار", "Software Development and Simulation Tools (Familiarity)"),
        ],
    },
    {
        id: "web",
        title: l("توسعه وب", "Web Development"),
        items: [
            l("طراحی وب‌سایت", "Website Design"),
            l("وردپرس", "WordPress"),
            l("طراحی و مدیریت محتوای وب", "Web Content Management"),
            l("آشنایی با توسعه وب", "Web Development Fundamentals"),
            l("ابزارهای دیجیتال", "Digital Tools"),
        ],
    },
    {
        id: "management",
        title: l("مدیریت و اجرا", "Management & Execution"),
        items: [
            l("برنامه‌ریزی و مدیریت پروژه", "Project Planning"),
            l("هماهنگی و اجرای رویدادها", "Event Coordination"),
            l("مدیریت فعالیت‌های گروهی", "Team Coordination"),
            l("ارتباطات سازمانی", "Organizational Communication"),
            l("حل مسئله", "Problem Solving"),
            l("تصمیم‌گیری", "Decision Making"),
        ],
    },
    {
        id: "education",
        title: l("آموزش و انتقال دانش", "Education & Knowledge Sharing"),
        items: [
            l("آموزش Python", "Python Education"),
            l("آموزش ICDL", "ICDL Education"),
            l("آموزش مهارت‌های دیجیتال", "Digital Skills Training"),
            l("طراحی محتوای آموزشی", "Educational Content Development"),
            l("آموزش پروژه‌محور", "Project-Based Learning"),
            l("برنامه‌ریزی دوره‌های مهارتی", "Skills Course Planning"),
        ],
    },
];
