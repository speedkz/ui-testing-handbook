import { Table as ATable } from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";

export interface ITable {
  columns: ColumnsType<any>;
  dataSource: any[];
  rowSelection?: any;
  selectionType?: "checkbox" | "radio";
  pagination?: false | TablePaginationConfig;
}

export const Table = (props: ITable) => {
  const { columns = [], dataSource = [], selectionType, rowSelection } = props;
  return (
    <ATable
      {...props}
      columns={columns}
      dataSource={dataSource}
      rowSelection={{
        type: selectionType,
        ...rowSelection,
      }}
    />
  );
};
