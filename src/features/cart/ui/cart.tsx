"use client";

import { useTranslations } from "next-intl";
import { useScrollLock } from "@/shared/hooks/use-scroll-lock";

import { CartProductCard } from "@/features/cart";
import { Button } from "@/shared/ui/shadcn/button";
import { TextElement } from "@/shared/ui/text-element";
import { CartIcon } from "@/shared/ui/icons/cart-icon";
import { X } from "@/shared/ui/icons";

import { useCartStore } from "@/features/cart";
import { FillingButton } from "src/shared/ui";
import Link from "next/link";

type CartProps = {
  changeColor: boolean;
};

export const Cart = ({ changeColor }: CartProps) => {
  const openCart = useCartStore((state) => state.openCart);
  const closeCart = useCartStore((state) => state.closeCart);
  const isOpen = useCartStore((state) => state.isOpen);
  const cartItems = useCartStore((state) => state.items);
  const cartTotal = useCartStore((state) => state.getTotalPrice);
  const t = useTranslations();
  useScrollLock(isOpen);

  return (
    <div className="ml-3">
      <Button
        variant="icon"
        size="icon"
        className="w-30 h-30"
        onClick={() => {
          openCart();
        }}
      >
        <CartIcon
          className={`text-white group-hover:text-black  ${changeColor && "!text-black"} !w-[20px] !h-[20px]`}
        />
      </Button>
      <div
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-25" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => closeCart()}
      />
      <div
        className={`
                    fixed top-0 right-0 h-full w-[90vw] md:w-[25vw] bg-white z-50 flex flex-col px-[20px]
                    transform transition-transform duration-300 ease-in-out
                    ${isOpen ? "translate-x-0" : "translate-x-full"}
                `}
      >
        {/*  Cart header*/}
        <div className="flex items-center justify-between flex-none h-navbar border-y ">
          <TextElement variant="subtitle">{t("cart.label")}</TextElement>
          <Button
            variant="icon"
            onClick={() => closeCart()}
            className="p-0 m-0 group/cart-close"
          >
            <X className="text-gray-500  group-hover/cart-close:text-black" />
          </Button>
        </div>
        {/*Cart content*/}
        <div
          className={`flex flex-col ${cartItems.length > 0 ? "items-start" : "items-center justify-center"} overflow-y-scroll flex-auto  w-full h-full`}
        >
          {cartItems.length > 0 ? (
            <div className=" my-5 w-full">
              {cartItems.map((cartItem) => (
                <CartProductCard key={cartItem.id} cartItem={cartItem} />
              ))}
            </div>
          ) : (
            <TextElement variant="description">{t("cart.empty")}</TextElement>
          )}
        </div>
        {/*Total*/}
        {cartItems.length > 0 && (
          <div className="border-t-[1px] border-t-gray-300 flex flex-col justify-between w-full h-[100px] p-7 mb-7 ">
            <div className="flex justify-between">
              <TextElement variant="subtitle" className="mb-3">
                {t("cart.total")}:
              </TextElement>
              <TextElement variant="subtitle">{cartTotal()}MDL</TextElement>
            </div>
            <Link
              href="/checkout"
              className="flex justify-center w-full"
              onClick={() => closeCart()}
            >
              <FillingButton color="black" className="w-full">
                {t(`cart.checkout`)}
              </FillingButton>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
