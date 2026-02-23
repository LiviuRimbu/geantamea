import React from "react";

import { prisma } from "@/shared/lib/prisma";
import { Gender } from "@prisma/client";
import {
  Categories,
  getAcceptedItemTypes,
  Subcategory,
} from "@/shared/config/categories";
import { CatalogClient } from "@/widgets/catalog";

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
  console.log(acceptedTypes, "acceptedTypes", category, subcategory);

  const itemsByCategory = await prisma.item.findMany({
    where: {
      hidden: false,
      available: true,
      gender: genderFilter,
      ItemType: {
        name_en: { in: [...acceptedTypes] },
        // name_en: "shoulder bag",
      },
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
      createdAt: true,
    },
  });
  const catalogItems = itemsByCategory.map((item) => ({
    ...item,
    price: item.price.toNumber(),
  }));

  console.log(
    // catalogItems,
    // "itemsCategoryXXXXXXXXXXXXXXXX",
    // category,
    subcategory,
  );
  return (
    <CatalogClient
      catalogItems={catalogItems}
      category={category}
      subcategory={subcategory}
    />
  );
}
