"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { TextElement } from "@/shared/ui/text-element";
import { useTextRotator } from "@/shared/hooks/use-text-rotator";

export const InfoBar = () => {
  const t = useTranslations();
  const messages = [t("infobar.sales"), t("infobar.delivery")];
  const { message: currentMessage, fade } = useTextRotator(messages, 4000);
  return (
    <div className="w-full flex bg-[#1c1c1c] justify-center px-8 md:px-11 ">
      <div className="hidden md:flex max-w-[1380px] w-full  min-h-navbar h-navbar  items-center border-b-5 justify-between -mb-[1px]">
        <div className="flex items-center justify-start leading-none h-full">
          <TextElement variant="descriptionWhite" component="span">
            {t("infobar.sales")}
          </TextElement>
          <Link href="/" passHref className="hidden sm:inline-block ml-2">
            <TextElement
              variant="descriptionWhite"
              component="h1"
              className="ml-3 underline-remove-effect"
            >
              {t("infobar.shop-link")}
              <div className="underline-div"></div>
            </TextElement>
          </Link>
        </div>
        <TextElement variant="descriptionWhite">
          {t("infobar.delivery")}
        </TextElement>
      </div>
      <div className="w-full md:hidden bg-[#1c1c1c] min-h-navbar h-navbar px-9 md:px-11 flex items-center border-b-5 justify-center -mb-[1px]">
        <TextElement
          variant="descriptionWhite"
          className={`transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}
        >
          {currentMessage}
        </TextElement>
      </div>
    </div>
  );
};
