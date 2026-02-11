"use client";

import { useState, useEffect } from "react";

export const useIsMobile = () => {
  // Start with false to prevent server/client mismatch
  // Server renders with false, client starts with false, then updates
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false); // Track if component is mounted

  useEffect(() => {
    setMounted(true);

    const checkIsMobile = () => setIsMobile(window.innerWidth < 1280);
    checkIsMobile(); // Check immediately

    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  if (!mounted) return false;

  return isMobile;
};
