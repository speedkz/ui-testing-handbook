import { Select, SearchRemoteSelect } from "./Select";
import { useArgs } from "@storybook/client-api";
import axios from "axios";

export default {
  title: "Design System/Atoms/Select",
  component: Select,
  args: {
    options: [...Array(10).keys()].map((x) => ({
      label: `Menu item ${x + 1}`,
      value: x,
    })),
    width: 320,
  },
};

const Template = (args) => <Select {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

export const Multi = Template.bind({});
Multi.args = {
  mode: "multiple",
};

export const SearchLocal = Template.bind({});
SearchLocal.args = {
  showSearch: true,
  filterOption: true,
};
const SearchRemoteTemplate = (args) => {
  const [_, updateArgs] = useArgs();

  const setOptions = (options) => {
    updateArgs({ ...args, options });
  };

  const fetchOptions = () => {
    return axios.get("https://randomuser.me/api/?results=5").then((res) =>
      res.data.results.map((user) => ({
        label: `${user.name.first} ${user.name.last}`,
        value: user.login.username,
      }))
    );
  };
  return (
    <SearchRemoteSelect
      {...args}
      fetchOptions={fetchOptions}
      setOptions={setOptions}
    />
  );
};
export const SearchRemote = SearchRemoteTemplate.bind({});
SearchRemote.args = {
  options: [],
};
