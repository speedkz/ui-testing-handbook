import { DatePicker } from "antd";
import { IDatePicker } from "./interface";
export const { RangePicker } = DatePicker;

export const TheDatePicker = (props: IDatePicker) => {
  const { width = "100%" } = props;
  return <DatePicker {...props} style={{ width }} />;
};
