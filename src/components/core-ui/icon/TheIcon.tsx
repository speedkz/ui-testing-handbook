import { Suspense, useMemo } from "react";
import { IProps } from "./interface";
import { icons } from "./icons";

export const TheIcon = ({
  icon,
  className,
  rotate,
  color,
  ...rest
}: IProps) => {
  const SvgIcon = useMemo(() => icons[icon], [icon]);

  if (!SvgIcon) return null;

  return (
    <div
      className={className}
      aria-label={icon}
      role="img"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
      }}
      {...rest}
    >
      <Suspense fallback={null}>
        <SvgIcon style={{ width: "100%", height: "100%" }} />
      </Suspense>
    </div>
  );
};
