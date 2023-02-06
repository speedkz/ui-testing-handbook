import { Input, PasswordInput, Textarea } from "./Input";

export default {
  title: "Design System/Atoms/Input",
  component: Input,
  args: {
    placeholder: "Basic input",
  },
};

const Template = (args) => <Input {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

export const Password = (args) => <PasswordInput {...args} />;
Password.args = {};

export const BasicTextarea = (args) => <Textarea {...args} />;
BasicTextarea.args = {};
