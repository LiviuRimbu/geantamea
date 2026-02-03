"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useScrollLock } from "@/shared/hooks/use-scroll-lock";

import { useTranslations } from "next-intl";
import { TextElement } from "@/shared/ui/text-element";
import { menus } from "@/shared/config/menus/menus";
import {
  WomenMenuDesktop,
  MenMenuDesktop,
  AccessoriesMenuDesktop,
  SaleMenuDesktop,
  GiftMenuDesktop,
} from "@/features/header/menus/desktop";
import { EffectWrapper } from "@/shared/ui/framer-motion/effect-wrapper";

type NavLinksProps = {
  changeColor?: boolean;
};

export const NavLinks = ({ changeColor }: NavLinksProps) => {
  const t = useTranslations();
  const [isHovered, setIsHovered] = useState<string | null>(null);
  useScrollLock(isHovered != null);

  const categoryLinks = {
    women: <WomenMenuDesktop />,
    men: <MenMenuDesktop />,
    accessories: <AccessoriesMenuDesktop />,
    sale: <SaleMenuDesktop />,
    gift: <GiftMenuDesktop />,
  };
  // console.log(menus.isHovered.href)
  // useEffect(() => {
  //   if (isHovered) {
  //     console.log("menus[item].items->", menus);
  //   }
  // }, [isHovered]);

  return (
    <div className={"flex items-start justify-between h-navbar"}>
      {Object.keys(menus).map((category, index) => (
        <div key={index} className="flex w-full">
          <TextElement
            variant="descriptionWhite"
            component="span"
            className={`underline-effect h-navbar !text-[12px] text-center flex lg:items-center lg:justify-center lg:group-hover:text-black mr-4 ${changeColor && "text-black"}`}
            onMouseEnter={() => setIsHovered(category)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <Link key={index} href={`${menus[category].href}`}>
              {t(menus[category].labelKey)}
            </Link>
          </TextElement>

          <EffectWrapper
            isVisible={isHovered === category}
            animation="slow-appear"
            duration={0.4}
            animationKey={String(isHovered)}
          >
            <div
              className="absolute left-0 top-full w-screen h-[calc(100vh-4rem)] bg-white shadow-lg z-50"
              onMouseEnter={() => setIsHovered(category)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div className="px-11 mt-4">
                {categoryLinks[category as keyof typeof categoryLinks]}
              </div>
            </div>
          </EffectWrapper>
        </div>
      ))}
    </div>
  );
};
