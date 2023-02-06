import { DatePicker, RangePicker } from "./Datepicker";

export default {
  title: "Design System/Atoms/Date Picker",
  component: DatePicker,
};

const Template = (args) => <DatePicker {...args} />;
export const Basic = Template.bind({});
Basic.args = {};

export const Range = (args) => <RangePicker {...args} />;
Range.args = {};
