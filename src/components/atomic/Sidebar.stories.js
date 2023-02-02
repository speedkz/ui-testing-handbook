import { Sidebar } from "./Sidebar";

export default {
  title: "Design System/Atoms/Sidebar",
  componenent: Sidebar,
};

const Template = (args) => <Sidebar {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
