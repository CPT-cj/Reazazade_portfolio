import { l } from "@/lib/i18n";
export const projectCategories = {
    web: l("توسعه وب", "Web Development"),
    education: l("آموزش و فناوری", "Education & Technology"),
    energy: l("مهندسی نفت و انرژی", "Petroleum Engineering & Energy"),
    embedded: l("سیستم‌های نهفته و الکترونیک", "Embedded Systems & Electronics"),
    content: l("آموزش و تولید محتوا", "Education & Content Development"),
};
/**
 * Only information supplied by the owner is used. To add real visuals, set `image`/`gallery`
 * (files in /public/images/projects). `process`, `tools` and `outcomes` stay hidden until added.
 */
export const projects = [
    {
        slug: "website-design-and-development",
        kind: "project",
        category: "web",
        title: l("طراحی و توسعه وب‌سایت", "Website Design and Development"),
        summary: l("طراحی و پیاده‌سازی وب‌سایت با هدف ارائه اطلاعات، معرفی خدمات و ایجاد بستری برای ارتباط با مخاطبان، با استفاده از ابزارهای طراحی و مدیریت محتوای وب.", "Website design and implementation focused on presenting information, introducing services, and providing a communication platform using web design and content management tools."),
        objective: l("ارائه اطلاعات، معرفی خدمات و ایجاد بستر ارتباط با مخاطبان از طریق وب‌سایت.", "Present information, introduce services, and give visitors a way to get in touch."),
        role: l("طراحی و پیاده‌سازی وب‌سایت با ابزارهای طراحی و مدیریت محتوای وب.", "Designed and implemented the website using web design and content management tools."),
    },
    {
        slug: "digital-skills-education-program",
        kind: "activity",
        category: "education",
        title: l("برنامه آموزش مهارت‌های دیجیتال", "Digital Skills Education Program"),
        summary: l("مشارکت در طراحی برنامه آموزشی مهارت‌محور با محوریت ICDL، برنامه‌نویسی Python و کاربرد ابزارهای هوش مصنوعی؛ با تأکید بر یادگیری عملی و اجرای پروژه‌های کاربردی.", "Contributed to designing a skills-oriented educational program focused on ICDL, Python programming, and practical applications of AI tools, emphasizing hands-on learning and practical exercises."),
        objective: l("طراحی برنامه آموزشی مهارت‌محور با محوریت ICDL، Python و ابزارهای هوش مصنوعی.", "Design a skills-oriented educational program centered on ICDL, Python, and AI tools."),
        role: l("مشارکت در طراحی برنامه آموزشی.", "Contributed to designing the program."),
        tools: [l("ICDL", "ICDL"), l("Python", "Python"), l("ابزارهای هوش مصنوعی", "AI tools")],
    },
    {
        slug: "academic-and-industrial-visits",
        kind: "activity",
        category: "energy",
        title: l("بازدیدهای علمی و صنعتی", "Academic and Industrial Visits"),
        summary: l("مشارکت در برنامه‌ریزی و هماهنگی بازدیدهای علمی از مجموعه‌های صنعتی و زیرساخت‌های مرتبط با صنعت نفت و انرژی، با هدف آشنایی دانشجویان با محیط واقعی فعالیت‌های صنعتی.", "Participated in planning and coordinating academic visits to industrial organizations and infrastructure related to the oil and energy sector, helping students become familiar with real industrial environments."),
        objective: l("آشنایی دانشجویان با محیط واقعی فعالیت‌های صنعتی.", "Help students become familiar with real industrial environments."),
        role: l("مشارکت در برنامه‌ریزی و هماهنگی بازدیدها.", "Participated in planning and coordinating the visits."),
    },
    {
        slug: "embedded-c-microcontroller-course",
        kind: "activity",
        category: "embedded",
        title: l("دوره Embedded C و میکروکنترلر", "Embedded C and Microcontroller Course"),
        summary: l("مشارکت در برنامه‌ریزی و هماهنگی برگزاری دوره آموزشی Embedded C با محوریت کار عملی با میکروکنترلر AVR و بردهای آموزشی.", "Contributed to planning and coordinating an Embedded C training course focused on practical work with AVR microcontrollers and educational development boards."),
        objective: l("برگزاری دوره آموزشی Embedded C با محوریت کار عملی با میکروکنترلر AVR.", "Run a hands-on Embedded C course built around AVR microcontrollers."),
        role: l("مشارکت در برنامه‌ریزی و هماهنگی برگزاری دوره.", "Contributed to planning and coordinating the course."),
        tools: [l("Embedded C", "Embedded C"), l("میکروکنترلر AVR", "AVR microcontrollers")],
    },
    {
        slug: "educational-content-development",
        kind: "activity",
        category: "content",
        title: l("تولید و توسعه محتوای آموزشی", "Educational Content Development"),
        summary: l("فعالیت در زمینه تهیه و توسعه محتوای آموزشی با هدف ساده‌سازی مفاهیم فنی و فراهم‌کردن امکان یادگیری ساختاریافته و کاربردی.", "Worked on preparing and developing educational content to simplify technical concepts and support structured, practical learning."),
        objective: l("ساده‌سازی مفاهیم فنی و فراهم‌کردن امکان یادگیری ساختاریافته و کاربردی.", "Simplify technical concepts and support structured, practical learning."),
        role: l("تهیه و توسعه محتوای آموزشی.", "Prepared and developed the educational content."),
    },
];
export const getProject = (slug) => projects.find((p) => p.slug === slug);
