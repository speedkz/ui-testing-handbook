import { DatePicker as ADatePicker } from "antd";
export const { RangePicker } = ADatePicker;

export interface IDatePicker {
  picker?: "time" | "date" | "week" | "month" | "quarter" | "year";
  onChange?: any;
  disabled?: boolean;
  format?: string;
  width?: string | number;
}

export const DatePicker = (props: IDatePicker) => {
  const { width = "100%" } = props;
  return <ADatePicker {...props} style={{ width }} />;
};
