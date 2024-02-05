import { RadioProps } from "antd";

export interface IRadio extends RadioProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: any;
  direction?: "vertical" | "horizontal" | undefined;
  options?: { text: string; value: string | number }[];
  size?: "large" | "middle" | "small";
}
