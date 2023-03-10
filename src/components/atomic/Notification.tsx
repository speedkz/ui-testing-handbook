import { notification } from "antd";
import { forwardRef, useImperativeHandle } from "react";
export interface INotification {
  success: (message?, description?) => void;
  error: (message?, description?) => void;
}
export const Notification = forwardRef((props, ref) => {
  const key = "updatable";
  const [api, contextHolder] = notification.useNotification();
  useImperativeHandle(ref, () => ({
    success(message = "Notification Title", description = "description") {
      api.success({
        key,
        message,
        description,
      });
    },
    error(message = "Notification Title", description = "description") {
      api.error({
        key,
        message,
        description,
      });
    },
  }));
  return <>{contextHolder}</>;
});
