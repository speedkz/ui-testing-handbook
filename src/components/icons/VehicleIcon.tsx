import { COLORS } from "utils/constants/color";

export const VehicleIcon = ({ color = COLORS.icon }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 16.5158C0 16.7619 0.172425 16.955 0.41848 16.955H1.08663C1.53557 15.9647 2.55772 15.2154 3.74454 15.2154C4.93142 15.2154 5.95333 15.9647 6.4025 16.955H15.0872V13.4016H0V16.5158Z"
        fill={color}
      />
      <path
        d="M3.74454 16.1544C2.6568 16.1544 1.77505 17.0361 1.77505 18.1239C1.77505 19.2116 2.6568 20.0934 3.74454 20.0934C4.83175 20.0921 5.7128 19.2111 5.71403 18.1239C5.71403 17.0362 4.83227 16.1544 3.74454 16.1544Z"
        fill={color}
      />
      <path
        d="M23.7434 11.9543L21.8677 11.1298H16.0192V16.955H17.1544C17.6037 15.9647 18.6255 15.2154 19.8123 15.2154C20.9992 15.2154 22.0213 15.9647 22.4703 16.955H23.5812C23.8273 16.955 23.9997 16.7619 23.9997 16.5158V12.378C24.0059 12.1984 23.9053 12.0321 23.7434 11.9543Z"
        fill={color}
      />
      <path
        d="M19.9393 7.77127C19.7052 7.32244 19.2379 7.04417 18.7317 7.05221H16.0192V10.1978H21.1987L19.9393 7.77127Z"
        fill={color}
      />
      <path
        d="M13.7495 3.90662H1.3307C0.581643 3.90662 0 4.52327 0 5.27233V12.4696H15.0872V5.27233C15.0872 5.27023 15.0873 5.26813 15.0873 5.26604C15.0933 4.52129 14.4943 3.91262 13.7495 3.90662Z"
        fill={color}
      />
      <path
        d="M19.8122 16.1544C18.7245 16.1544 17.8427 17.0362 17.8428 18.1239C17.8429 19.2117 18.7246 20.0934 19.8123 20.0934C20.8996 20.0921 21.7806 19.2111 21.7818 18.1239C21.7817 17.0362 20.9 16.1544 19.8122 16.1544Z"
        fill={color}
      />
    </svg>
  );
};