import { Table } from "./Table";

export default {
  title: "Design System/Atoms/Table",
  component: Table,
};

const Template = (args) => <Table {...args} />;
export const Basic = Template.bind({});

Basic.args = {
  headers: [
    { text: "Телефон", value: "phone" },
    { text: "ФИО", value: "name" },
    { text: "Адрес", value: "address" },
  ],
  items: [
    {
      phone: "+7495-123-45-67",
      name: "James L.",
      address: "32 St Margarets St. Hendersonville, NC 28792",
    },
    {
      phone: "+7495-123-65-47",
      name: "Meriden O.",
      address: "32 St Margarets St. Hendersonville, NC 28792",
    },
    {
      phone: "+7495-321-45-67",
      name: "John B.",
      address: "32 St Margarets St. Hendersonville, NC 28792",
    },
    {
      phone: "+7495-765-43-21",
      name: "Bruno L.",
      address: "32 St Margarets St. Hendersonville, NC 28792",
    },
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  items: [],
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};
