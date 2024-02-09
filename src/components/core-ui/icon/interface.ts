import { HTMLAttributes } from "react";

declare const Icons: readonly ["Logo", "Back"];
export type Icon = (typeof Icons)[number];

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  icon: Icon;
  className?: string;
  rotate?: string;
  color?: string;
}
