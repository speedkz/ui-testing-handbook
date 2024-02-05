import { TheLoading } from "./TheLoading";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: TheLoading,
  title: "Design System/Core Ui/TheLoading",
};

const Template = (args) => <TheLoading {...args} />;
export const Basic = Template.bind({});
Basic.args = {};
