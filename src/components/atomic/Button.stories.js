import { Button } from "./Button";

export default {
  title: "Design System/Atoms/Button",
  component: Button,
};

const Template = (args) => <Button {...args}></Button>;

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  size: "normal",
  effect: "fill",
  type: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, type: "secondary" };

export const Success = Template.bind({});
Success.args = { ...Primary.args, type: "success" };

export const Fail = Template.bind({});
Fail.args = { ...Primary.args, type: "fail" };
