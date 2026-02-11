import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import { Navbar } from "@/features/header/navbar";
import { InfoBar } from "@/features/header/info-bar";
// import {Header} from "@/features/header/header";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    // <html lang={locale}>
    //   <body className="bg-[#efefef] ">
    <NextIntlClientProvider locale={locale}>
      {/*<Header />*/}
      <InfoBar />
      <Navbar />
      <main className="px-containerX lg:containerXlg">{children}</main>
    </NextIntlClientProvider>
    // </body>
    // </html>
  );
}
