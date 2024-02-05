import { ThePagination } from "./ThePagination";
import { useArgs } from "@storybook/client-api";

export default {
  title: "Design System/Core Ui/Pagination",
  component: ThePagination,
  args: {
    total: 500,
  },
};

const Template = (args) => {
  const [_, updateArgs] = useArgs();
  const setPage = (page) => {
    updateArgs({ ...args, page });
  };
  return <ThePagination {...args} setPage={setPage} />;
};
export const Basic = Template.bind({});
Basic.args = {};
