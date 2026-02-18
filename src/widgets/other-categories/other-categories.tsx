import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { categories } from "@/shared/config/categories";
import type { Categories, Subcategory } from "@/shared/config/categories";
import { TextElement } from "@/shared/ui/text-element";

type OtherCategoriesProps<C extends Categories> = {
  category: C;
  subcategory: Subcategory<C>;
};

export const OtherCategories = <C extends Categories>({
  category,
  subcategory,
}: OtherCategoriesProps<C>) => {
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
  const otherSubcategories = (
    Object.keys(categories[category]) as Subcategory<C>[]
  ).filter((item) => item !== subcategory);

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row items-start justify-center w-full gap-4">
        {otherSubcategories.map((item) => (
          <Link
            href={`/${category}/${item}`}
            key={item}
            className="relative w-full lg:w-[250px] group overflow-hidden"
          >
            <Image
              src={`/categories/${category}/${subCategoriesImg[category][item]}.webp`}
              width={350}
              height={150}
              alt={item}
              className="object-cover h-[100px] w-full lg:w-[250px] transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/40" />

            <TextElement className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white  whitespace-nowrap">
              {t(item as string)}
            </TextElement>
          </Link>
        ))}
      </div>
    </div>
  );
};
