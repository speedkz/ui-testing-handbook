import { within } from "@storybook/testing-library";
import { registrationForm } from "components/forms/RegistrationForm";
import { fillForm, submitForm } from "utils/helpers/testing/form";
import { RegistrationForm } from "./RegistrationForm";

export default {
  title: "Design System/Form/Registration Form",
  component: RegistrationForm,
};

const Template = (args) => <RegistrationForm {...args} />;
export const Basic = Template.bind({});

export const Filled = Template.bind({});
Filled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await fillForm(registrationForm, canvas);
  submitForm(canvas);
};
