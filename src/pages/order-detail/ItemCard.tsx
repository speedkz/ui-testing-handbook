import { TheCard } from "components/core-ui/card/TheCard";

export interface IItem {
  text: string;
  value: string | number | undefined;
}

interface IProps {
  items: IItem[];
}

export const ItemCard = (props: IProps) => {
  const { items } = props;
  return (
    <TheCard>
      {items.map((item, i) => (
        <div key={i} className="grid grid-cols-2">
          <div className="font-medium text-base">{item.text}</div>
          <div className="text-red-1 font-semibold">{item.value}</div>
        </div>
      ))}
    </TheCard>
  );
};
