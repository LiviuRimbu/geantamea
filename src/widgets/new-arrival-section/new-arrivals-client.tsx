"use client";

import React, {useEffect, useState} from "react";
import {useTranslations} from "next-intl";
import {useRouter} from "next/navigation";
import {useLocale} from "next-intl";

import {TextElement} from "@/shared/ui/text-element";
import {UnderlineButton} from "@/shared/ui/underline-button";
import {ProductCardServer} from "@/entities/product/product-card/product-card-server";
import {ScrollableRow} from "@/shared/ui/scrollable-row";

import {ProductItem} from "@/shared/types/product-card-types";
import {FadeSwap} from "@/shared/ui/fade-swap";

interface NewArrivalsClientProps {
    newArrivals: ProductItem[];
}

export const NewArrivalsClient = ({newArrivals}: NewArrivalsClientProps) => {
    const t = useTranslations();
    const locale = useLocale()
    // const router = useRouter();
    const [buttonPressed, setButtonPressed] = useState<string>("women");

    const [_visible, setVisible] = useState(true);
    useEffect(() => {
        setVisible(false);
    }, [buttonPressed]);

    const genderMap = {
        women: "female",
        men: "male",
    } as const;

    return (
        <div className="px-[44px] mt-[100px] flex w-full flex-col items-center justify-center">
            <TextElement variant="description">
                {t("new-arrival-section.label")}
            </TextElement>

            <div className="flex mt-[20px]">
                <UnderlineButton
                    buttonKey="women"
                    buttonState={buttonPressed}
                    setButtonState={setButtonPressed}
                    className="uppercase ml-6"
                >
                    {t("navbar.women.label")}
                </UnderlineButton>
                <UnderlineButton
                    buttonKey="men"
                    buttonState={buttonPressed}
                    setButtonState={setButtonPressed}
                    className="uppercase ml-6"
                >
                    {t("navbar.men.label")}
                </UnderlineButton>
            </div>
            {/*Products*/}
            <FadeSwap triggerKey={buttonPressed} duration={400}>
                {/* Mobile*/}
                <div className="md:hidden w-[100vw]">
                    <ScrollableRow>
                        {newArrivals
                            .filter(
                                (item) =>
                                    item.gender?.toLowerCase() ===
                                    genderMap[buttonPressed as keyof typeof genderMap],
                            )
                            .slice(0, 4)
                            .map((item) => (
                                <div key={item.id} className="flex-none w-[45vw]">
                                    <ProductCardServer item={item} locale={locale} />
                                </div>
                            ))}
                    </ScrollableRow>
                </div>

                {/* Desktop: grid */}
                <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-4 px-2 mt-5 md:mt-6 w-[80vw]">
                    {newArrivals
                        .filter(
                            (item) =>
                                item.gender?.toLowerCase() ===
                                genderMap[buttonPressed as keyof typeof genderMap],
                        )
                        .slice(0, 4)
                        .map((item) => (
                            <ProductCardServer key={item.id} item={item} locale={locale} />
                        ))}
                </div>
            </FadeSwap>
        </div>
    );
};
