import { MenuProps } from "antd";

export interface ISidebar extends MenuProps {
  theme?: "light" | "dark";
  mode?: "vertical" | "inline";
  items: any[];
  inlineCollapsed?: boolean;
  className?: string;
}

export type MenuItem = Required<MenuProps>["items"][number];
export interface IBaseSidebar extends Omit<ISidebar, "items"> {}
