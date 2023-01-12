import { Collapsible } from "./Collapsible";
import { useArgs } from "@storybook/client-api";

const dribbble = require("assets/images/atomic/dribbble.png");

const Dribbble = () => {
  return <img src={dribbble} alt="dribbble" />;
};

export default {
  title: "Design System/Atoms/Collapsible",
  component: Collapsible,
  argTypes: {
    setActive: { action: "setActive" },
  },
  decorators: [
    (Story) => (
      <div className="rounded-lg bg-white p-6" style={{ width: 600 }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => {
  const [_, updateArgs] = useArgs();
  const handleSetActive = () => {
    updateArgs({ ...args, active: !args.active });
  };
  return <Collapsible {...args} setActive={handleSetActive} />;
};

export const Default = Template.bind({});
Default.args = {
  item: {
    title: "Collapsible",
    content: `Officia nisi tempor consectetur dolore ad irure mollit eu eu. Elit reprehenderit elit non eu commodo est aute veniam reprehenderit qui. Laboris nisi minim et consectetur aute ipsum.
        <br/>
        Officia nostrud enim commodo incididunt exercitation.`,
  },
};

export const PrefixIcon = Template.bind({});
PrefixIcon.args = {
  item: {
    title: "Collapsible with prefix icon",
    content: `Officia nisi tempor consectetur dolore ad irure mollit eu eu. Elit reprehenderit elit non eu commodo est aute veniam reprehenderit qui. Laboris nisi minim et consectetur aute ipsum.
          <br/>
          Officia nostrud enim commodo incididunt exercitation.`,
    prefixIcon: <Dribbble />,
  },
};

export const Active = Template.bind({});
Active.args = {
  item: {
    title: "Collapsible active",
    content: `Officia nisi tempor consectetur dolore ad irure mollit eu eu. Elit reprehenderit elit non eu commodo est aute veniam reprehenderit qui. Laboris nisi minim et consectetur aute ipsum.
          <br/>
          Officia nostrud enim commodo incididunt exercitation.`,
    prefixIcon: <Dribbble />,
  },
  active: true,
};
