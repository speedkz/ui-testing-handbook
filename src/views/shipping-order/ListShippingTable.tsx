import { faker } from "@faker-js/faker";
import { SlideOver } from "components/atomic/SlideOver";
import { Table } from "components/atomic/Table";
import { useTable } from "hook/useTable";
import { useState } from "react";

const shippingOrderColumns = [
  {
    title: "information",
    dataIndex: "information",
    key: "information",
  },
  {
    title: "Shipping Order Number",
    dataIndex: "shippingOrderNumber",
    key: "shippingOrderNumber",
  },
  {
    title: "status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Upstream Tracking Number",
    dataIndex: "upstreamTrackingNumber",
    key: "upstreamTrackingNumber",
  },
  {
    title: "external",
    dataIndex: "external",
    key: "external",
  },
  {
    title: "Customer SAP Code",
    dataIndex: "customerSAPCode",
    key: "customerSAPCode",
  },
  {
    title: "Surcharge/Discount",
    dataIndex: "surchargeDiscount",
    key: "surchargeDiscount",
  },
  {
    title: "Business Type",
    dataIndex: "businessType",
    key: "businessType",
  },
  {
    title: "Customer Name",
    dataIndex: "customerName",
    key: "customerName",
  },
  {
    title: "[Origin] Site Name",
    dataIndex: "originSiteName",
    key: "originSiteName",
  },
];

export const ListShippingTable = () => {
  const [open, setOpen] = useState(false);
  const [tableHeight, setTableHeight] = useState(0);
  console.log(tableHeight)
  const containerId = "shipping-table";
  useTable(containerId, setTableHeight);
  const dataSource = [...Array(30).keys()].map((x) => ({
    information: faker.internet.domainWord(),
    shippingOrderNumber: faker.internet.ip(),
    status: faker.science.chemicalElement(),
    upstreamTrackingNumber: faker.internet.ip(),
    external: faker.animal.bear(),
    customerSAPCode: faker.color.colorByCSSColorSpace(),
    surchargeDiscount: faker.finance.pin(),
    businessType: faker.finance.currencyName(),
    customerName: faker.name.fullName(),
    originSiteName: faker.address.city(),
  }));
  return (
    <div id={containerId}>
      <SlideOver open={open} setOpen={setOpen} width="800px" />
      <Table
        scroll={{
          x: "100%",
        }}
        columns={shippingOrderColumns}
        dataSource={dataSource}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              setOpen(true);
            }, // click row
            onDoubleClick: (event) => {}, // double click row
            onContextMenu: (event) => {}, // right button click row
            onMouseEnter: (event) => {}, // mouse enter row
            onMouseLeave: (event) => {}, // mouse leave row
          };
        }}
      />
    </div>
  );
};
