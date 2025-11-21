"use client";
import React, { useEffect, useRef, useState } from "react";

type Variant = "fade" | "slide" | "scale";

interface FadeSwapProps {
  children: React.ReactNode;
  triggerKey: string | number | boolean;
  duration?: number;
  variant?: Variant;
  className?: string;
}

export const FadeSwap = ({
  children,
  triggerKey,
  duration = 400,
  variant = "fade",
  className = "",
}: FadeSwapProps) => {
  const [displayed, setDisplayed] = useState(children);
  const [anim, setAnim] = useState<"in" | "out">("in");
  const keyRef = useRef(triggerKey);

  useEffect(() => {
    if (triggerKey !== keyRef.current) {
      keyRef.current = triggerKey;
      setAnim("out");

      const timeout = setTimeout(() => {
        setDisplayed(children);
        setAnim("in");
      }, duration);

      return () => clearTimeout(timeout);
    }
  }, [triggerKey, children, duration]);

  const transitions = {
    fade: anim === "in" ? "opacity-100" : "opacity-0",
    slide:
      anim === "in" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
    scale: anim === "in" ? "opacity-100 scale-100" : "opacity-0 scale-95",
  };

  return (
    <div
      className={`flex transition-all ease-in-out ${transitions[variant]} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
      }}
    >
      {displayed}
    </div>
  );
};
