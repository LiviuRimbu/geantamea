"use client";
import Link from "next/link";

import { UnderlineButton } from "@/shared/ui/underline-button";
import { categories, Categories } from "@/shared/config/categories";

interface SubcategoriesSelectorProps {
  category: string;
  subcategory: string;
}

export const CategoriesSelector = ({
  category,
  subcategory,
}: SubcategoriesSelectorProps) => {
  const categoryKey = category as Categories;
  // console.log(category, subcategory);
  return (
    // <div className="flex items-center justify-center mt-9">
    <div className="flex w-screen overflow-x-auto scrollbar-hide mt-10  lg:mt-32  min-h-[56px] justify-center  ">
      {Object.keys(categories[categoryKey]).map((item, index) => (
        <Link key={index} href={`/${category}/${item}`} className="shrink-0">
          <UnderlineButton
            buttonKey={item}
            buttonState={subcategory}
            setButtonState={() => {}}
            className=" text-[16px] lg:text-[28px] font-bold lg:font-medium"
          >
            {item}
          </UnderlineButton>
        </Link>
      ))}
    </div>
  );
};
