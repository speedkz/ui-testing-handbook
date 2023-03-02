import { SlideOver } from "./SlideOver";

export default {
  component: SlideOver,
  title: "Design System/Atoms/Slide Over",
};

const Template = (...args) => <SlideOver {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
