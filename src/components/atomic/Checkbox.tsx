import { useId } from "react";
import "./Checkbox.css";
import { CheckboxOn } from "components/icons/CheckboxOn";

export interface ICheckbox {
  label?: string;
  checked?: boolean;
  value?: string | number;
  onChange?: any;
  disabled?: boolean;
}

export const Checkbox = (props: ICheckbox) => {
  const { label, checked, value, onChange, disabled } = props;
  const handleChange = () => {
    if (onChange) onChange(!checked);
  };
  const id = useId();
  return (
    <div
      className={`flex items-center checkbox__container ${
        disabled && "checkbox--disabled"
      }`}
    >
      <input
        checked={checked}
        value={value}
        className="hidden"
        id={id}
        type="checkbox"
        onChange={handleChange}
      />
      <div
        className={`w-[26px] h-[26px] flex items-center justify-center rounded hover:border-4 hover:border-secondary-dark`}
        onClick={handleChange}
      >
        {checked ? <CheckboxOn /> : <CheckboxOff />}
      </div>
      <label
        className="text-sm text-primary-text ml-1 hover:text-primary"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export const CheckboxOff = () => {
  return (
    <div className="w-[18px] h-[18px] border rounded border-control-border hover:border-primary bg-white"></div>
  );
};
