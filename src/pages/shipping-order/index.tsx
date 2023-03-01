import { faker } from "@faker-js/faker";
import { Table } from "components/atomic/Table";

const ShippingOrder = () => {
  return (
    <div>
      <ListShippingTable />
    </div>
  );
};

export default ShippingOrder;

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

const ListShippingTable = () => {
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
  return <Table columns={shippingOrderColumns} dataSource={dataSource} />;
};
