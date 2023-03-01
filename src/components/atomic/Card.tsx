import { Card as ACard, CardProps } from "antd";

export interface CardArgs extends CardProps {
  width?: string | number;
}

export const Card = (props: CardArgs) => {
  const { width } = props;
  return <ACard style={{ width }} {...props} />;
};
