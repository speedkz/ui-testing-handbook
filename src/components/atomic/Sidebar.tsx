import { ChevronDoubleRight } from "components/icons/ChevronDoubleRight";
import { MasterIcon } from "components/icons/MasterIcon";
import { CollectionIcon } from "components/icons/CollectionIcon";
import { BuildingIcon } from "components/icons/BuildingIcon";
import { ContainerIcon } from "components/icons/ContainerIcon";
import { VehicleIcon } from "components/icons/VehicleIcon";
import { VehicleTypeIcon } from "components/icons/VehicleTypeIcon";
import { StorageIcon } from "components/icons/StorageIcon";
import { UsersIcon } from "components/icons/UsersIcon";
import { DashboardIcon } from "components/icons/DashboardIcon";
import { ContainerTypeIcon } from "components/icons/ContainerTypeIcon";
import { SettingIcon } from "components/icons/SettingIcon";

import "./Sidebar.css";
import { useEffect, useState } from "react";
import { COLORS } from "utils/constants/color";
export interface ISidebar {
  defaultCollapsed?: boolean;
}

export const Sidebar = (props: ISidebar) => {
  const { defaultCollapsed } = props;
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const width = collapsed ? 52 : 300;
  const items = [
    { Icon: DashboardIcon, label: "Dashboard" },
    { Icon: CollectionIcon, label: "Collection management" },
    {
      Icon: MasterIcon,
      label: "Master management",
      items: [
        { Icon: UsersIcon, label: "User" },
        { Icon: BuildingIcon, label: "Collection base" },
        { Icon: StorageIcon, label: "Storage" },
        { Icon: ContainerTypeIcon, label: "Container type" },
        { Icon: ContainerIcon, label: "Container" },
        { Icon: VehicleTypeIcon, label: "Vehicle type" },
        { Icon: VehicleIcon, label: "Vehicle" },
      ],
    },
    { Icon: SettingIcon, label: "Setting" },
  ];
  return (
    <div
      className={`base-sidebar ${collapsed ? "base-sidebar--collapsed" : ""}`}
      style={{ width }}
    >
      <SidebarItem
        Icon={ChevronDoubleRight}
        label="Hide side bar"
        onClick={() => setCollapsed(!collapsed)}
      />
      <div></div>
      {items.map((item, i) => (
        <SidebarItem key={i} {...item} onClick={() => null} />
      ))}
    </div>
  );
};

const SidebarItem = ({
  Icon,
  label = "",
  onClick,
  items,
  defaultOpended,
}: {
  Icon: any;
  label: string;
  onClick?;
  items?: any[];
  defaultOpended?: boolean;
}) => {
  const [collapsed, setCollapsed] = useState(!defaultOpended);
  const [defaultColor, setDefaultColor] = useState(COLORS.icon);
  const [color, setColor] = useState(defaultColor);
  const handleClick = () => {
    if (onClick) onClick();
    if (items?.length) setCollapsed(!collapsed);
  };
  useEffect(() => {
    setDefaultColor(collapsed || !items?.length ? COLORS.icon : COLORS.primary);
  }, [items, collapsed]);
  return (
    <div className="base-sidebar__item__wrapper relative w-full">
      <div
        className={`base-sidebar__item ${
          !collapsed && items?.length ? "base-sidebar__item--active" : ""
        }`}
        onMouseEnter={() => setColor(COLORS.primary)}
        onMouseLeave={() => setColor(defaultColor)}
        onClick={handleClick}
      >
        <div className="flex justify-center items-center w-[52px] h-[52px]">
          <Icon color={color} />
        </div>
        <span
          className="text-primary-text-light text-sm font-semibold"
          style={{ color }}
        >
          {label}
        </span>
        <div className="grow"></div>
        {items?.length && (
          <div className="base-sidebar__item__hint">{items?.length}</div>
        )}
      </div>
      <div
        className={`base-sidebar__item__subitems ${
          collapsed ? "max-h-0" : "max-h-[999px]"
        }`}
      >
        {items && items.map((item, i) => <SidebarItem key={i} {...item} />)}
      </div>
    </div>
  );
};
