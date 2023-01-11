import { Menu } from "./Menu";
import { Primary } from "./Button.stories";

export default {
  title: "Design System/Atoms/Menu",
  component: Menu,
  args: {
    options: [...Array(10).keys()].map((x) => ({
      text: `Menu item ${x + 1}`,
      value: x,
    })),
    width: 192,
  },
};

const Template = (args) => <Menu {...args}></Menu>;
export const Horizontal = Template.bind({});
Horizontal.args = {
  container: <Primary {...Primary.args} />,
};

export const Vertical = Template.bind({});
Vertical.args = {};
