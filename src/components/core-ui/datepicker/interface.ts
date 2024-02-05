export interface IDatePicker {
  picker?: "time" | "date" | "week" | "month" | "quarter" | "year";
  onChange?: any;
  disabled?: boolean;
  format?: string;
  width?: string | number;
}
