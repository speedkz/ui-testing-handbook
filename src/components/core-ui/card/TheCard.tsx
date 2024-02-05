import { Card } from "antd";
import { ICard } from "./interface";

export const TheCard = (props: ICard) => {
  const { children } = props;

  return <Card {...props}>{children}</Card>;
};
