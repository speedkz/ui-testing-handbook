import { RegistrationForm } from "./RegistrationForm";

export default {
  title: "Design System/Atoms/Registration Form",
  component: RegistrationForm,
};

const Template = (args) => <RegistrationForm {...args} />;
export const Basic = Template.bind({});
