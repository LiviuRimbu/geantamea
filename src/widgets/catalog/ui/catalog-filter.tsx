import React from "react";
import {useLocale, useTranslations} from "next-intl";

import {SidebarWrapper} from "@/shared/ui/sidebar-wrapper";
import {Button, Checkbox} from "@/shared/ui/shadcn";
import {FilterIcon} from "@/shared/ui/icons";
import {TextElement} from "@/shared/ui";

type CatalogFilterProps = {
    availableTypes: readonly string[];
    activeFilters: string[];
    onFilterAction: (type: string) => void;
    onResetAction: () => void;
    itemsTypes: {
        id: number;
        name_en: string;
        name_ro: string;
        name_ru: string;
        name_uk: string;
    }[];
};

export const CatalogFilter = ({
                                  availableTypes,
                                  activeFilters,
                                  onFilterAction,
                                  onResetAction,
                                  itemsTypes,
                              }: CatalogFilterProps) => {

    const t = useTranslations("catalog");
    const locale = useLocale();
    console.log(itemsTypes, " itemsTypes itemsTypesitemsTypesitemsTypesitemsTypesitemsTypesitemsTypes")
    return (
        <SidebarWrapper
            direction="left"
            headerText={t("filter")}
            triggerAction={(open) => (
                <Button variant="ghost" className="flex" onClick={open}>
                    <FilterIcon/>
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
            <div className="flex flex-col justify-between h-full">
                {/* Filter Options */}
                <div className="flex flex-col gap-4 py-2 ">
                    {/*{availableTypes.map((type) => (*/}
                    {/*    <div key={type} className="flex items-center justify-between gap-3">*/}
                    {/*        <label*/}
                    {/*            htmlFor={type}*/}
                    {/*            className="text-sm text-gray-700 cursor-pointer"*/}
                    {/*        >*/}
                    {/*            <TextElement variant="subtitle">{type}</TextElement>*/}
                    {/*        </label>*/}
                    {/*        <Checkbox*/}
                    {/*            id={type}*/}
                    {/*            checked={activeFilters.includes(type)}*/}
                    {/*            onCheckedChange={() => onFilterAction(type)}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*))}*/}
                    {itemsTypes.map((type, index) => (
                        <div key={index} className="flex items-center justify-between gap-3">
                            <label
                                htmlFor={type.name_en}
                                className="text-sm text-gray-700 cursor-pointer"
                            >
                                <TextElement
                                    variant="subtitle">{type[`name_${locale}` as keyof typeof type]}</TextElement>
                            </label>
                            <Checkbox
                                id={type.name_en}
                                checked={activeFilters.includes(type.name_en)}
                                onCheckedChange={() => onFilterAction(type.name_en)}
                            />
                        </div>
                    ))}
                </div>
                <div>

                    {/* Reset */}
                    {activeFilters.length > 0 && (
                        <div className="">
                            <Button variant="ghost" onClick={onResetAction} className="w-full">
                                <TextElement variant="subtitle">
                                    Clear all
                                </TextElement>


                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </SidebarWrapper>
    );
};
