import { Checkbox as ACheckbox } from "antd";

export interface ICheckbox {
  label?: string;
  checked?: boolean;
  onChange?: any;
  disabled?: boolean;
}

export const Checkbox = (props: ICheckbox) => {
  const { label } = props;
  return <ACheckbox {...props}>{label}</ACheckbox>;
};
