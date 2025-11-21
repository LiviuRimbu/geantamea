"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

type FadeSlideWrapperProps = {
  children: ReactNode | null;
  isVisible: boolean;
  duration?: number;
  id: string;
};

export const FadeSlideWrapper = ({
  children,
  isVisible,
  duration = 0.6,
  id,
}: FadeSlideWrapperProps) => {
  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key={id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration, ease: "easeInOut" }}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
