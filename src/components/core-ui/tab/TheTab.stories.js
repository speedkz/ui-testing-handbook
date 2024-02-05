import { TheTab } from "./TheTab";

export default {
  title: "Design System/Core Ui/Tab",
  component: TheTab,
};

const Template = (args) => <TheTab {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      key: "1",
      label: "Tab 1",
      children: "Content of Tab Pane 1",
    },
    {
      key: "2",
      label: "Tab 2",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Tab 3",
      children: "Content of Tab Pane 3",
    },
  ],
};
