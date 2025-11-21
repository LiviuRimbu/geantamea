"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { LangSwitcher } from "@/features/header/lang-switcher";
import { NavLinks } from "@/features/header/nav-links";
import { TextElement } from "@/shared/ui/text-element";
import { Cart } from "@/features/header/cart";
import { BurgerButton } from "@/features/header/burger-button";
import { NavLinksMobile } from "@/features/header/nav-links-mobile";

export const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const changeColor = dropdownOpen || scrolled;

  return (
    <nav
      className={`bg-transparent sticky top-0 min-h-navbar h-navbar w-full z-[500] flex justify-between items-center transition-colors duration-400  left-0  hover:bg-white px-9 lg:px-11  text-black group ${changeColor && "bg-white"}`}
    >
      <div className="hidden lg:block">
        <NavLinks changeColor={changeColor} />
      </div>
      <div className="lg:hidden">
        <BurgerButton
          open={isOpen}
          setOpen={setIsOpen}
          changeColor={changeColor}
        />
        <NavLinksMobile
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          dropdownOpen={dropdownOpen}
          setDropdownOpen={setDropdownOpen}
        />
      </div>
      <Link href="/" className="absolute left-[50%] -translate-x-1/2">
        <TextElement
          variant="logo"
          fontFamily="optima"
          component="h1"
          className={`text-[20px] md:text-[28px] group-hover:text-black ${changeColor && "text-black"}`}
        >
          GEANTA MEA
        </TextElement>
      </Link>

      <div className="flex items-center justify-center">
        <div className="hidden lg:block">
          <LangSwitcher
            dropdownOpen={dropdownOpen}
            setDropdownOpen={setDropdownOpen}
            changeColor={changeColor}
          />
        </div>
        <Cart changeColor={changeColor} />
      </div>
    </nav>
  );
};
