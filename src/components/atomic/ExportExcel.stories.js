import { faker } from "@faker-js/faker";
import { Button } from "./Button";
import { ExportExcel } from "./ExportExcel";

export default {
  title: "Design System/Atoms/Export Excel",
  component: ExportExcel,
};

const Template = (args) => <ExportExcel {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  element: <Button>Export excel</Button>,
  headers: {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    address: "Address",
    postcode: "Postcode",
  },
  fileName: "Customers_Infomation_xlsx",
  csvData: [...Array(20).keys()].map((x) => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    address: faker.address.cityName(),
    postcode: faker.address.zipCode(),
  })),
};
