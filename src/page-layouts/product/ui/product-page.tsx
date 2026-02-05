import { ProductPageClient, getProductById } from "@/entities/product";
import { notFound } from "next/navigation";
import { Locale } from "@/shared/types";

type ProductPageProps = {
  id: string;
  locale: Locale;
};

export const ProductPage = async ({ id, locale }: ProductPageProps) => {
  const item = await getProductById(id, locale);
  if (!item) {
    return notFound();
  }

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

  return (
    <ProductPageClient
      item={item}
      sortedImages={sortedImages}
      locale={locale}
    />
  );
};
