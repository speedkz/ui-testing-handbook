import { BaseCollapse as Collapse } from "./Collapse";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export default {
  title: "Design System/Atoms/Collapse",
  component: Collapse,
  decorators: [(Story) => <Story />],
  args: {
    items: [...Array(4).keys()].map((i) => ({
      header: `This is panel header ${i}`,
      text,
    })),
  },
};

const Template = (args) => <Collapse {...args} />;

export const Default = Template.bind({
  defaultActiveKey: ["1"],
});
