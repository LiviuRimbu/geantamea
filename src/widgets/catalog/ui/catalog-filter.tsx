import { useTranslations } from "next-intl";

import { SidebarWrapper } from "@/shared/ui/sidebar-wrapper";
import { Button, Checkbox } from "@/shared/ui/shadcn";
import { FilterIcon } from "@/shared/ui/icons";
import { TextElement } from "@/shared/ui";
import React from "react";

type CatalogFilterProps = {
  availableTypes: string[];
  activeFilters: string[];
  onFilterAction: (type: string) => void;
  onResetAction: () => void;
};

export const CatalogFilter = ({
  availableTypes,
  activeFilters,
  onFilterAction,
  onResetAction,
}: CatalogFilterProps) => {
  const t = useTranslations("catalog");
  return (
    <SidebarWrapper
      direction="left"
      headerText={t("filter")}
      triggerAction={(open) => (
        <Button variant="ghost" className="flex" onClick={open}>
          <FilterIcon />
          <TextElement
            variant="descriptionWhite"
            className="text-gray-500 ml-2"
          >
            {t("filter")}
            {activeFilters.length > 0 && `(${activeFilters.length})`}
          </TextElement>
        </Button>
      )}
    >
      {/* Filter Options */}
      <div className="flex flex-col gap-4 py-2">
        {availableTypes.map((type) => (
          <div key={type} className="flex items-center justify-between gap-3">
            <label
              htmlFor={type}
              className="text-sm text-gray-700 cursor-pointer"
            >
              <TextElement variant="subtitle">{type}</TextElement>
            </label>
            <Checkbox
              id={type}
              checked={activeFilters.includes(type)}
              onCheckedChange={() => onFilterAction(type)}
            />
          </div>
        ))}
      </div>

      {/* Reset */}
      {activeFilters.length > 0 && (
        <div className="mt-auto pt-3 border-t">
          <Button variant="ghost" onClick={onResetAction} className="w-full">
            Clear all
          </Button>
        </div>
      )}
    </SidebarWrapper>
  );
};
