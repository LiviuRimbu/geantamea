import {NextIntlClientProvider, hasLocale} from "next-intl";
import {notFound} from "next/navigation";
import {routing} from "@/i18n/routing";
import type {Metadata} from "next";
import {getTranslations} from "next-intl/server";

import {Navbar} from "@/features/header/navbar";
import {InfoBar} from "@/features/header/info-bar";
import {Locale} from "@/shared/types";
import { buildHomeJsonLd } from '@/shared/lib/seo/';
import {Footer} from "@/widgets/footer";

// import {Header} from "@/features/header/header";

type LayoutProps = {
    params: Promise<{ locale: Locale }>;
    children: React.ReactNode;
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateMetadata({params}: LayoutProps): Promise<Metadata> {
    const {locale} = await params;
    const t = await getTranslations({locale, namespace: "Metadata"});

    const ogLocales: Record<string, string> = {
        ro: 'ro_RO',
        ru: 'ru_RU',
        en: 'en_US',
        uk: 'uk_UA'
    };

    return {
        title: t("title"),
        description: t("description"),

        alternates: {
            canonical: `${baseUrl}/${locale}`,
            languages: {
                'ro': `${baseUrl}/ro`,
                'en': `${baseUrl}/en`,
                'ru': `${baseUrl}/ru`,
                'uk': `${baseUrl}/uk`,
            },
        },

        openGraph: {
            title: t("openGraph.title"),
            description: t("openGraph.description"),
            url: `${baseUrl}/${locale}`,
            siteName: "GeantaMea",
            locale: ogLocales[locale] || locale,
            type: "website",
            images: [{
                url: `${baseUrl}/categories/women-category.webp`,
                width: 1200,
                height: 630,
                alt: "GeantaMea - Produse din piele naturală"
            }],
        },

        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-image-preview': 'large',
            },
        },
    };
}

export default async function LocaleLayout({
                                               children,
                                               params,
                                           }: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const {locale} = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }
    const jsonLd = buildHomeJsonLd();
    return (
        <html lang={locale}>
        <body className="min-h-screen antialiased">
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
        />
        <NextIntlClientProvider locale={locale}>
            <InfoBar/>
            <Navbar/>
            <main className="">{children}</main>
            <Footer />
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
