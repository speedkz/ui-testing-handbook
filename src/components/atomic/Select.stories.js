import { Select } from "./Select";
import axios from "axios";

export default {
  title: "Design System/Atoms/Select",
  componenent: Select,
};

const Template = (args) => <Select {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  width: 192,
  options: [...Array(10).keys()].map((x) => ({
    text: `Menu item ${x + 1}`,
    value: x,
  })),
};
