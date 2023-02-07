import { LoginForm } from "./LoginForm";
import { within, userEvent } from "@storybook/testing-library";
import { fillForm, submitForm } from "utils/helpers/testing/form";
import { defaultformFields as LoginFields } from "components/forms/LoginForm";

export default {
  title: "Design System/Form/Login Form",
  component: LoginForm,
};

const Template = (args) => <LoginForm {...args} />;
export const Basic = Template.bind({});

export const Filled = Template.bind({});
Filled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await fillForm(LoginFields, canvas);
  const rememberCkb = canvas.getByTestId("remember-me", {
    selector: "checkbox",
  });
  await userEvent.click(rememberCkb);
  submitForm(canvas);
};
