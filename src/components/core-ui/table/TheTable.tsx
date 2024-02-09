import { Table } from "antd";
import type {
  ColumnsType,
  TablePaginationConfig,
  TableProps,
} from "antd/es/table";
import { TableRowSelection } from "antd/es/table/interface";
import { useElementSize } from "hook/useElementSize";
import { useMemo, useRef } from "react";

export interface ITable<TResource> extends TableProps {
  columns: ColumnsType<TResource>;
  dataSource: TResource[];
  rowSelection?: TableRowSelection<TResource>;
  selectionType?: "checkbox" | "radio";
  pagination?: false | TablePaginationConfig;
}

export const TheTable = <TResource,>(props: ITable<TResource>) => {
  const container = useRef<HTMLDivElement>(null);
  const { height } = useElementSize(container);
  const {
    columns = [],
    dataSource = [],
    selectionType,
    rowSelection,
    scroll,
  } = props;

  const tableHeight = useMemo(
    () => scroll?.y || (height && height - 120),
    [height, scroll?.y]
  );

  return (
    <div className="h-0 grow" ref={container}>
      <Table
        {...props}
        columns={columns}
        dataSource={dataSource}
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        scroll={{ ...scroll, y: tableHeight }}
      />
    </div>
  );
};
