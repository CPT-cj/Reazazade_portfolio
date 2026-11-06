/** To add a language: extend `locales`, `localeMeta`, and the `L` values in src/data. */
export const locales = ["fa", "en"];
export const defaultLocale = "fa";
/** Helper for writing localized strings: l(persian, english). */
export const l = (fa, en) => ({ fa, en });
export const isLocale = (value) => locales.includes(value);
export const dirOf = (locale) => (locale === "fa" ? "rtl" : "ltr");
export const otherLocale = (locale) => (locale === "fa" ? "en" : "fa");
export const localeMeta = {
    fa: { name: "فارسی", og: "fa_IR" },
    en: { name: "English", og: "en_US" },
};
