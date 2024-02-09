import { ColumnsType } from "antd/es/table/interface";
import { IProduct } from "app-redux/product/interface";
import { Tab } from "components/core-ui/tab/interface";

import { Image } from "antd";

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

export const columns: ColumnsType<IProduct> = [
  {
    title: "Number",
    key: "id",
    dataIndex: "id",
  },
  {
    title: "Title",
    key: "title",
    dataIndex: "title",
  },
  {
    title: "Price",
    key: "price",
    dataIndex: "price",
  },
  {
    title: "Category",
    key: "category",
    dataIndex: "category",
  },
  {
    title: "Description",
    key: "description",
    dataIndex: "description",
  },
  {
    title: "Image",
    key: "image",
    dataIndex: "image",
    render: (value) => <Image src={value} height={40}/>,
  },
];
