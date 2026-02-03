"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollSyncExample() {
  const sectionARef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.6 }, // triggers when half of div A is visible
    );
    if (sectionARef.current) observer.observe(sectionARef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex h-[200vh] w-full bg-gray-50">
      {/* Left Scrollable Div */}
      <div
        ref={sectionARef}
        className="flex-1 h-[150vh] overflow-y-scroll p-8 bg-white shadow-md"
      >
        <div className="space-y-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="h-40 bg-blue-100 flex items-center justify-center text-xl rounded-lg"
            >
              Scroll Box {i + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Right Parallel Div */}
      <div
        className={`flex-1 h-[300px] sticky top-0 transition-transform duration-700 ease-out ${
          active ? "translate-y-[-50px]" : "translate-y-0"
        }`}
      >
        <div className="h-full flex flex-col items-center justify-center bg-purple-100 text-2xl font-semibold">
          <p>{active ? "Linked & Moving!" : "Waiting..."}</p>
        </div>
      </div>
    </div>
  );
}
