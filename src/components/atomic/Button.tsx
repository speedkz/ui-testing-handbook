import { Button as AButton } from "antd";
import { ButtonShape, ButtonType } from "antd/es/button";
import { ButtonProps } from "antd/es/button/button";
import { SizeType } from "antd/es/config-provider/SizeContext";
export interface IButton extends ButtonProps {
  type?: ButtonType;
  icon?: React.ReactNode;
  shape?: ButtonShape;
  size?: SizeType;
  disabled?: boolean;
  loading?:
    | boolean
    | {
        delay?: number;
      };
  prefixCls?: string;
  className?: string;
  ghost?: boolean;
  danger?: boolean;
  block?: boolean;
  children?: React.ReactNode;
  width?: number | string;
}

export const Button = (props: IButton) => {
  const { children, width, type = "primary" } = props;
  return (
    <AButton {...props} type={type} style={{ width }}>
      {children}
    </AButton>
  );
};

export const ButtonClosePanel = (props: { onClick }) => {
  return (
    <button
      type="button"
      {...props}
      className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
    >
      <span className="sr-only">Close panel</span>
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};
