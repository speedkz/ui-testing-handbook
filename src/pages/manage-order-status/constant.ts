import { ColumnsType } from "antd/es/table/interface";
import { Tab } from "components/core-ui/tab/interface";

export const tabItems: Tab[] = [
  {
    label: "New Order",
    key: "1",
  },
  {
    label: "Accepted",
    key: "2",
  },
  {
    label: "Inprogress",
    key: "3",
  },
  {
    label: "Delivering",
    key: "4",
  },
  {
    label: "Done",
    key: "5",
  },
  {
    label: "Rejected",
    key: "6",
  },
];

export const columns: ColumnsType = [
  {
    title: "Number",
    key: "1",
  },
  {
    title: "Order ID",
    key: "2",
  },
  {
    title: "Date order",
    key: "3",
  },
  {
    title: "Quantity",
    key: "4",
  },
  {
    title: "Customer",
    key: "5",
  },
  {
    title: "Total",
    key: "6",
  },
];
