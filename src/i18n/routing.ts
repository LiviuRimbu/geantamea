import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ro", "ru", "uk"],
  defaultLocale: "ro",
  localeDetection: true,
});
