// product-page-client.tsx
"use client";

import dynamic from "next/dynamic";
import { ProductPageInfo } from "@/entities/product/product-page/product-page-info";
import { Locale, Item } from "@/shared/types";
import { useIsMobile } from "@/shared/hooks/use-is-mobile";
import { useEffect } from "react";
import ScrollSyncExample from "@/entities/product/product-page/test";

const ProductPageGallery = dynamic(
  () =>
    import("@/entities/product").then((mod) => ({
      default: mod.ProductPageGallery,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="flex w-full justify-center items-start gap-6 flex-col-reverse lg:flex-row lg:w-[600px] lg:h-[600px]">
        <div className="w-full h-24 lg:w-24 lg:h-[500px] bg-gray-100 animate-pulse" />
        <div className="w-full flex-1 h-[400px] lg:h-[500px] bg-gray-100 animate-pulse" />
      </div>
    ),
  },
);

interface ProductPageClientProps {
  item: Item;
  locale: Locale;
  sortedImages: {
    thumbImg: string[];
    mediumImg: string[];
    largeImg: string[];
    base64Img: string[];
  };
}

export const ProductPageClient = ({
  item,
  sortedImages,
  locale,
}: ProductPageClientProps) => {
  const isMobile = useIsMobile();
  // useEffect(() => {
  //   console.log(item, "item from client");
  //   return () => {};
  // }, []);
  return (
    <div className="flex gap-6 justify-center items-center  flex-col  w-full mt-containerYtop">
      <div className="flex items-start justify-center flex-col lg:flex-row">
        <ProductPageGallery
          sortedImages={sortedImages}
          direction={isMobile ? "horizontal" : "vertical"}
        />
        {/*<ScrollSyncExample />*/}
        <ProductPageInfo item={item} locale={locale} />
      </div>
      <p>Limit</p>
      <p>Limit</p>
      <p>Limit</p>
      <p>Limit</p>
      <p>Limit</p>
      <p>Limit</p>
      <p>Limit</p>
      <p>Limit</p>
      <p>Limit</p>
      <p>Limit</p>
      <p>Limit</p>
      <p>Limit</p>
      <p>Limit</p>
      <p>Limit</p>
      <p>Limit</p>
      <p>Limit</p>
      <p>Limit</p>
      <p>Limit</p>
      <p>Limit</p>
      <p>Limit</p>
      <p>Limit</p>
      <p>Limit</p>
      <p>Limit</p>
      <p>Limit</p>
      <p>Limit</p>
      <p>Limit</p>
      <p>Limit</p>
      <p>Limit</p>
      <p>Limit</p>
      <p>Limit</p>
    </div>
  );
};
