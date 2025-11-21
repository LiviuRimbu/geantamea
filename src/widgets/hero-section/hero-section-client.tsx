"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

import { FillingButton } from "@/shared/ui/filling-button";
import { TextElement } from "@/shared/ui/text-element";
import { FadeSwap } from "@/shared/ui/fade-swap";

interface HeroSectionClientProps {
  heroContent: string[];
}

export const HeroSectionClient = ({ heroContent }: HeroSectionClientProps) => {
  const t = useTranslations();

  const contentSwitchTimer = 14000; // Timer value

  const [contentIndex, setContentIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setContentIndex((index) => (index + 1) % heroContent.length);
    }, contentSwitchTimer);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-black">
      {/* Text */}
      <div className=" absolute border-2 border-white top-1/2 left-1/2 h-[340px] w-[340px] lg:w-[435px] -translate-x-1/2 -translate-y-1/2 z-[10] gap-4 flex flex-col items-center justify-center">
        <TextElement variant="descriptionWhite">New collection</TextElement>
        <TextElement
          variant="titleWhite"
          className="leading-tight whitespace-normal text-center"
        >
          Elegant &amp; Timeless
        </TextElement>
        <div>
          <FillingButton color="white">{t("navbar.women.label")}</FillingButton>
          <FillingButton className="ml-[24px]" color="black">
            {t("navbar.men.label")}
          </FillingButton>
        </div>
      </div>

      {/* content */}
      <FadeSwap triggerKey={contentIndex} duration={500}>
        <div className="w-full h-full ">
          <div className="flex w-full h-full">
            {heroContent[contentIndex].endsWith("mp4") ? (
              <video
                autoPlay
                loop={heroContent.length === 1}
                preload="none"
                muted
                playsInline
                src={heroContent[contentIndex]}
                className="absolute w-full h-full object-cover"
              />
            ) : (
              <Image
                src={heroContent[contentIndex]}
                alt={`H`}
                priority={contentIndex === 0}
                fill
                // // sizes="100vw"
                className="animate-kenburns"
              />
            )}
          </div>
        </div>
      </FadeSwap>
    </div>
  );
};
