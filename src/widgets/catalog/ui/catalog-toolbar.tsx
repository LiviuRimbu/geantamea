"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";

import { Button, Checkbox } from "@/shared/ui/shadcn";
import { TextElement } from "@/shared/ui/";
import { CatalogFilter } from "@/widgets/catalog/ui/catalog-filter";
import { CatalogSort } from "@/widgets/catalog/ui/catalog-sort";
import { ChevronDown } from "lucide-react";

type CatalogToolbarProps = {
  totalItems: number;
  availableTypes: string[];
  activeFilters: string[];
  onFilterAction: (type: string) => void;
  onResetAction: () => void;
  activeSort: string;
  onSortAction: (sort: string) => void;
};

export const CatalogToolbar = ({
  totalItems,
  availableTypes,
  activeFilters,
  onFilterAction,
  onResetAction,
  activeSort,
  onSortAction,
}: CatalogToolbarProps) => {
  const t = useTranslations("catalog");
  // const [activeSort, setActiveSort] = useState("");

  return (
    <div className="relative">
      <div className="flex justify-between items-center relative">
        <CatalogFilter
          availableTypes={availableTypes}
          activeFilters={activeFilters}
          onFilterAction={onFilterAction}
          onResetAction={onResetAction}
        />

        <TextElement variant="descriptionWhite" className="text-gray-500">
          {totalItems} {t("items-found")}
        </TextElement>

        <CatalogSort
          sortOptions={["newest", "price-asc", "price-desc"]}
          activeSort={activeSort}
          onSortAction={onSortAction}
        />

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border-t border-gray-400 w-screen" />
      </div>
    </div>
  );
};
