// import createMiddleware from "next-intl/middleware";
// import { routing } from "@/i18n/routing";
//
// export default createMiddleware(routing);
//
// export const config = {
//   matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
// };
import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";
import { NextRequest } from "next/server";

const intlMiddleware = createMiddleware(routing);

const localeMap: Record<string, string> = {
  ro: "ro",
  ru: "ru",
  uk: "uk",
};

export default function middleware(request: NextRequest) {
  const browserLang =
      request.headers.get("accept-language")?.split(",")[0].split("-")[0] ?? "ro";

  const targetLocale = localeMap[browserLang] ?? "ro";

  // Only redirect root or requests without a locale prefix
  const pathname = request.nextUrl.pathname;
  const hasLocale = routing.locales.some(
      (loc) => pathname.startsWith(`/${loc}/`) || pathname === `/${loc}`
  );

  if (!hasLocale && pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = `/${targetLocale}`;
    return Response.redirect(url);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};