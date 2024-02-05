import { Button } from "antd";
import { IButton } from "./interface";

export const TheButton = (props: IButton) => {
  const { children, type = "primary" } = props;

  return (
    <Button {...props} type={type}>
      {children}
    </Button>
  );
};
