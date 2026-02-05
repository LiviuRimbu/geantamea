import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ro", "ru", "ukr"],

  defaultLocale: "ro",
});
