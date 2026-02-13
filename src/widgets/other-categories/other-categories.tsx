import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { categories } from "@/shared/config/categories";
import type {
  Categories,
  Subcategory,
  // MenSubcategory,
} from "@/shared/config/categories";
import { TextElement } from "@/shared/ui/text-element";

type OtherCategoriesProps = {
  category: Categories;
  subcategory: Subcategory;
};

export const OtherCategories = ({
  category,
  subcategory,
}: OtherCategoriesProps) => {
  const t = useTranslations("other-categories");

  const subCategoriesImg: Record<Categories, Record<string, string>> = {
    men: {
      bags: "men-bags",
      wallets: "men-wallets",
      accessories: "men-accessories",
    },
    women: {
      bags: "women-bags",
      wallets: "women-wallets",
      accessories: "women-accessories",
    },
    accessories: {
      keyHolder: "keyHolder",
      umbrella: "umbrella",
    },
  };

  const otherSubcategories = categories[category].filter(
    (item) => item !== subcategory,
  );

  return (
    <div className="w-full ">
      <div className="flex flex-col lg:flex-row items-start justify-center w-full">
        {otherSubcategories.map((item, index) => (
          <Link
            href={`/${category}/${item}`}
            key={index}
            className="relative mr-3 w-full lg:w-[250px]"
          >
            <Image
              src={`/categories/${category}/${subCategoriesImg[category][item]}.webp`}
              width={350}
              height={150}
              // fill
              alt={`${item}`}
              className="object-cover h-[100px] w-full lg:w-[250px]"
            />
            <TextElement className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {t(`${item}`)}
            </TextElement>
          </Link>
        ))}
      </div>
    </div>
  );
};
