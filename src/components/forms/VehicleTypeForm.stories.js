import { within } from "@storybook/testing-library";
import { defaultformFields } from "components/forms/VehicleTypeForm";
import { fillForm, submitForm } from "utils/helpers/testing/form";
import { VehicleTypeForm } from "./VehicleTypeForm";

export default {
  title: "Design System/Form/Vehicle Type Form",
  component: VehicleTypeForm,
};

const Template = (args) => <VehicleTypeForm {...args} />;
export const Basic = Template.bind({});

export const Filled = Template.bind({});
Filled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await fillForm(defaultformFields, canvas);
  submitForm(canvas);
};
