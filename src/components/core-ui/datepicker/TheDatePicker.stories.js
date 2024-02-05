import { TheDatePicker, TheRangePicker } from "./TheDatePicker";

export default {
  title: "Design System/Core Ui/Date Picker",
  component: TheDatePicker,
};

const Template = (args) => <TheDatePicker {...args} />;
export const Basic = Template.bind({});
Basic.args = {};

export const Range = (args) => <TheRangePicker {...args} />;
Range.args = {};
