import { Radio, RadioGroup } from "./Radio";
import { useArgs } from "@storybook/client-api";

export default {
  title: "Design System/Atoms/Radio",
  component: Radio,
  args: {
    children: "Radio",
  },
};

const Template = (args) => <Radio {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

export const Group = (args) => {
  const [_, setArgs] = useArgs();
  const onChange = (value) => {
    setArgs({ ...args, value });
  };
  return <RadioGroup {...args} onChange={onChange} />;
};

Group.args = {
  value: 1,
  options: [...Array(4).keys()].map((i) => ({
    text: `Radio ${i}`,
    value: i,
  })),
};
