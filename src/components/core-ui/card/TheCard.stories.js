import { TheCard } from "./TheCard";

export default {
  title: "Design System/Core Ui/Card",
  component: TheCard,
};

const Template = (args) => <TheCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Card",
};
