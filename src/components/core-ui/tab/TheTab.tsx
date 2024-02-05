import { Tabs } from "antd";
import { ITab } from "./interface";

export const TheTab = (props: ITab) => {
  return <Tabs {...props} />;
};
