import { Pagination, PaginationProps } from "antd";
export interface IPagination extends PaginationProps {
  showQuickJumper?: boolean;
  showSizeChanger?: boolean;
  defaultCurrent?: number;
  defaultPageSize?: number;
  total: number;
  disabled?: boolean;
  size?: "default" | "small";
  showTotal?: any;
}

export const ThePagination = (props: IPagination) => {
  const { showTotal = (total) => `Total ${total} items` } = props;
  return <Pagination {...props} showTotal={showTotal} />;
};
