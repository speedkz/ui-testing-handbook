import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import { IBaseSidebar, ISidebar, MenuItem } from "./interface";
import { TheIcon } from "../icon/TheIcon";

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

export const TheSidebar = (props: ISidebar) => {
  return (
    <div className="grid grid-rows-[auto_1fr] shadow-[0_0_4px_0_#00000026] bg-white">
      <div className="flex justify-center mt-2 mb-8">
        <TheIcon icon="Logo" className="w-[150px]" />
      </div>
      <Menu {...props} />
    </div>
  );
};

export const BaseSidebar = (props: IBaseSidebar) => {
  const items: MenuProps["items"] = [
    getItem("Navigation One", "sub1", <MailOutlined rev="1" />, [
      getItem(
        "Item 1",
        "g1",
        null,
        [getItem("Option 1", "1"), getItem("Option 2", "2")],
        "group"
      ),
      getItem(
        "Item 2",
        "g2",
        null,
        [getItem("Option 3", "3"), getItem("Option 4", "4")],
        "group"
      ),
    ]),

    getItem("Navigation Two", "sub2", <AppstoreOutlined rev="1" />, [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Submenu", "sub3", null, [
        getItem("Option 7", "7"),
        getItem("Option 8", "8"),
      ]),
    ]),

    { type: "divider" },

    getItem("Navigation Three", "sub4", <SettingOutlined rev="1" />, [
      getItem("Option 9", "9"),
      getItem("Option 10", "10"),
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),

    getItem(
      "Group",
      "grp",
      null,
      [getItem("Option 13", "13"), getItem("Option 14", "14")],
      "group"
    ),
  ];
  return <TheSidebar {...props} items={items} mode="inline" />;
};
