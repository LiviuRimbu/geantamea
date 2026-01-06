import { useState } from "react";
import Image from "next/image";

import { TextElement } from "@/shared/ui/text-element";
import { Button } from "@/shared/ui/shadcn";

import { useCartStore } from "@/shared/store/use-cart-store";
import { CartItem } from "@/shared/types/";
import { TrashIcon } from "@/shared/ui/icons/trash-icon";

interface CartProductCardProps {
  id?: string;
  cartItem: CartItem;
}

export const CartProductCard = ({ id, cartItem }: CartProductCardProps) => {
  const removeItem = useCartStore((state) => state.removeItem);
  return (
    <div key={id} className=" relative flex items-start w-full  mt-5">
      <div className=" relative w-[120px] h-[120px] md:w-[135px] md:h-[135px] flex-shrink-0 overflow-hidden  bg-gray-100 ">
        <Image
          src={cartItem.image}
          alt="Cart product"
          fill
          sizes="100vw"
          loading="lazy"
          className="object-cover object-center"
        />
      </div>

      <div className=" flex flex-col items-start mt-3 ml-3 ">
        <div className="flex flex-col items-start">
          <TextElement variant="description">What product</TextElement>
          <TextElement
            variant="description"
            className="text-gray-500 capitalize"
          >
            Another data
          </TextElement>
        </div>
        <TextElement variant="description">price LEI</TextElement>
        <Button
          variant="ghost"
          className="absolute p-0 aspect-square right-[1%] top-[1%] z-[100] rounded-none text-black hover:bg-gray-200 "
          onClick={() => {
            removeItem(cartItem.id);
          }}
        >
          <TrashIcon />
        </Button>
      </div>
    </div>
  );
};
