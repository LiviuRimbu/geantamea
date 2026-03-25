import {Metadata} from "next";
import {notFound} from "next/navigation";

import {buildProductJsonLd} from "@/shared/lib/seo"
import {Locale} from "@/shared/types";
import {getProductById, ProductPageClient} from "@/entities/product";


type PageProps = {
    params: Promise<{
        locale: Locale;
        id: string;
    }>;
};

const getItem = async (id: string, locale: Locale) => {
    const itemId = id.substring(id.lastIndexOf("-") + 1);
    const item = await getProductById(itemId, locale);
    if (!item) return notFound();
    return item;
};

export async function generateMetadata({params}: PageProps): Promise<Metadata> {
    const {id, locale} = await params;
    const item = await getItem(id, locale);

    const itemName = item.ItemType[`name_${locale}`];
    const brandName = item.Brand.name_ro;
    const materialName = item.Material[`name_${locale}`];
    const description = item[`description_${locale}`] || "";
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const cleanDescription = description.replace(/<[^>]*>?/gm, '').substring(0, 160);

    return {
        title: `${itemName} ${brandName} - ${materialName} | GeantaMea`,
        description: cleanDescription,

        alternates: {
            canonical: `https://geantamea.md/${locale}/products/${id}`,
            languages: {
                'ro': `${baseUrl}/ro/products/${id}`,
                'en': `${baseUrl}/en/products/${id}`,
                'ru': `${baseUrl}/ru/products/${id}`,
                'uk': `${baseUrl}/uk/products/${id}`,
            },
        },

        openGraph: {
            title: `${itemName} ${brandName} | ${materialName}`,
            description: cleanDescription,
            url: `https://geantamea.md/${locale}/products/${id}`,
            siteName: "GeantaMea",
            images: item.images
                ?.filter((img: string) => img.includes("medium"))
                .map((img: string) => ({
                    url: img,
                    width: 800,
                    height: 800,
                    alt: `${itemName} ${brandName}`,
                })),
            type: "article",
        },

        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}


export default async function Page({params}: PageProps) {

    const {id, locale} = await params;
    const item = await getItem(id, locale);
    const sortedImages = {
        thumbImg: [] as string[],
        mediumImg: [] as string[],
        largeImg: [] as string[],
        base64Img: [] as string[],
    };

    item.images.forEach((img: string) => {
        if (img.includes("thumb")) {
            sortedImages.thumbImg.push(img);
        }
        if (img.includes("medium")) {
            sortedImages.mediumImg.push(img);
        }
        if (img.includes("large")) {
            sortedImages.largeImg.push(img);
        }
        if (img.includes("base64")) {
            sortedImages.base64Img.push(img);
        }
    });
    const jsonLd = buildProductJsonLd(item, locale);
    return (<>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
        />

        < ProductPageClient
            item={item}
            sortedImages={sortedImages}
            locale={locale}
        />
    </>);


}