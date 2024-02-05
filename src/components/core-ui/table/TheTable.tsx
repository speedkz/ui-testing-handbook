import { Table } from "antd";
import type {
  ColumnsType,
  TablePaginationConfig,
  TableProps,
} from "antd/es/table";

export interface ITable extends TableProps<any> {
  columns: ColumnsType<any>;
  dataSource: any[];
  rowSelection?: any;
  selectionType?: "checkbox" | "radio";
  pagination?: false | TablePaginationConfig;
}

export const TheTable = (props: ITable) => {
  const { columns = [], dataSource = [], selectionType, rowSelection } = props;
  return (
    <Table
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
