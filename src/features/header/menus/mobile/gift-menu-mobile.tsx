import Link from "next/link";
import { useTranslations } from "next-intl";

import { giftMenu } from "@/config/menus/menus";
import { TextElement } from "@/shared/ui/text-element";
import { Button } from "@/shared/ui/shadcn/button";
import { ChevronLeft } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/shadcn/accordion";

type GiftMenuMobileProps = {
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
};
const GiftMenuMobile = ({ setSelectedCategory }: GiftMenuMobileProps) => {
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
          {t(giftMenu.labelKey)}
        </TextElement>
      </Button>
      {giftMenu.info && ` – ${t(giftMenu.info)}`}
      <Accordion type="multiple" className="w-full ">
        {giftMenu.items?.map((category, index) => (
          <AccordionItem value={String(index)} key={index}>
            <AccordionTrigger className="mr-2">
              <TextElement variant="description">{t(category.key)}</TextElement>
            </AccordionTrigger>
            {category.children?.map((subCategory, index) => (
              <AccordionContent
                key={index}
                className="flex flex-col gap-4 justify-start items-start border-l-gray-300 border-l pl-5"
              >
                <Link href={subCategory.href}>
                  <TextElement variant="description" className="normal-case">
                    {t(subCategory.key)}
                    {category.info && ` – ${t(category.info)}`}
                  </TextElement>
                </Link>
              </AccordionContent>
            ))}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default GiftMenuMobile;
