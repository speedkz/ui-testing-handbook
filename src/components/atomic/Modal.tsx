import { Modal as AModal } from "antd";

export interface IModal {
  open: boolean;
  onOk?: any;
  onCancel?: any;
  title?: string;
  children?: React.ReactNode;
}
export const Modal = (props: IModal) => {
  const { open, onOk, onCancel, title, children } = props;
  return (
    <AModal title={title} open={open} onOk={onOk} onCancel={onCancel}>
      {children}
    </AModal>
  );
};
