import { HTMLAttributes } from "react";

declare const Icons: readonly ["Logo"];
export type Icon = (typeof Icons)[number];

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  icon: Icon;
  className?: string;
  rotate?: string;
  color?: string;
}
