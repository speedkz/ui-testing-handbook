import { Collapse } from "antd";

const { Panel } = Collapse;

export interface IPanel {
  header: string;
  text: string;
}
export interface ICollapse {
  items: IPanel[];
  defaultActiveKey?: string[];
  onChange?: any;
}

export const BaseCollapse = (props: ICollapse) => {
  const { items = [], defaultActiveKey, onChange } = props;
  return (
    <Collapse defaultActiveKey={defaultActiveKey} onChange={onChange}>
      {items.map(({ header, text }, i) => (
        <Panel header={header} key={i}>
          <p>{text}</p>
        </Panel>
      ))}
    </Collapse>
  );
};
