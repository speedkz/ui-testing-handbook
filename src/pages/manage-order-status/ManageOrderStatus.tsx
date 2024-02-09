import { SearchOutlined } from "@ant-design/icons";
import { IProduct } from "app-redux/product/interface";
import { fetchList } from "app-redux/resource/reducer";
import { AppDispatch, RootState } from "app-redux/store";
import { TheContainer, TheTable } from "components/core-ui";
import { TheInput } from "components/core-ui/input/TheInput";
import { TheTab } from "components/core-ui/tab/TheTab";
import { useResourceNavigate } from "hook/useResourceNavigate";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { columns, tabItems } from "./constant";

export const ManageOrderStatus = () => {
  const { toDetail } = useResourceNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { list, loading } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchList<IProduct>("products")());
  }, [dispatch]);

  const onRowClick = (record: IProduct) => {
    toDetail(record.id);
  };

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

      <TheTable<IProduct>
        loading={loading}
        columns={columns}
        dataSource={list}
        rowKey="id"
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => onRowClick(record), // click row
          };
        }}
      />
    </TheContainer>
  );
};
