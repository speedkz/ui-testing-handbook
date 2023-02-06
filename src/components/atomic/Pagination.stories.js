import { Pagination } from "./Pagination";
import { useArgs } from "@storybook/client-api";

export default {
  title: "Design System/Atoms/Pagination",
  component: Pagination,
  args: {
    total: 500,
  },
};

const Template = (args) => {
  const [_, updateArgs] = useArgs();
  const setPage = (page) => {
    updateArgs({ ...args, page });
  };
  return <Pagination {...args} setPage={setPage} />;
};

export const Basic = Template.bind({});
Basic.args = {};
