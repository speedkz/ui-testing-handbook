import { Checkbox } from "antd";
import { ICheckbox } from "./interface";

export const TheCheckbox = (props: ICheckbox) => {
  const { label } = props;
  return <Checkbox {...props}>{label}</Checkbox>;
};
