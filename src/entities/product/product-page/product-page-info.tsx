"use client";
import { useTranslations } from "next-intl";

import { useCartStore } from "@/features/cart";
import { Locale, Item } from "@/shared/types";
import { TextElement } from "@/shared/ui/text-element";
import { FillingButton } from "@/shared/ui/filling-button";

interface ProductPageInfoProps {
  item: Item;
  locale: Locale;
}

export const ProductPageInfo = ({ item, locale }: ProductPageInfoProps) => {
  const t = useTranslations("product-page");
  const cartItem = {
    id: item.id,
    typeId: item.typeId,
    price: item.price,
    brandId: item.brandId,
    image: item.images[0],
  };
  const items = useCartStore((s) => s.items);
  const isInCart = items.some((i) => i.id === item.id);
  const addItem = useCartStore((state) => state.addItem);
  // console.log(isInCart, " Isin CARTTTTTTTTTT!!!!!!!!!!!");
  // console.log(item, "Item from info");
  return (
    <div className="lg:sticky lg:top-navbar lg:self-start w-full lg:max-w-md p-4 flex flex-col">
      <TextElement variant="title" className="text-left mb-2">
        {item.Brand.name_ro}
      </TextElement>
      {/*type*/}
      <TextElement variant="subtitle" className="text-left normal-case mb-7">
        {item.ItemType[`name_${locale}`]}
      </TextElement>
      {/*price*/}
      <TextElement variant="subtitle" className="text-left  mb-7">
        {item.price} LEI
      </TextElement>
      {/*description*/}
      <TextElement
        variant="subtitle"
        className="text-left whitespace-normal  mb-4 normal-case"
      >
        {item[`description_${locale}`]}
      </TextElement>
      {/*color*/}
      <TextElement
        variant="description"
        className="text-left  mb-7 normal-case"
      >
        {item.Color[`name_${locale}`]}
      </TextElement>
      <div className="flex w-full items-center justify-center">
        {!isInCart ? (
          <FillingButton
            color="black"
            onClick={() => {
              addItem(cartItem);
            }}
            className="w-[90%]"
          >
            {t("add-to-cart")}
          </FillingButton>
        ) : (
          <FillingButton
            color="black"
            onClick={() => {
              addItem(cartItem);
            }}
            className="w-[90%]"
          >
            {t("proceed")}
          </FillingButton>
        )}
      </div>
      {/*<FillingButton*/}
      {/*  color={isInCart ? "white" : "black"}*/}
      {/*  onClick={() => {*/}
      {/*    addItem(cartItem);*/}
      {/*  }}*/}
      {/*  className="max-w-[400px]"*/}
      {/*>*/}
      {/*  {isInCart ? t("added-to-cart") : t("add-to-cart")}*/}
      {/*</FillingButton>*/}
      {/*{locale}*/}
      {/*{item[`description_${locale}`]}*/}
      {/*<p>{item.Color[`name_${locale}`]}</p>*/}
    </div>
  );
};
