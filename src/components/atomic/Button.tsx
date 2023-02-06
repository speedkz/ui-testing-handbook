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
