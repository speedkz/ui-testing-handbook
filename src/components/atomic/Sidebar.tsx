import { Menu, MenuProps } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

export interface ISidebar extends MenuProps {
  theme?: "light" | "dark";
  mode?: "vertical" | "inline";
  items: any[];
  inlineCollapsed?: boolean;
  width?: string | number;
}

type MenuItem = Required<MenuProps>["items"][number];
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

export const Sidebar = (props: ISidebar) => {
  const { width = 300 } = props;
  return (
    <div style={{ width }}>
      <Menu {...props} />
    </div>
  );
};

interface IBaseSidebar extends Omit<ISidebar, "items"> {}
export const BaseSidebar = (props: IBaseSidebar) => {
  const items: MenuProps["items"] = [
    getItem("Shipping order", "shippingOrder", <AppstoreOutlined />),
    getItem("Plan", "plan", <MailOutlined />, [
      getItem("Delivery plan", "deliveryPlan", null),
      getItem("Map planning", "mapPlanning", null),
    ]),
    getItem("Schedule", "schedule", <AppstoreOutlined />),
    getItem("Implement", "implement", <MailOutlined />, [
      getItem("Pick up", "pickup", null),
      getItem("On the way", "onTheWay", null),
      getItem("Deliver Goods", "deliverGood", null),
      getItem("Return", "return", null),
    ]),
    getItem("Track", "track", <MailOutlined />, [
      getItem("Shipping Order Tracking", "shippingOrderTracking", null),
      getItem("Dispatch Order Tracking", "dispatchOrderTracking", null),
    ]),
    getItem("Activity Tracking", "activityTracking", <AppstoreOutlined />),
    getItem("Abnormal", "abnormal", <AppstoreOutlined />),
    getItem("Receipt", "receipt", <MailOutlined />, [
      getItem("Shipper Receipt", "shipperReceipt", null),
      getItem("Driver Receipt", "driverReceipt", null),
    ]),
    getItem("Master Data", "masterData", <MailOutlined />, [
      getItem("Site", "site", null),
      getItem("Customer", "customer", null),
    ]),
  ];
  return <Sidebar {...props} items={items} mode="inline" />;
};
