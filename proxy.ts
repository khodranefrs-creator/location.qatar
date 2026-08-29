import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["ar", "en"];
const defaultLocale = "ar";

function getLocale(request: NextRequest): string {
  const cookie = request.cookies.get("locale");
  if (cookie && locales.includes(cookie.value)) return cookie.value;

  const acceptLang = request.headers.get("accept-language");
  if (acceptLang) {
    const preferred = acceptLang
      .split(",")
      .map((l) => l.trim().split(";")[0].toLowerCase())
      .find((l) => l.startsWith("ar"));
    if (preferred) return "ar";
    if (acceptLang.toLowerCase().includes("en")) return "en";
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    const firstSegment = pathname.split("/")[1] || "";
    if (firstSegment === "ar" || firstSegment === "en") {
      const response = NextResponse.next();
      response.cookies.set("locale", firstSegment, { path: "/", maxAge: 60 * 60 * 24 * 365 });
      return response;
    }
  }

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  const url = request.nextUrl.toString();
  const res = NextResponse.redirect(new URL(url + (search || ""), request.url));
  return res;
}

export const config = {
  matcher: ["/((?!_next|images|.*\\..*).*)"],
};
