import { LoadingScreen } from "./LoadingScreen";

export default {
  component: LoadingScreen,
  title: "Design System/Atoms/Loading Screen",
};

const Template = (args) => <LoadingScreen {...args} />;
export const Basic = Template.bind({});
Basic.args = {};
