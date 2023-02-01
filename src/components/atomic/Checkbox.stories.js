import { Checkbox } from "./Checkbox";
import { useArgs } from "@storybook/client-api";

export default {
  title: "Design System/Atoms/Checkbox",
  component: Checkbox,
};

const Template = (args) => {
  const [_, updateArgs] = useArgs();
  const onChange = () => {
    updateArgs({ ...args, checked: !args.checked });
  };
  return <Checkbox {...args} onChange={onChange} />;
};

export const Basic = Template.bind({});
Basic.args = {
  label: "Checkbox",
  checked: false,
};
