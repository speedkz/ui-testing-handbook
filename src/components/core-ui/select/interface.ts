import { SelectProps } from "antd";

export interface ISelect extends SelectProps {
  disabled?: boolean;
  width?: number | string;
  options: any[];
  optionLabelProp?: string;
  mode?: "multiple" | "tags";
  status?: "error" | "warning";
  defaultActiveFirstOption?: boolean;
  showSearch?: boolean;
  showArrow?: boolean;
}
