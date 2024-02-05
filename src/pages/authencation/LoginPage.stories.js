import { LoginPage } from "./LoginPage";

export default {
  title: "Pages/Authen/Login Page",
  component: LoginPage,
};

const Template = (args) => <LoginPage {...args} />;

export const Default = Template.bind({});
