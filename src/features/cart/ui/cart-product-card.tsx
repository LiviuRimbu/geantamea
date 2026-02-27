import Image from "next/image";

import { TextElement } from "@/shared/ui/text-element";
import { Button } from "@/shared/ui/shadcn";

import { useCartStore } from "@/features/cart";
import { ProductItem } from "@/shared/types";
import { TrashIcon } from "@/shared/ui/icons/trash-icon";
import { Link } from "@/i18n/navigation";

interface CartProductCardProps {
  id?: string;
  cartItem: ProductItem;
  deleteBtn?: boolean;
}

export const CartProductCard = ({
  id,
  cartItem,
  deleteBtn = true,
}: CartProductCardProps) => {
  const removeItem = useCartStore((state) => state.removeItem);
  const closeCart = useCartStore((state) => state.closeCart);

  return (
    <Link
      href={`/products/${cartItem.id}`}
      key={id}
      className="relative flex items-start w-full mt-5"
      onClick={() => {
        closeCart();
      }}
    >
      <div className="relative w-[120px] h-[120px] md:w-[135px] md:h-[135px] flex-shrink-0 overflow-hidden bg-gray-100">
        <Image
          src={cartItem.images[0]}
          alt="Cart product"
          fill
          sizes="120px"
          loading="lazy"
          className="object-cover object-center"
        />
      </div>

      <div className="flex flex-col items-start mt-3 ml-3">
        <div className="flex flex-col items-start">
          <TextElement variant="description">
            {cartItem.Brand.name_ro}
          </TextElement>
          <TextElement
            variant="description"
            className="text-gray-500 capitalize"
          >
            {cartItem.ItemType.name_ro}
          </TextElement>
        </div>
        <TextElement variant="description">
          {cartItem.price} LEI {/* ✅ Use actual price */}
        </TextElement>
        {deleteBtn && (
          <Button
            variant="ghost"
            className="absolute p-0 aspect-square right-[1%] top-[1%] z-[500] rounded-none text-black hover:bg-gray-200"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              removeItem(cartItem.id);
            }}
          >
            <TrashIcon />
          </Button>
        )}
      </div>
    </Link>
  );
};
