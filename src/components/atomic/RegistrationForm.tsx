import { useState } from "react";
import { Card } from "./Card";

export interface IRegistrationForm {
  gender: string;
  name: string;
  lastname: string;
  email: string;
  phone?: string;
  password: string;
  birthday?: string;
  country?: number;
}

export const RegistrationForm = (props: IRegistrationForm) => {
  return (
    <Card className="px-6 py-8">
      <div className="text-h4 mb-4 text-primary-text">Registration</div>
      <div className="text-paragraph text-primary-text-light mb-8">
        Enter your registration details
      </div>
      <Switcher />
    </Card>
  );
};

const Switcher = ({ onChange }: { onChange? }) => {
  const [value, setValue] = useState("");
  const handleChange = (value) => {
    setValue(value);
    if (onChange) onChange(value);
  };
  let options = [
    { text: "Male", value: "Male" },
    { text: "Female", value: "Female" },
  ];
  return (
    <div className="base-switcher">
      {options.map((option) => (
        <div
          key={option.value}
          className={`${
            value === option.value ? "bg-primary-light text-white" : ""
          }`}
          onClick={() => handleChange(option.value)}
        >
          {option.text}
        </div>
      ))}
    </div>
  );
};
