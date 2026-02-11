"use client";

import React from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { TextElement } from "@/shared/ui/text-element";
import { ChevronUp, ChevronDown } from "@/shared/ui/icons";
import { useIsMobile } from "@/shared/hooks/use-is-mobile";
import { Button } from "@/shared/ui/shadcn/button";
import { EffectWrapper } from "@/shared/ui/framer-motion/effect-wrapper";

interface DropdownOption {
  label: string;
  value: string;
  imageUrl?: string;
}

interface DropdownMenuProps {
  values: DropdownOption[];
  name: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  dropdownOpen: boolean;
  setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  showValue?: boolean;
  changeColor?: boolean;
}

const Dropdown = ({
  values,
  name,
  value,
  onChange,
  showValue,
  dropdownOpen,
  setDropdownOpen,
  changeColor,
}: DropdownMenuProps) => {
  const isMobile = useIsMobile();
  const isImage = values.some((option) => option.imageUrl);
  const pathname = usePathname() || "/";
  const router = useRouter();

  return (
    <div className="relative inline-block text-center ">
      {/* Trigger button */}
      <Button
        variant="ghost"
        type="button"
        className="bg-transparent text-gray-500 hover:text-black px-4 py-2 flex items-center"
        onClick={() => setDropdownOpen((v) => !v)}
      >
        {value
          ? (() => {
              const found = values.find((item) => item.value === value);
              return found ? (
                <div className="flex flex-row-reverse items-center md:bg-white">
                  {showValue && (
                    <TextElement
                      variant="descriptionWhite"
                      className="text-white text-opacity-20 group-hover:text-black"
                    >
                      {found.value}
                    </TextElement>
                  )}
                  {found.label}
                  {isImage && found.imageUrl && (
                    <Image
                      src={found.imageUrl}
                      width={30}
                      height={30}
                      alt="color"
                      className="w-[30px] h-[30px] mr-4 rounded-full"
                    />
                  )}
                </div>
              ) : (
                <TextElement
                  variant="descriptionWhite"
                  className={`flex ${
                    isMobile || changeColor ? "text-gray-500" : "text-white"
                  } items-center justify-center pointer group-hover:text-gray-500 hover:!text-black`}
                >
                  {value}
                  {dropdownOpen ? <ChevronUp /> : <ChevronDown />}
                </TextElement>
              );
            })()
          : name}
      </Button>
      {/* Dropdown menu with effect */}
      <EffectWrapper
        isVisible={dropdownOpen}
        animation="grow-vertical"
        animationKey="animationKey"
      >
        <div
          key="animationKey"
          className={`min-w-[20px] h-full  ${
            isMobile
              ? "bottom-full p-0 left-1/2"
              : "top-full mt-2 absolute py-1 left-1/2 -translate-x-1/2"
          }`}
        >
          {values.map((item) => (
            <div
              key={item.value}
              className={`flex flex-row items-center px-4 py-2 cursor-pointer bg-white`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onChange(String(item.value));
                setDropdownOpen(false);
                const newPath = pathname.replace(
                  /^\/[a-zA-Z-]+/,
                  `/${item.value}`,
                );
                // document.body.style.opacity = "0.9";
                // window.location.href = newPath;
                router.push(newPath);
              }}
            >
              {item.imageUrl && (
                <Image
                  src={item.imageUrl}
                  width={30}
                  height={30}
                  alt="color"
                  className="w-[30px] h-[30px] mr-4 rounded-full border"
                />
              )}

              {item.value.toUpperCase() === value.toUpperCase() ? (
                <TextElement variant="description" className="text-black">
                  {item.label}
                </TextElement>
              ) : (
                <TextElement
                  variant="description"
                  className="text-gray-500 bg-white hover:text-black z-[999]"
                >
                  {item.label}
                </TextElement>
              )}
            </div>
          ))}
        </div>
      </EffectWrapper>
    </div>
  );
};

export default Dropdown;
