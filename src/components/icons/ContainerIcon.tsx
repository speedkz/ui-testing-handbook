import { COLORS } from "utils/constants/color";

export const ContainerIcon = ({ color = COLORS.icon }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_15549_50014)">
        <path
          d="M14.5 5.60432V5.59932L18.2425 7.27557L22 5.86682L12 2.11682L2 5.86682L12 9.61682L15.7425 8.21307L12 6.67057V6.66682L14.5 5.60432ZM2 7.11682V18.3668L11.375 21.8831V10.6331L2 7.11682ZM7 18.4081L4.5 17.4706V16.1368L7 17.0743V18.4081ZM18.25 8.52307V11.6543L15.75 12.5918V9.46057L12.625 10.6331V21.8831L22 18.3668V7.11682L18.25 8.52307Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_15549_50014">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(2 2)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
