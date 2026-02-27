"use client";
import { InfoBar } from "@/features/header/info-bar";
import { Navbar } from "@/features/header/navbar";

export const Header = () => {
  return (
    <header className="">
      <InfoBar />
      <Navbar />
    </header>
  );
};
