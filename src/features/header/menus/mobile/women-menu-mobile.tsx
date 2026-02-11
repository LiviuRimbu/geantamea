import React from "react";
import { useTranslations } from "next-intl";

import { womenMenu } from "@/shared/config/menus/menus";
import { TextElement } from "@/shared/ui/text-element";
import { Button } from "@/shared/ui/shadcn/button";
import { ChevronLeft } from "@/shared/ui/icons";
import { MenuAccordion } from "@/features/header/ui";

type WomenMenuMobileProps = {
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
};
export const WomenMenuMobile = ({
  setSelectedCategory,
}: WomenMenuMobileProps) => {
  const t = useTranslations();
  return (
    <div className="flex h-full flex-col justify-start ml-5 overflow-y-auto overflow-x-hidden ">
      <Button
        variant="ghost"
        className="w-full border-b rounded-none justify-start flex p-0 hover:scale-y-105 py-3 text-gray-500 hover:text-black"
        onClick={() => setSelectedCategory(null)}
      >
        <ChevronLeft className="w-4 h-4  align-middle" />
        <TextElement
          variant="description"
          className="text-gray-500 hover:text-black"
        >
          {t(womenMenu.labelKey)}
        </TextElement>
      </Button>

      <MenuAccordion menu={womenMenu} />
    </div>
  );
};
