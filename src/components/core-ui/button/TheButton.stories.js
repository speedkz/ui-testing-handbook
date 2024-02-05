import { TheButton } from "./TheButton";

export default {
  title: "Design System/Core Ui/Button",
  component: TheButton,
};

const Template = (args) => <TheButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
  type: "primary",
};
