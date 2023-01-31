import { Input, PasswordInput as Password } from "./Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default {
  title: "Design System/Atoms/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  placeholder: "Basic input",
  size: "normal",
};

export const PrependIcon = Template.bind({});
PrependIcon.args = {
  ...Basic.args,
  prependIcon: <FontAwesomeIcon icon="circle-exclamation" color="#828282" />,
};

export const AppendIcon = Template.bind({});
AppendIcon.args = {
  ...Basic.args,
  appendIcon: <FontAwesomeIcon icon="circle-exclamation" color="#828282" />,
};

export const BothIcon = Template.bind({});
BothIcon.args = {
  ...PrependIcon.args,
  ...AppendIcon.args,
};

export const PasswordInput = (args) => <Password {...args} />;
