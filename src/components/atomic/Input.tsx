export interface IInput {
  placeholder?: string;
  size?: "small" | "normal" | "large";
  prependIcon?: any;
  appendIcon?: any;
  disabled?: boolean;
  error?: boolean;
  success?: boolean;
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
  } = props;
  const sizes = {
    small: "h-8",
    normal: "h-10",
    large: "h-12",
  };
  return (
    <div className="relative w-fit">
      {prependIcon && (
        <div className="flex p-[11px] absolute inset-y-0">{prependIcon}</div>
      )}
      <input
        type="text"
        placeholder={placeholder}
        className={`base-input h-10 ${sizes[size]} ${
          prependIcon ? "pl-[38px]" : ""
        } ${appendIcon ? "pr-[38px]" : ""} ${
          disabled ? "base-input--disabled" : ""
        } ${error ? "base-input--error" : ""} ${
          success ? "base-input--success" : ""
        }`}
      />
      {appendIcon && (
        <div className="flex p-[11px] absolute right-0 inset-y-0">
          {appendIcon}
        </div>
      )}
    </div>
  );
};
