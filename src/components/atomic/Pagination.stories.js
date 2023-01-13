import { Pagination } from "./Pagination";
import { useArgs } from "@storybook/client-api";

export default {
  title: "Design System/Atoms/Pagination",
  component: Pagination,
  argTypes: {
    setPage: { action: "setPage" },
  },
  decorators: [
    (Story) => (
      <div className="bg-white p-4 rounded-lg">
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => {
  const [_, updateArgs] = useArgs();
  const setPage = (page) => {
    updateArgs({ ...args, page });
  };
  return <Pagination {...args} setPage={setPage} />;
};

export const Basic = Template.bind({});
Basic.args = {
  total: 1000,
  pageSize: 20,
  page: 0,
  pageSizes: [20, 40, 80, 100],
};
