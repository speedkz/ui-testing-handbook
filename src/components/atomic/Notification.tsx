import { notification } from "antd";
import { Button } from "./Button";
export const Notification = () => {
  const key = "updatable";
  const [api, contextHolder] = notification.useNotification();
  const handleClick = () => {
    api.open({
      key,
      message: "Notification Title",
      description: "description.",
    });
  };
  return (
    <>
      {contextHolder}
      <Button onClick={handleClick}>Open the notification box</Button>
    </>
  );
};
