"use client";

import { useState } from "react";

import { Button } from "@/shared/ui/shadcn";
import { PlusIcon } from "@/shared/ui/icons/plus-icon";
import { useCartStore } from "@/features/cart";

import { ProductItem } from "@/shared/types/product-card-types";

interface ProductCardClient {
  id?: string;
  item: ProductItem;
}

export const ProductCardClient = ({ item }: ProductCardClient) => {
  // const thumbImages = item.images.filter((img) => img.includes("thumb"));
  const [_isHovered, setIsHovered] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div
      className="absolute top-0 left-0 w-full h-full bg-transparent cursor-pointer transform z-[200]"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button
        className="absolute bg-white text-black p-0 aspect-square right-[5%] top-[5%] z-[900]  h-[10%] rounded-none group/btn"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          addItem(item);
        }}
      >
        <div className="group-hover/btn:rotate-90 transition-transform duration-300 ease-out">
          <PlusIcon />
        </div>
      </Button>
    </div>
  );
};
