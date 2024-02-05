import { TabPaneProps, TabsProps } from "antd";

export interface Tab extends Omit<TabPaneProps, "tab"> {
  key: string;
  label: React.ReactNode;
}

export interface ITab extends TabsProps {
  items?: Tab[];
}
