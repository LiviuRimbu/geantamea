"use client";
import { InfoBar } from "@/features/header/info-bar";
import { Navbar } from "@/features/header/navbar";

export const Header = () => {
  return (
    <header className="">
      <InfoBar />
      {/*<div className="sticky top-0 w-full z-[999]">*/}
      <Navbar />
      {/*</div>*/}
    </header>
  );
};
