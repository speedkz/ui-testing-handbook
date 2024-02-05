import { TheRadio, TheRadioGroup } from "./TheRadio";
import { useArgs } from "@storybook/client-api";

export default {
  title: "Design System/Core Ui/Radio",
  component: TheRadio,
  args: {
    children: "Radio",
  },
};

const Template = (args) => <TheRadio {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

export const Group = (args) => {
  const [_, setArgs] = useArgs();
  const onChange = (value) => {
    setArgs({ ...args, value });
  };
  return <TheRadioGroup {...args} onChange={onChange} />;
};

Group.args = {
  value: 1,
  options: [...Array(4).keys()].map((i) => ({
    text: `Radio ${i}`,
    value: i,
  })),
};
