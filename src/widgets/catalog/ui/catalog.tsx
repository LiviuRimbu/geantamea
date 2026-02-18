import React from "react";

import { prisma } from "@/shared/lib/prisma";
import { Gender } from "@prisma/client";

import { CategoriesSelector } from "@/widgets/catalog";
import {
  Categories,
  getAcceptedItemTypes,
  Subcategory,
} from "@/shared/config/categories";
import { ProductCardServer } from "src/entities/product";
import { ProductItem } from "@/shared/types/product-card-types";
import { CatalogToolbar } from "@/widgets/catalog/ui/catalog-toolbar";

interface CatalogProps {
  category: string;
  subcategory: string;
}

export async function Catalog({ category, subcategory }: CatalogProps) {
  const CATEGORIES_MAP: Record<Categories, Gender> = {
    men: Gender.male,
    women: Gender.female,
    accessories: Gender.unisex,
  };
  const genderFilter = CATEGORIES_MAP[category as Categories];

  const acceptedTypes = getAcceptedItemTypes(
    category as Categories,
    subcategory as Subcategory<Categories>,
  );

  const itemsByCategory = await prisma.item.findMany({
    where: {
      hidden: false,
      available: true,
      gender: genderFilter,
      // ItemType: {
      //   name_en: { in: [...acceptedTypes] },
      // },
    },
    orderBy: {
      createdAt: "desc",
    },
    // take: 15,
    select: {
      id: true,
      images: true,
      price: true,
      Brand: {
        select: {
          id: true,
          name_ro: true,
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
      gender: true,
    },
  });
  const formattedItemsByCategory = itemsByCategory.map((item) => ({
    ...item,
    price: item.price.toNumber(),
  }));
  console.log(itemsByCategory, "itemsCategory", category, subcategory);
  return (
    <div className="flex flex-col w-full lg:gap-9 ">
      <CategoriesSelector category={category} subcategory={subcategory} />
      <CatalogToolbar />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full px-2 mt-5 md:mt-6 ">
        {formattedItemsByCategory.map((item) => (
          <div key={item.id} className="w-full h-full">
            <ProductCardServer item={item as ProductItem} />
          </div>
        ))}
      </div>
    </div>
  );
}
