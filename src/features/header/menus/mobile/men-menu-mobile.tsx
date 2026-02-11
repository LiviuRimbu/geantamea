import React from "react";
import { useTranslations } from "next-intl";

import { MenuAccordion } from "@/features/header/ui";
import { menMenu } from "@/shared/config/menus/menus";
import { TextElement } from "@/shared/ui/text-element";
import { Button } from "@/shared/ui/shadcn/button";
import { ChevronLeft } from "@/shared/ui/icons";

type MenMenuMobileProps = {
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
};

export const MenMenuMobile = ({ setSelectedCategory }: MenMenuMobileProps) => {
  const t = useTranslations();

  return (
    <div className="flex h-full flex-col justify-start ml-5  overflow-y-auto overflow-x-hidden">
      <Button
        variant="ghost"
        className="w-full border-b rounded-none justify-start flex p-0 hover:scale-y-105 py-3 text-gray-500 hover:text-black"
        onClick={() => {
          setSelectedCategory(null);
        }}
      >
        <ChevronLeft className="w-4 h-4 text-gray-500 hover:text-black" />
        <TextElement
          variant="description"
          className="text-gray-500 hover:text-black"
        >
          {t(menMenu.labelKey)}
        </TextElement>
      </Button>
      <MenuAccordion menu={menMenu} />
    </div>
  );
};
