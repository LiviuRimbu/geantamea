"use client";

import Image from "next/image";
import { Item } from "@/shared/types";
import { useState } from "react";

import { TextElement } from "@/shared/ui/text-element";
import { Button } from "@/shared/ui/shadcn";
import { PlusIcon } from "@/shared/ui/icons/plus-icon";

import { useCartStore } from "@/shared/store/use-cart-store";
import { EffectWrapper } from "@/shared/ui/framer-motion/effect-wrapper";
import { FadeSwap } from "@/shared/ui/fade-swap";

interface ProductCardClient {
  id?: string;
  item: Item;
}

export const ProductCardClient = ({ id, item }: ProductCardClient) => {
  const thumbImages = item.images.filter((img) => img.includes("thumb"));
  const [isHovered, setIsHovered] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const cartItem = {
    id: item.id,
    typeId: item.typeId,
    price: item.price,
    brandId: item.brandId,
    image: item.images[0],
  };
  return (
    <div
      className="absolute top-0 left-0 w-full h-full  bg-transparent cursor-pointer transform z-[100]"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button
        className=" absolute bg-white text-black p-0 aspect-square right-[5%] top-[5%] z-[101] rounded-none group"
        onClick={() => {
          addItem(cartItem);
        }}
      >
        <div className="group-hover:rotate-90 transition-transform duration-300 ease-out">
          <PlusIcon />
        </div>
      </Button>
      {/*<FadeSwap triggerKey={isHovered} duration={200}>*/}
      {/*  {isHovered && (*/}
      {/*    <div className="relative w-full h-full cursor-pointer transform z-[100] animate-kenburns">*/}
      {/*      <Image*/}
      {/*        src={thumbImages[1]}*/}
      {/*        width={300}*/}
      {/*        height={400}*/}
      {/*        loading="lazy"*/}
      {/*        alt="New arrival product"*/}
      {/*        sizes="(max-width: 768px) 45vw, 300px"*/}
      {/*        quality={60}*/}
      {/*        className="aspect-[3/4]"*/}
      {/*      />*/}
      {/*    </div>*/}
      {/*  )}*/}
      {/*</FadeSwap>*/}
    </div>
  );
};
