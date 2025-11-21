import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { TextElement } from "@/shared/ui/text-element";

export const CategoriesGrid = async () => {
  const t = await getTranslations("categories-grid");

  return (
    <div className="mb-[300px]  mt-[48px] md:mt-[80px] flex items-center justify-center ">
      <div className="flex flex-col gap-[20px] md:flex-row md:gap-[30px]">
        <Link
          href="/"
          className="w-[350px] md:w-[830px] h-[384px] md:h-[610px] overflow-hidden flex items-center justify-center group relative"
        >
          <TextElement
            variant="subtitleWhite"
            className="z-[100] absolute text-[22px] md:text-[32px]"
          >
            {t("women")}
          </TextElement>
          <Image
            src={`/categories-grid/women.webp`}
            alt="women products"
            width={1200}
            height={1200}
            className="w-full h-full cursor-pointerw-full object-cover transform transition-transform  duration-2000 hover:scale-110"
          />
        </Link>
        <div className="flex flex-col gap-[20px] md:gap-[30px]">
          <Link
            href="/"
            className="relative w-[350px] md:w-[400px] h-[180px] md:h-[290px] overflow-hidden flex items-center justify-center"
          >
            <TextElement
              variant="subtitleWhite"
              className="z-[100] absolute text-[18px] md:text-[22px]"
            >
              {t("men")}
            </TextElement>
            <Image
              src={`/categories-grid/men.webp`}
              alt="women products"
              width={1200}
              height={1200}
              className="w-full h-full cursor-pointerw-full object-cover transform transition-transform  duration-2000 hover:scale-110"
            />
          </Link>

          <Link
            href="/"
            className="relative w-[350px] md:w-[400px] h-[180px] md:h-[290px] cursor-pointer overflow-hidden flex items-center justify-center"
          >
            <TextElement
              variant="subtitleWhite"
              className="z-[100] absolute text-[16px] md:text-[18px]"
            >
              {t("accessories")}
            </TextElement>
            <Image
              src={`/categories-grid/accessories.webp`}
              alt="women products"
              width={1200}
              height={1200}
              className="w-full h-full cursor-pointerw-full object-cover transform transition-transform  duration-2000 hover:scale-110"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
