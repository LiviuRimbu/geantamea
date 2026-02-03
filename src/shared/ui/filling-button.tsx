import React, { useState, useRef } from "react";
import { Button } from "@/shared/ui/shadcn/button";
import { TextElement } from "@/shared/ui/text-element";

type FillingButtonProps = {
  className?: string;
  color: "white" | "black";
  children: React.ReactNode;
  onClick?: () => void;
};

export const FillingButton = ({
  className = "",
  color,
  children,
  onClick,
}: FillingButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const baseBg =
    color === "white"
      ? "bg-transparent border border-white"
      : "bg-transparent border border-black";
  const textColor = color === "white" ? "text-black" : "text-white";
  const textColorHover = color === "white" ? "text-white" : "text-black";
  const bgColor = color === "white" ? "bg-white" : "bg-black";

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setIsHovered(true);
    setAnimationCompleted(false);

    timeoutRef.current = setTimeout(() => {
      setAnimationCompleted(true);
    }, 500);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setIsHovered(false);
    setTimeout(() => {
      setAnimationCompleted(false);
    }, 500);
  };

  const getTransform = () => {
    if (isHovered) {
      return "translateX(100%)";
    } else {
      return animationCompleted ? "translateX(-100%)" : "translateX(0%)";
    }
  };

  const getInitialPosition = () => {
    return animationCompleted && !isHovered ? { left: 0 } : { right: 0 };
  };

  return (
    <Button
      variant="ghost"
      className={`relative overflow-hidden min-w-[120px] min-h-[50px] rounded-none px-6 py-3 ${baseBg} ${textColor} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <span
        className={`${bgColor}`}
        style={{
          width: "100%",
          ...getInitialPosition(),
          top: 0,
          height: "100%",
          position: "absolute",
          zIndex: 0,
          transition: "transform 0.5s ease-in-out",
          transform: getTransform(),
        }}
      />

      <TextElement
        variant="description"
        className={`relative z-10 transition-colors duration-[500ms] ${isHovered ? textColorHover : textColor}`}
      >
        {children}
      </TextElement>
    </Button>
  );
};
