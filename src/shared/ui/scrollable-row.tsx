"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ScrollableRowProps {
  className?: string;
  children: React.ReactNode;
}

export const ScrollableRow = ({
  className = "",
  children,
}: ScrollableRowProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount =
      direction === "left" ? -clientWidth / 1.5 : clientWidth / 1.5;
    scrollRef.current.scrollTo({
      left: scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`relative w-full max-w-[1280px] mx-auto my-8 lg:my-10 overflow-hidden ${className} scrollable `}
    >
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white hidden lg:block z-[200]"
      >
        <ChevronLeft size={20} />
      </button>

      <div
        ref={scrollRef}
        className="overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory h-[310px] md:h-[450px]
        [&::-webkit-scrollbar]:hidden
        [-ms-overflow-style:none]
        [scrollbar-width:none]"
      >
        {children}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white hidden lg:block z-[200]"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};
