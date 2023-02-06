import { Pagination as APagination, PaginationProps } from "antd";
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

export const Pagination = (props: IPagination) => {
  const { showTotal = (total) => `Total ${total} items` } = props;
  return <APagination {...props} showTotal={showTotal} />;
};
