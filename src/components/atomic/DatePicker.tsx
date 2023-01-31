import { Calendar } from "components/icons/Calendar";
import { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { Input } from "./Input";
import "./Datepicker.css";
import { format } from "date-fns";

export interface IDatePicker {
  selected: Date;
  onChange: any;
  width?: number | string;
  dateFormat?: string;
  value?: Date;
}

export const BasicDatePicker = (props: IDatePicker) => {
  const {
    onChange,
    width = "fit-content",
    dateFormat = "dd/MM/yyyy",
    value,
  } = props;
  const [valueStr, setValueStr] = useState("");
  const datepicker = useRef(null);
  const handleClick = () => {
    const current: any = datepicker.current;
    if (!current) return;
    current.setOpen(true);
  };

  useEffect(() => {
    if (!value) return;
    setValueStr(format(value, dateFormat));
  }, [value, dateFormat]);
  return (
    <div className="relative">
      <Input
        prependIcon={<Calendar />}
        width={width}
        placeholder="Please enter the date"
        onClick={handleClick}
        value={valueStr}
      />
      <DatePicker
        className="hidden"
        ref={datepicker}
        selected={value}
        onChange={(date) => onChange(date)}
      />
    </div>
  );
};
