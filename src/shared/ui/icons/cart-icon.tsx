import React from "react";

export const CartIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M15 9V5C15 3.93913 14.5786 2.92172 13.8284 2.17157C13.0783 1.42143 12.0609 1 11 1C9.93913 1 8.92172 1.42143 8.17157 2.17157C7.42143 2.92172 7 3.93913 7 5V9M1 6L3 17C3 18.0609 3.42143 19.0783 4.17157 19.8284C4.92172 20.5786 5.93913 21 7 21H15C16.0609 21 17.0783 20.5786 17.8284 19.8284C18.5786 19.0783 19 18.0609 19 17L21 6H1Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
