import Eye from "assets/icons/eye.svg";
import Key from "assets/icons/key.svg";
import { useState } from "react";
export interface IInput {
  placeholder?: string;
  size?: "small" | "normal" | "large";
  prependIcon?: any;
  appendIcon?: any;
  disabled?: boolean;
  error?: boolean;
  success?: boolean;
  width?: string | number;
  type?: string;
  handleClickAppendIcon?: any;
  handleClickPrependIcon?: any;
  register?: any;
  name?: string;
  onClick?: any;
  value?: string | number | Date;
  readOnly?: boolean;
  children?: any;
}

export const Input = (props: IInput) => {
  const {
    placeholder,
    size = "normal",
    prependIcon,
    appendIcon,
    disabled,
    error,
    success,
    width,
    type = "text",
    handleClickAppendIcon,
    handleClickPrependIcon,
    register,
    name,
    onClick,
    value,
    readOnly,
    children,
  } = props;
  const sizes = {
    small: "h-8",
    normal: "h-10",
    large: "h-12",
  };
  return (
    <div
      className={`relative h-10 ${sizes[size]}`}
      style={{ width }}
      onClick={onClick}
    >
      {prependIcon && (
        <div
          className={`flex items-center p-[11px] absolute inset-y-0 ${
            handleClickPrependIcon ? "cursor-pointer" : ""
          }`}
          onClick={handleClickPrependIcon}
        >
          {prependIcon}
        </div>
      )}
      <input
        readOnly={readOnly}
        {...(register && register(name))}
        value={value}
        type={type}
        placeholder={placeholder}
        className={`base-input h-10 ${sizes[size]} ${
          prependIcon ? "pl-[38px]" : ""
        } ${appendIcon ? "pr-[38px]" : ""} ${
          disabled ? "base-input--disabled" : ""
        } ${error ? "base-input--error" : ""} ${
          success ? "base-input--success" : ""
        }`}
      />
      {children}
      {appendIcon && (
        <div
          className={`flex items-center p-[11px] absolute right-0 inset-y-0 ${
            handleClickAppendIcon ? "cursor-pointer" : ""
          }`}
          onClick={handleClickAppendIcon}
        >
          {appendIcon}
        </div>
      )}
    </div>
  );
};

export const PasswordInput = (props) => {
  const [type, setType] = useState("password");
  const prependIcon = <img src={Key} alt="key" />;
  const appendIcon = <img src={Eye} alt="eye" />;
  const handleClickAppendIcon = () => {
    setType(type === "password" ? "text" : "password");
  };
  return (
    <Input
      {...props}
      type={type}
      prependIcon={prependIcon}
      appendIcon={appendIcon}
      handleClickAppendIcon={handleClickAppendIcon}
    />
  );
};
