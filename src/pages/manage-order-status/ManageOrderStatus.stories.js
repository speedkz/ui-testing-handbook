import { TheLayout } from "components/core-ui";
import { ManageOrderStatus } from "./ManageOrderStatus";

export default {
  title: "Pages/Order/Manage Status",
  component: ManageOrderStatus,
};

const Template = (args) => <ManageOrderStatus {...args} />;

export const Default = Template.bind({});

const TemplateWithLayout = (args) => (
  <TheLayout>
    <ManageOrderStatus {...args} />
  </TheLayout>
);

export const WithLayout = TemplateWithLayout.bind({});
