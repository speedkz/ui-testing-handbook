import { TheHeader } from "./TheHeader";

export default {
  title: "Design System/Core Ui/Header",
  component: TheHeader,
};

const Template = (args) => <TheHeader {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
