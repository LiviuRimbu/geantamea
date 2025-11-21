"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

type EffectWrapperProps = {
  children: ReactNode;
  isVisible: boolean;
  duration?: number;
  delay?: number;
  animation?: "fade" | "scale" | "slide-down" | "grow-vertical" | "slow-appear";
  animationKey: string | number;
};

export const EffectWrapper = ({
  children,
  isVisible,
  duration = 0.3,
  delay = 0,
  animation = "fade",
  animationKey,
}: EffectWrapperProps) => {
  const variants: Record<string, any> = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.98 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.98 },
    },
    "slide-down": {
      initial: { opacity: 0, y: -15 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -15 },
    },
    "grow-vertical": {
      initial: { opacity: 0, scaleY: 0.95 },
      animate: { opacity: 1, scaleY: 1 },
      exit: { opacity: 0, scaleY: 0.95 },
    },
    "slow-appear": {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } },
      exit: { opacity: 0, transition: { duration: 0.2, ease: "easeInOut" } },
    },
  };

  return (
    <AnimatePresence initial={false} mode="wait">
      {isVisible && (
        <motion.div
          key={animationKey ? String(animationKey) : "default"}
          initial={variants[animation].initial}
          animate={variants[animation].animate}
          exit={variants[animation].exit}
          transition={{ duration, delay, ease: "easeOut" }}
          className="w-full" // ✅ allow scroll container inside to control overflow
          style={{
            overflowX: "visible", // ✅ make sure horizontal scroll works
            overflowY: "hidden", // only hide vertical overflow
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
