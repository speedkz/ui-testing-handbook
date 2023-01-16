import { LayoutHeader } from "./LayoutHeader";

export default {
  title: "Design System/Atoms/Layour Header",
  component: LayoutHeader,
};

const Template = (args) => <LayoutHeader {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
