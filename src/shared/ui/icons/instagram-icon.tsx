export const InstagramIcon = ({ size = 24 }: { size?: number }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 90 90"
        width={size}
        height={size}
    >
        <rect width="90" height="90" fill="black" className="transition-colors duration-200 group-hover:fill-white" />
        <rect
            x="14.001"
            y="14.001"
            width="61.998"
            height="61.998"
            rx="17.406"
            ry="17.406"
            fill="none"
            stroke="white"
            strokeWidth="4.5"
            className="transition-colors duration-200 group-hover:stroke-black"
        />
        <circle
            cx="45"
            cy="45"
            r="16.487"
            fill="none"
            stroke="white"
            strokeWidth="4.5"
            className="transition-colors duration-200 group-hover:stroke-black"
        />
        <circle cx="45" cy="45" r="12.042" fill="white" className="transition-colors duration-200 group-hover:fill-black" />
        <circle cx="60.939" cy="27.949" r="3.332" fill="white" className="transition-colors duration-200 group-hover:fill-black" />
    </svg>
);