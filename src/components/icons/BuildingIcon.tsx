import { COLORS } from "utils/constants/color";

export const BuildingIcon = ({ color = COLORS.icon }) => {
  return (
    <svg
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.6 19.8V0H2.20002V19.8H0V22H19.8V19.8H17.6ZM8.80001 2.20002H11V4.40003H8.80001V2.20002ZM8.80001 6.6H11V8.80001H8.80001V6.6ZM8.80001 11H11V13.2H8.80001V11ZM6.59999 13.2H4.39998V11H6.59999V13.2ZM6.59999 8.80001H4.39998V6.6H6.59999V8.80001ZM6.59999 4.39998H4.39998V2.20002H6.59999V4.39998ZM12.1 19.8H7.70003V17.6C7.70003 16.39 8.69003 15.4 9.90004 15.4C11.1101 15.4 12.1 16.39 12.1 17.6V19.8ZM15.4 13.2H13.2V11H15.4V13.2ZM15.4 8.80001H13.2V6.6H15.4V8.80001ZM15.4 4.39998H13.2V2.20002H15.4V4.39998Z"
        fill={color}
      />
    </svg>
  );
};
