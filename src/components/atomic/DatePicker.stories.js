import { BasicDatePicker } from "./DatePicker";
import { useArgs } from "@storybook/client-api";

export default {
  title: "Design System/Atoms/Date Picker",
  component: BasicDatePicker,
};

const Template = (args) => {
  const [_, updateArgs] = useArgs();
  const setDate = (value) => {
    updateArgs({ ...args, value });
  };
  return <BasicDatePicker {...args} onChange={setDate} />;
};

export const Basic = Template.bind({});
Basic.args = {};
