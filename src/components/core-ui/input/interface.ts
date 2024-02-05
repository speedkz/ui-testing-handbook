import { InputProps } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";

export interface IInput extends InputProps {
  icon?: React.ReactNode;
  size?: SizeType;
  disabled?: boolean;
  loading?:
    | boolean
    | {
        delay?: number;
      };
  prefixCls?: string;
  className?: string;
  width?: number | string;
}
