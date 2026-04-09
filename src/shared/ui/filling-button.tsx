"use client";
import React from "react";
import { Button } from "@/shared/ui/shadcn/button";
import { TextElement } from "@/shared/ui/text-element";

type FillingButtonProps = {
    className?: string;
    color: "white" | "black";
    children: React.ReactNode;
    onClickAction?: () => void;
    type?: "button" | "submit" | "reset";
};

export const FillingButton = ({
                                  className = "",
                                  color,
                                  children,
                                  onClickAction,
                                  type = "button",
                              }: FillingButtonProps) => {
    const borderColor = color === "white" ? "border-white" : "border-black";
    const fillColor = color === "white" ? "bg-white" : "bg-black";
    const textColor = color === "white" ? "text-white" : "text-black";
    const textColorHover = color === "white" ? "text-black" : "text-white";

    return (
        <Button
            type={type}
            variant="ghost"
            className={`group relative overflow-hidden min-w-[120px] min-h-[50px] rounded-none px-6 py-3 bg-transparent border ${borderColor} ${textColor} ${className}`}
            onClick={onClickAction}
        >
     <span
         className={`absolute inset-0 ${fillColor} translate-x-0 group-hover:translate-x-full transition-transform duration-500 ease-in-out`}
     />
            <TextElement
                variant="description"
                className={`relative z-10 transition-colors duration-500 ${
                    color === "white" ? "text-black group-hover:text-white" : "text-white group-hover:text-black"
                }`}
            >
                {children}
            </TextElement>
        </Button>
    );
};