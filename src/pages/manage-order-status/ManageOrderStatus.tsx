import { SearchOutlined } from "@ant-design/icons";
import { TheContainer, TheTable } from "components/core-ui";
import { TheInput } from "components/core-ui/input/TheInput";
import { TheTab } from "components/core-ui/tab/TheTab";
import { columns, tabItems } from "./constant";

export const ManageOrderStatus = () => {
  return (
    <TheContainer title="Manage Order Status">
      <TheTab items={tabItems} />
      <div className="flex justify-end mt-6 mb-4">
        <TheInput
          className="w-[240px]"
          suffix={<SearchOutlined rev={"1"} />}
          placeholder="Search"
        />
      </div>
      <TheTable columns={columns} dataSource={[]} />
    </TheContainer>
  );
};
