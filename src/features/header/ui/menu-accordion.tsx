import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/shadcn";
import { TextElement } from "@/shared/ui/text-element";

type MenuAccordionProps = {
  menu: {
    items?: {
      key: string;
      href: string;
      children?: {
        key: string;
        href: string;
      }[];
    }[];
  };
};
export const MenuAccordion = ({ menu }: MenuAccordionProps) => {
  const t = useTranslations();
  return (
    <Accordion type="multiple" className="w-full ">
      {menu.items?.map((category, index) => (
        <AccordionItem value={String(index)} key={index}>
          <AccordionTrigger className="mr-2">
            <TextElement variant="description">{t(category.key)}</TextElement>
          </AccordionTrigger>
          {category.children?.map((subCategory, index) => (
            <AccordionContent
              key={index}
              className="flex flex-col gap-4 justify-start items-start "
            >
              {subCategory.key.includes("view-all") ? (
                <Link href={subCategory.href}>
                  <TextElement
                    variant="description"
                    className="normal-case font-bold"
                  >
                    {t(subCategory.key)}
                  </TextElement>
                </Link>
              ) : (
                <Link href={subCategory.href}>
                  <TextElement
                    variant="description"
                    className="normal-case border-l-gray-300 border-l  pl-5"
                  >
                    {t(subCategory.key)}
                  </TextElement>
                </Link>
              )}
            </AccordionContent>
          ))}
        </AccordionItem>
      ))}
    </Accordion>
  );
};
