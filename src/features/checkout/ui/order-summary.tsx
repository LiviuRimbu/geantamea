"use client";

import { useTranslations } from "next-intl";

import { CartProductCard, useCartStore } from "@/features/cart";

import { TextElement } from "@/shared/ui";

export const OrderSummary = () => {
  const t = useTranslations("checkout");
  const cartItems = useCartStore((state) => state.items);
  const cartTotal = useCartStore((state) => state.getTotalPrice);
console.log(cartItems,"CartItems")
  return (
    <div className="bg-white lg:max-w-[30vw] p-4 m-4">
      <TextElement variant="subtitle" className=" text-lg">
        {t("your-order")}
      </TextElement>
      {cartItems.map((cartItem, index) => (
        <div className="">
          <CartProductCard
            key={cartItem.id}
            cartItem={cartItem}
            // deleteBtn={false}
          />
        </div>
      ))}
      <TextElement variant="subtitle" className="flex flex-row justify-around mt-5">
        {t("total")}: <span>{cartTotal()} LEI</span>
      </TextElement>
    </div>
  );
};
