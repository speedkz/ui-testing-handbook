import { Modal } from "./Modal";
import { useArgs } from "@storybook/client-api";

export default {
  title: "Design System/Atoms/Modal",
  component: Modal,
  args: {
    open: true,
    title: "Modal",
    children: (
      <>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </>
    ),
  },
};

const Template = (args) => {
  const [_, updateArgs] = useArgs();
  const onOk = (value) => {
    updateArgs({ ...args, open: false });
  };
  const onCancel = (value) => {
    updateArgs({ ...args, open: false });
  };
  return <Modal {...args} onOk={onOk} onCancel={onCancel} />;
};
export const Basic = Template.bind({});
Basic.args = {};
