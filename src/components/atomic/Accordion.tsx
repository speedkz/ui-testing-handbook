import { useState } from "react";
import { Collapsible, ICollapsible } from "./Collapsible";

export interface AccordionArgs {
  items: ICollapsible[];
  width: number;
  alwaysOpen: boolean;
  defaultActive: number[];
}

export const Accordion = (props: AccordionArgs) => {
  const { items = [], width = 600, alwaysOpen, defaultActive = [] } = props;
  const [active, setActive] = useState<number[]>(defaultActive);
  const handleSetActive = (key) => {
    const index = active.indexOf(key);
    const newActive = alwaysOpen ? [...active] : [];
    if (index > -1) {
      newActive.splice(index, 1);
      setActive(newActive);
    } else {
      newActive.push(key);
      setActive(newActive);
    }
  };
  return (
    <div className="rounded-lg bg-white p-6" style={{ width }}>
      {items.map((item, i) => (
        <Collapsible
          active={active.includes(i)}
          item={item}
          setActive={() => handleSetActive(i)}
          key={i}
        />
      ))}
    </div>
  );
};
