"use client";

import React, { useState } from "react";
import { X } from "@/shared/ui/icons";
import { Button } from "@/shared/ui/shadcn";
import { TextElement } from "@/shared/ui/";

type SidebarWrapperProps = {
  headerText: string;
  children?: React.ReactNode;
  triggerAction: (open: () => void) => React.ReactNode;
  direction?: "left" | "right";
};

export const SidebarWrapper = ({
  headerText,
  children,
  triggerAction,
  direction = "left",
}: SidebarWrapperProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const directionClasses = {
    left: {
      position: "top-0 left-0",
      open: "translate-x-0",
      closed: "-translate-x-full",
    },
    right: {
      position: "top-0 right-0",
      open: "translate-x-0",
      closed: "translate-x-full",
    },
  };

  const { position, open, closed } = directionClasses[direction];

  return (
    <>
      {triggerAction(() => setIsOpen(true))}

      <div
        className={`fixed inset-0 bg-black transition-opacity z-[500] duration-700 ${
          isOpen ? "opacity-25" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed ${position} h-full w-[90vw] md:w-[30vw] z-[502] flex flex-col
          transform transition-transform duration-300 ease-in-out bg-white
          ${isOpen ? open : closed}`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <TextElement variant="descriptionWhite" className="text-gray-700">
            {headerText}
          </TextElement>
          <Button
            variant="icon"
            onClick={() => setIsOpen(false)}
            className="p-0 m-0"
          >
            <X size={30} className="text-gray-500" />
          </Button>
        </div>

        <div className="flex flex-col flex-1 overflow-y-auto p-4">
          {children}
        </div>
      </div>
    </>
  );
};
