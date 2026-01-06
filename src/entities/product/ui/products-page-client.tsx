"use client";

import { Item } from "@/shared/types/product-types";

interface ProductPageClientProps {
  item: Item;
}

export const ProductPageClient = ({ item }: ProductPageClientProps) => {
  return (
    <div className="mt-navbar">
      <div>{item.price}</div>
    </div>
  );
};
