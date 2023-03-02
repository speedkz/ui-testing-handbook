import { Button, ButtonClosePanel } from "./Button";

export default {
  title: "Design System/Atoms/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
  type: "primary",
};

const TemplateClosePanel = (args) => <ButtonClosePanel {...args} />;
export const ClosePanel = TemplateClosePanel.bind({})
