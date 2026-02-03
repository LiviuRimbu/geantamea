import { prisma } from "@/shared/lib/prisma";
import { Locale } from "@/shared/types";

export async function getProductById(id: string, locale: Locale) {
  const item = await prisma.item.findUnique({
    where: { id },
    select: {
      id: true,
      brandCode: true,
      displayCode: true,
      price: true,
      gender: true,
      isFeatured: true,
      isNew: true,
      weight: true,
      width: true,
      height: true,
      depth: true,
      hidden: true,
      available: true,
      reserved: true,
      onSale: true,
      pricePurchase: true,
      priceSale: true,
      images: true,
      info: true,
      about: true,
      brandId: true,
      colorId: true,
      typeId: true,
      materialId: true,
      createdAt: true,

      description_ro: true,
      description_en: true,
      description_ru: true,
      description_ukr: true,
      productDetails_ro: true,
      productDetails_en: true,
      productDetails_ru: true,
      productDetails_ukr: true,

      Brand: {
        select: {
          id: true,
          name_ro: true,
        },
      },
      Color: {
        select: {
          id: true,
          name_ro: true,
          name_en: true,
          name_ru: true,
          name_ukr: true,
          imageURL: true,
        },
      },
      Material: {
        select: {
          id: true,
          name_ro: true,
          name_en: true,
          name_ru: true,
          name_ukr: true,
        },
      },
      ItemType: {
        select: {
          id: true,
          name_ro: true,
          name_en: true,
          name_ru: true,
          name_ukr: true,
        },
      },
      tags: {
        select: {
          id: true,
          name_ro: true,
          name_en: true,
          name_ru: true,
          name_ukr: true,
          imageURL: true,
        },
      },
      AccessoryDetail: {
        select: {
          id: true,
          itemId: true,
          length: true,
          carBrand: true,
          extraInfo: true,
          accessoryTypeId: true,
          AccessoryType: {
            select: {
              id: true,
              name_ro: true,
              name_en: true,
              name_ru: true,
              name_ukr: true,
              imageURL: true,
            },
          },
        },
      },
    },
  });

  if (!item) {
    return null;
  }

  return {
    ...item,
    price: item.price.toNumber(),
    pricePurchase: item.pricePurchase.toNumber(),
    priceSale: item.priceSale.toNumber(),
    createdAt: item.createdAt.toISOString(),
  };
}
