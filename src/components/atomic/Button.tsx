import { useEffect, useState } from "react";

export interface ButtonArgs {
  label?: string;
  size?: "tiny" | "small" | "normal" | "large";
  type?: "primary" | "secondary" | "success" | "fail";
  effect?: "fill" | "ghost" | "transparent";
  backgroundColor?: string;
  number?: number;
  disabled?: boolean;
  onClick: any;
  width?: string | number;
}

const TYPE_CLASS_NAMES = {
  primary: {
    fill: "bg-primary text-white",
    ghost: "border bg-white text-primary border-primary",
    transparent: "bg-white text-primary",
  },
  secondary: {
    fill: "text-primary-text bg-secondary",
    ghost: "border bg-white text-primary-text border-secondary-dark",
    transparent: "bg-primary-text text-secondary",
  },
  success: {
    fill: "bg-success text-white",
    ghost: "border text-success bg-white border-success",
    transparent: "text-success bg-white",
  },
  fail: {
    fill: "bg-fail text-white",
    ghost: "border text-fail bg-white border-fail",
    transparent: "text-fail bg-white",
  },
};

const TYPE_CONTRAST_CLASS_NAMES = {
  primary: "text-primary",
  secondary: "text-secondary",
  success: "text-success",
  fail: "text-fail",
};

const SIZE_CLASS_NAMES = {
  tiny: `text-xs h-6`,
  small: `h-8`,
  normal: `h-10`,
  large: `h-12`,
};

export const Button = (props: ButtonArgs) => {
  const {
    label,
    type = "primary",
    effect = "fill",
    disabled,
    size = "normal",
    backgroundColor,
    number,
    onClick,
    width,
  } = props;

  const [typeStyles, setTypeStyles] = useState(TYPE_CLASS_NAMES[type][effect]);
  const [sizeStyles, setSizeStyles] = useState(SIZE_CLASS_NAMES[size]);
  const [bg, setBg] = useState(backgroundColor);

  useEffect(() => {
    setBg(backgroundColor);
  }, [backgroundColor]);

  useEffect(() => {
    setSizeStyles(SIZE_CLASS_NAMES[size]);
  }, [size]);

  useEffect(() => {
    setTypeStyles(TYPE_CLASS_NAMES[type][effect]);
  }, [type, effect]);

  return (
    <div
      className={`flex justify-center items-center gap-2 rounded-[40px] px-4 py-0 w-fit text-sm cursor-pointer ${typeStyles} ${sizeStyles} ${
        disabled && "btn--disabled"
      }`}
      style={{ backgroundColor: bg, width }}
      onClick={onClick}
    >
      <span>{label}</span>
      {Boolean(number) && <Quantity number={number} type={type} />}
    </div>
  );
};

const Quantity = (props) => {
  const { number, type } = props;
  return (
    <span
      className={`px-1 py-0 bg-white rounded ${TYPE_CONTRAST_CLASS_NAMES[type]}`}
    >
      {number}
    </span>
  );
};
