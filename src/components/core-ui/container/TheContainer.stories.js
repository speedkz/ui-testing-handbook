import { TheContainer } from "./TheContainer";

export default {
  title: "Design System/Core Ui/Container",
  component: TheContainer,
};

const Template = (args) => <TheContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Container",
  children: "This is Container",
};
