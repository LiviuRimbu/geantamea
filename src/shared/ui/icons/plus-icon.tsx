export const PlusIcon = ({
  size = 32,
  strokeWidth = 2,
  color = "black",
}: {
  size?: number;
  strokeWidth?: number;
  color?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
  >
    <line
      x1="16"
      y1="4"
      x2="16"
      y2="28"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="butt" // 👈 flat ends
    />
    <line
      x1="4"
      y1="16"
      x2="28"
      y2="16"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="butt" // 👈 flat ends
    />
  </svg>
);
