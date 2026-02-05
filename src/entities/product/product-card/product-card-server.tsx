import { Link } from "@/i18n/navigation";
import Image from "next/image";

import { ProductItem } from "@/shared/types/product-card-types";
import { ProductCardClient } from "@/entities/product";

import { TextElement } from "@/shared/ui/text-element";

interface ProductCardProps {
  id?: string;
  item: ProductItem;
}

export const ProductCardServer = ({ id, item }: ProductCardProps) => {
  const thumbImages = item.images.filter((img) => img.includes("thumb"));
  return (
    <Link
      href={`/products/${item.id}`}
      key={id}
      className="relative max-w-[200px] md:max-w-[300px]"
    >
      <div className=" aspect-[3/4] relative w-[200px]  h-auto  md:w-[300px] md:h-[400px] overflow-hidden group ">
        <ProductCardClient item={item} />
        <Image
          src={thumbImages[0]}
          width={300}
          height={400}
          loading="lazy"
          alt="New arrival product"
          sizes="(max-width: 768px) 45vw, 300px"
          quality={60}
          className="w-full h-full object-cover hover:opacity-0 transition-transform  duration-10"
        />
        <Image
          src={thumbImages[1]}
          width={300}
          height={400}
          loading="lazy"
          alt="New arrival product"
          sizes="(max-width: 768px) 45vw, 300px"
          quality={60}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-0 scale-100 transition-all duration-200 z-[150] delay-10
              group-hover:opacity-100 hover:scale-105 "
        />
      </div>

      <div className="flex justify-between mt-3 w-full">
        <div className="flex flex-col items-start">
          <TextElement variant="description">{item.gender}</TextElement>
          <TextElement
            variant="description"
            className="text-gray-500 capitalize"
          >
            {item.id}
          </TextElement>
        </div>
      </div>
    </Link>
  );
};
