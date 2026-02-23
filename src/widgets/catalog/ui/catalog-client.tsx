"use client";

import React, { useMemo, useState } from "react";

import { CategoriesSelector } from "@/widgets/catalog";
import { CatalogToolbar } from "@/widgets/catalog/ui/catalog-toolbar";
import { ProductCardServer } from "@/entities/product";
import { ProductItem } from "@/shared/types";
import { CatalogItem } from "@/widgets/catalog/model/types";
import {
  categories,
  Categories,
  Subcategory,
} from "@/shared/config/categories";

interface CatalogClientProps {
  category: string;
  subcategory: string;
  catalogItems: CatalogItem[];
}

export const CatalogClient = ({
  category,
  subcategory,
  catalogItems,
}: CatalogClientProps) => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [activeSort, setActiveSort] = useState<string>("");

  const availableTypes = categories[category as Categories][
    subcategory as Subcategory<Categories>
  ] as string[];

  const filteredItems =
    activeFilters.length === 0
      ? catalogItems
      : catalogItems.filter((item) =>
          activeFilters.includes(item.ItemType.name_en),
        );

  const shownItems = useMemo(() => {
    if (!activeSort) return filteredItems;

    return [...filteredItems].sort((a, b) => {
      switch (activeSort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "newest":
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        default:
          return 0;
      }
    });
  }, [filteredItems, activeSort]);

  const handleFilter = (type: string) => {
    setActiveFilters((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };

  const handleReset = () => setActiveFilters([]);

  return (
    <div className="flex flex-col w-full lg:gap-9">
      <CategoriesSelector category={category} subcategory={subcategory} />
      <CatalogToolbar
        totalItems={shownItems.length}
        availableTypes={availableTypes}
        activeFilters={activeFilters}
        onFilterAction={handleFilter}
        onResetAction={handleReset}
        activeSort={activeSort}
        onSortAction={setActiveSort}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full px-2 mt-5 md:mt-6">
        {shownItems.map((item) => (
          <div key={item.id} className="w-full h-full">
            <ProductCardServer item={item as ProductItem} />
          </div>
        ))}
      </div>
    </div>
  );
};
