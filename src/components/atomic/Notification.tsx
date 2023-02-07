import { notification } from "antd";
import { forwardRef, useImperativeHandle } from "react";
export const Notification = forwardRef((props, ref) => {
  const key = "updatable";
  const [api, contextHolder] = notification.useNotification();
  useImperativeHandle(ref, () => ({
    notify() {
      api.success({
        key,
        message: "Notification Title",
        description: "description.",
      });
    },
  }));
  return <>{contextHolder}</>;
});
