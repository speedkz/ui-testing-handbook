import { useEffect, useState } from "react";

enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SUCCESS = "success",
  FAIL = "fail",
}

export interface ButtonArgs {
  label: string;
  size: "tiny" | "small" | "normal" | "large";
  type: ButtonType;
  effect: "fill" | "ghost" | "transparent";
  backgroundColor: string;
  number: number;
  disabled: boolean;
}

const TYPE_CLASS_NAMES = {
  [ButtonType.PRIMARY]: {
    fill: "bg-primary text-white",
    ghost: "border bg-white text-primary border-primary",
    transparent: "bg-white text-primary",
  },
  [ButtonType.SECONDARY]: {
    fill: "text-primary-text bg-secondary",
    ghost: "border bg-primary-text text-secondary border-secondary",
    transparent: "bg-primary-text text-secondary",
  },
  [ButtonType.SUCCESS]: {
    fill: "bg-success text-white",
    ghost: "border text-success bg-white border-success",
    transparent: "text-success bg-white",
  },
  [ButtonType.FAIL]: {
    fill: "bg-fail text-white",
    ghost: "border text-fail bg-white border-fail",
    transparent: "text-fail bg-white",
  },
};

const TYPE_CONTRAST_CLASS_NAMES = {
  [ButtonType.PRIMARY]: "text-primary",
  [ButtonType.SECONDARY]: "text-secondary",
  [ButtonType.SUCCESS]: "text-success",
  [ButtonType.FAIL]: "text-fail",
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
    type = ButtonType.PRIMARY,
    effect = "fill",
    disabled,
    size = "normal",
    backgroundColor,
    number,
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
      className={`flex justify-center items-center gap-2 rounded-[40px] px-4 py-0 w-fit text-sm cursor-pointer ${typeStyles} ${sizeStyles}`}
      style={{ backgroundColor: bg }}
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
