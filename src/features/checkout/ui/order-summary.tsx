"use client";

import {useTranslations} from "next-intl";

import {CartProductCard, useCartStore} from "@/features/cart";

import {TextElement} from "@/shared/ui";

interface OrderSummaryProps {
    variant?: 'cart' | 'success';
}

export const OrderSummary = ({variant = 'cart'}:OrderSummaryProps) => {
    const t = useTranslations("checkout");
    const cartItems = useCartStore((state) => state.items);
    const cartTotal = useCartStore((state) => state.getTotalPrice);

    return (
        <div >
            {cartItems.length > 0 ? (<div className="bg-white lg:max-w-[30vw] p-4 m-4">
                <TextElement  variant="subtitle" className=" text-lg">
                    {t("your-order")}
                </TextElement>
                {cartItems.map((cartItem) => (
                    <div key={cartItem.id} className="">
                        <CartProductCard
                            key={cartItem.id}
                            cartItem={cartItem}
                            deleteBtn={variant==="success"}
                        />
                    </div>
                ))}
                <TextElement variant="subtitle" className="flex flex-row justify-around mt-5">
                    {t("total")}: <span>{cartTotal()} LEI</span>
                </TextElement>


            </div>) : (<TextElement variant="subtitle" className=" text-lg">
                Your Cart is Empty :(
            </TextElement>)}


        </div>
    );
};
