import { ButtonProps } from "antd";
import { ButtonShape, ButtonType } from "antd/es/button";
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
