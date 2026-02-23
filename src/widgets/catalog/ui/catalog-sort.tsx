"use client";

import { SidebarWrapper } from "@/shared/ui/sidebar-wrapper";
import { Button } from "@/shared/ui/shadcn";
import { TextElement } from "@/shared/ui";
import React from "react";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";

type CatalogSortProps = {
  sortOptions: string[];
  activeSort: string;
  onSortAction: (sort: string) => void;
};

export const CatalogSort = ({
  sortOptions,
  activeSort,
  onSortAction,
}: CatalogSortProps) => {
  const t = useTranslations("catalog");

  return (
    <SidebarWrapper
      direction="right"
      headerText={t("sort-by")}
      triggerAction={(open) => (
        <Button variant="ghost" className="flex" onClick={open}>
          <TextElement
            variant="descriptionWhite"
            className="text-gray-500 ml-2"
          >
            {t("sort-by")}
          </TextElement>
          <ChevronDown />
        </Button>
      )}
    >
      <div className="flex flex-col gap-2 py-2">
        {sortOptions.map((option) => (
          <Button
            key={option}
            variant="ghost"
            onClick={() => onSortAction(option)}
            className="w-full justify-start"
          >
            <TextElement
              variant="subtitle"
              className={`px-3 py-2 w-full transition-colors ${
                activeSort === option
                  ? "text-black font-semibold"
                  : "text-gray-500"
              }`}
            >
              {t(`sort-options.${option}`)}
            </TextElement>
          </Button>
        ))}
      </div>
    </SidebarWrapper>
  );
};
