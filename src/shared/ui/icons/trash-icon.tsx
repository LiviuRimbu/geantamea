"use client";

export const TrashIcon = ({
  size = 24,
  color = "black",
  strokeWidth = 1.5,
}: {
  size?: number;
  color?: string;
  strokeWidth?: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    aria-hidden="true"
    className="transition-transform duration-200 hover:scale-105 text-red-600"
  >
    <path
      d="M21.6 4.9H2.1M19.7 7.8l-.6 7.9c-.2 3.1-.3 4.6-1.3 5.5-1 .9-2.5.9-5.5.9h-.9c-3.1 0-4.6 0-5.6-.9s-1.1-2.4-1.3-5.5L4 7.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeWidth={strokeWidth}
    />
    <path
      d="M5.5 4.9h.2c.9 0 1.7-.6 2.1-1.5v-.1l.1-.3c.1-.3.1-.5.2-.6.3-.5.7-.8 1.3-.9H14.3c.5.1 1 .4 1.3.9 0 .1.1.3.2.6l.1.3v.1c.3.9 1.2 1.5 2.1 1.5h.1"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);
