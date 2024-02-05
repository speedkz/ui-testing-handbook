import { TheSidebar } from "./TheSidebar";
import { AppstoreOutlined } from "@ant-design/icons";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Option 1", "1", <AppstoreOutlined />),
  getItem("Option 2", "2", <AppstoreOutlined />),
  getItem("Option 3", "3", <AppstoreOutlined />),
  getItem("Navigation One", "sub1", <AppstoreOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Option 7", "7"),
    getItem("Option 8", "8"),
  ]),
  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
  ]),
];

export default {
  title: "Design System/Core Ui/Sidebar",
  component: TheSidebar,
  args: {
    inlineCollapsed: true,
    items,
  },
};

const Template = (args) => <TheSidebar {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
