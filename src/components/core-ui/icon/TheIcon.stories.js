import { TheIcon } from "./TheIcon";

export default {
  title: "Design System/Core Ui/Icon",
  component: TheIcon,
};

const Template = (args) => {
  return <TheIcon {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  label: "Icon",
};
