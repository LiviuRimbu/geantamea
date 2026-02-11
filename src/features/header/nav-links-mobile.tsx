import React, { useState } from "react";

import { Button } from "@/shared/ui/shadcn/button";
import { LangSwitcher } from "@/features/header/lang-switcher";
import { useScrollLock } from "@/shared/hooks/use-scroll-lock";
import { TextElement } from "@/shared/ui/text-element";
import { X, ChevronRight } from "@/shared/ui/icons";
import { menus } from "@/shared/config/menus/menus";
import { useTranslations } from "next-intl";
import {
  AccessoriesMenuMobile,
  GiftMenuMobile,
  MenMenuMobile,
  SaleMenuMobile,
  WomenMenuMobile,
} from "@/features/header/menus/mobile";
import { EffectWrapper } from "@/shared/ui/framer-motion/effect-wrapper";
import { FadeSlideWrapper } from "@/shared/ui/framer-motion/menu-transition";

type NavLinksMobileProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dropdownOpen: boolean;
  setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NavLinksMobile = ({
  isOpen,
  setIsOpen,
  dropdownOpen,
  setDropdownOpen,
}: NavLinksMobileProps) => {
  const t = useTranslations();
  useScrollLock(isOpen);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categoryLinks = {
    women: <WomenMenuMobile setSelectedCategory={setSelectedCategory} />,
    men: <MenMenuMobile setSelectedCategory={setSelectedCategory} />,
    accessories: (
      <AccessoriesMenuMobile setSelectedCategory={setSelectedCategory} />
    ),
    sale: <SaleMenuMobile setSelectedCategory={setSelectedCategory} />,
    gift: <GiftMenuMobile setSelectedCategory={setSelectedCategory} />,
  };

  return (
    <div className="mr-7 ">
      <div
        className={`fixed inset-0 bg-black transition-opacity max-h-[99vh] overscroll-y-auto duration-700 ${
          isOpen ? "opacity-25" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`
          fixed top-0 left-0 h-full w-[90vw] md:w-[30vw] z-10 flex flex-col
          transform transition-transform duration-300 ease-in-out bg-white 
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Close Button */}
        <div className="flex items-start justify-start flex-none pl-3 pt-3 ">
          <Button
            variant="icon"
            onClick={() => {
              setIsOpen(false);
              setSelectedCategory(null);
            }}
            className="p-0 m-0"
          >
            <X size={30} className="text-gray-500" />
          </Button>
        </div>

        {/* Menu Content */}
        <div className="flex-1 overflow-y-auto">
          <FadeSlideWrapper isVisible={true} id={selectedCategory ?? "root"}>
            {selectedCategory != null ? (
              categoryLinks[selectedCategory as keyof typeof categoryLinks]
            ) : (
              <div className="flex flex-col items-start justify-start w-full p-5">
                {Object.keys(menus).map((category, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="flex justify-between w-full hover:scale-y-105"
                    onClick={() => {
                      setSelectedCategory(category);
                    }}
                  >
                    <TextElement variant="description">
                      {t(menus[category].labelKey)}
                    </TextElement>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                ))}
              </div>
            )}
          </FadeSlideWrapper>
        </div>

        {/* LangSwitcher with effect, pinned at bottom */}
        <EffectWrapper
          isVisible={isOpen}
          animation="grow-vertical"
          animationKey={String(dropdownOpen)}
        >
          <div
            className="border-t flex items-end justify-end px-4 relative z-50"
            style={{ width: "100%" }}
          >
            <LangSwitcher
              dropdownOpen={dropdownOpen}
              setDropdownOpen={setDropdownOpen}
            />
          </div>
        </EffectWrapper>
      </div>
    </div>
  );
};
