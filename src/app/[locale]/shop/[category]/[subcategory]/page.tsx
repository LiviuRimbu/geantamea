import { notFound } from "next/navigation";
import Image from "next/image";
import {getTranslations} from "next-intl/server";

import {buildCategoryJsonLd} from "@/shared/lib/seo";
import { TextElement } from "@/shared/ui/text-element";
import {
  isValidCategory,
  isValidSubcategory,
} from "@/shared/config/categories";

import { Catalog } from "@/widgets/catalog";
import {Metadata} from "next";

interface PageProps {
  params: Promise<{
    category: string;
    subcategory: string;
    locale: string;
  }>;
}

export async function generateMetadata({params}: PageProps): Promise<Metadata> {
  const { category, subcategory } = await params;
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata-cat" });
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return {
    title: ` ${t(subcategory)}  ${t(category)}  ${t('title')} | GeantaMea`,
    description: `${t('description')}`,
    alternates: {
      canonical: `${baseUrl}/shop/${locale}/${category}/${subcategory}`,
      languages: {
        'ro': `${baseUrl}/ro/${category}/${subcategory}`,
        'en': `${baseUrl}/en/${category}/${subcategory}`,
        'ru': `${baseUrl}/ru/${category}/${subcategory}`,
        'uk': `${baseUrl}/uk/${category}/${subcategory}`,
      },
    },
    openGraph: {
      title:`${t(category)} - ${t(subcategory)} ${t('openGraph.title')}`,
      description: ` ${t(category)} - ${t(subcategory)} ${t('openGraph.description')}`.trim(),
      url: `https://geantamea.vercel.app/shop/${locale}/${category}/${subcategory}`,
      images: [
        {
          url: `https://geantamea.vercel.app/categories/${category}-category.webp`,
          width: 1200,
          height: 630,
          alt: `${t(subcategory)} ${t(category)} - GeantaMea`,
        },
      ],
        type: "website",
    },
  };
}



export default async function Page({ params }: PageProps) {
  const { category, subcategory, locale } = await params;

  if (!isValidCategory(category)) {
    return notFound();
  }

  if (!isValidSubcategory(category, subcategory)) {
    return notFound();
  }
  const t = await getTranslations({ locale, namespace: 'Metadata-cat' });
  const jsonLd = buildCategoryJsonLd({
    category,
    subcategory,
    locale,
    categoryLabel: t(category),
    subcategoryLabel: t(subcategory),
  });


  return (

    <main className="relative lg:mx-containerXlg ">
      <div className="relative h-[400px] w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <Image
          src={`/categories/${category}-category.webp`}
          alt={`${category} ${subcategory}`}
          quality={90}
          sizes="100vw"
          fill
          priority
          className="object-cover"
        />
        <TextElement
          component="h1"
          variant="titleWhite"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >

          {category} {subcategory}
        </TextElement>
      </div>

      <Catalog category={category} subcategory={subcategory} />
    </main>
  );
}
