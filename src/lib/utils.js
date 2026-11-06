export const cn = (...parts) => parts.filter(Boolean).join(" ");
export const isActivePath = (pathname, href, isHome) => isHome ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
