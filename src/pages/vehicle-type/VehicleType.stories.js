import { Layout } from "components/layout/Layout";
import { VehicleTypeForm } from "components/forms/VehicleTypeForm";

export default {
  title: "Design System/Page/VehicleType",
  component: Layout,
};

const Template = (args) => <Layout {...args} />;
export const Detail = Template.bind({});
Detail.args = {
  Page: (
    <div className="h-full flex justify-center items-center">
      <VehicleTypeForm />
    </div>
  ),
};
