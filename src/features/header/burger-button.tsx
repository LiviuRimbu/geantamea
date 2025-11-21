import React, { useEffect } from "react";
import { Button } from "@/shared/ui/shadcn/button";

type BurgerButtonProps = {
  changeColor: boolean;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BurgerButton = ({
  open,
  setOpen,
  changeColor,
}: BurgerButtonProps) => {
  return (
    <Button
      variant="ghost"
      onClick={() => setOpen((prev) => !prev)}
      className=" relative w-8 h-8 flex flex-col  justify-center items-center group"
      aria-label="Toggle menu"
      type="button"
    >
      {/* Top line */}
      <span
        className={`block absolute h-0.5 w-6 transform transition-all group-hover:bg-black duration-300  ${changeColor ? "bg-black" : "bg-white"}
        ${open ? "rotate-45 top-4" : "top-2"}`}
      />
      {/* Middle line */}
      <span
        className={`block absolute h-0.5 w-6  transition-all duration-300 group-hover:bg-black ${changeColor ? "bg-black" : "bg-white"}
        ${open ? "opacity-0" : "opacity-100 top-4"}
      `}
      />
      {/* Bottom line */}
      <span
        className={`block absolute h-0.5 w-6  transform transition-all  group-hover:bg-black duration-300 ${changeColor ? "bg-black" : "bg-white"}
        ${open ? "-rotate-45 top-4" : "top-6"}
      `}
      />
    </Button>
  );
};
