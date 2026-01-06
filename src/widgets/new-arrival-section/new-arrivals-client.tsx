"use client";

import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import { TextElement } from "@/shared/ui/text-element";
import { UnderlineButton } from "@/shared/ui/underline-button";
import { ProductCardServer } from "@/entities/product/ui/product-card-server";
import { ScrollableRow } from "@/shared/ui/scrollable-row";
import { FillingButton } from "@/shared/ui/filling-button";
import { getNewArrivals } from "@/shared/api/new-arrivals/get-new-arrivals";
import { EffectWrapper } from "@/shared/ui/framer-motion/effect-wrapper";

import { Item } from "@/shared/types/product-types";
import NewArrivalsSection from "@/widgets/new-arrival-section/new-arrivals-section";
import { ProductCardClient } from "@/entities/product/ui/product-card-client";
import { FadeInWrapper } from "@/shared/ui/fade-in-wrapper";
import { FadeSwap } from "@/shared/ui/fade-swap";

interface NewArrivalsClientProps {
  newArrivals: Item[];
}

export const NewArrivalsClient = ({ newArrivals }: NewArrivalsClientProps) => {
  const t = useTranslations();
  const [buttonPressed, setButtonPressed] = useState<string>("women");

  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setVisible(false);
  }, [buttonPressed]);

  console.log(newArrivals, "NewArrivals");

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
      <ScrollableRow className="overflow-x-auto  h-auto">
        <FadeSwap triggerKey={buttonPressed} duration={400}>
          {newArrivals
            .filter(
              (item) =>
                item.gender?.toLowerCase() ===
                genderMap[buttonPressed as keyof typeof genderMap],
            )
            .slice(0, 10)
            .map((item) => (
              <div
                key={item.id}
                className="relative w-[200px] h-[200px] md:w-[300px] md:h-[400px] cursor-pointer mr-[30px]"
              >
                <ProductCardServer item={item} />
              </div>
            ))}
        </FadeSwap>
      </ScrollableRow>
      <FadeSwap triggerKey={buttonPressed} duration={400}>
        <FillingButton color="black">
          {`${t("new-arrival-section.btn-part1")} ${
            buttonPressed === "women"
              ? t("navbar.women.label")
              : t("navbar.men.label")
          } ${t("new-arrival-section.btn-part2")} `}
        </FillingButton>
      </FadeSwap>
    </div>
  );
};
