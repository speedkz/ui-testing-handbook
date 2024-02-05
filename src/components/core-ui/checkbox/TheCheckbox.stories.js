import { TheCheckbox } from "./TheCheckbox";
import { useArgs } from "@storybook/client-api";

export default {
  title: "Design System/Core Ui/Checkbox",
  component: TheCheckbox,
};

const Template = (args) => {
  const [_, updateArgs] = useArgs();
  const onChange = () => {
    updateArgs({ ...args, checked: !args.checked });
  };
  return <TheCheckbox {...args} onChange={onChange} />;
};

export const Basic = Template.bind({});
Basic.args = {
  label: "Checkbox",
  checked: false,
};
