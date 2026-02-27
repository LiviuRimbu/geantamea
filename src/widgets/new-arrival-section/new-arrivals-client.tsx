"use client";

import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import { TextElement } from "@/shared/ui/text-element";
import { UnderlineButton } from "@/shared/ui/underline-button";
import { ProductCardServer } from "@/entities/product/product-card/product-card-server";
import { ScrollableRow } from "@/shared/ui/scrollable-row";
import { FillingButton } from "@/shared/ui/filling-button";

import { ProductItem } from "@/shared/types/product-card-types";
import { FadeSwap } from "@/shared/ui/fade-swap";

interface NewArrivalsClientProps {
  newArrivals: ProductItem[];
}

export const NewArrivalsClient = ({ newArrivals }: NewArrivalsClientProps) => {
  const t = useTranslations();
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
      <ScrollableRow className="overflow-x-auto  h-auto">
        <FadeSwap triggerKey={buttonPressed} duration={400}>
          <div className="flex flex-row">
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
                  // className="relative w-[200px] h-[200px] md:w-[300px] md:h-[400px] cursor-pointer mr-[30px]"
                  className="relative cursor-pointer min-w-[150px] flex-auto max-w-[500px]  mr-[30px]"
                >
                  <ProductCardServer item={item} />
                </div>
              ))}
          </div>
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
