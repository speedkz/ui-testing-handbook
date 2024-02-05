import { Radio, Space } from "antd";
import { IRadio } from "./interface";

export const TheRadio = (props: IRadio) => {
  return <Radio {...props} />;
};

export const TheRadioGroup = (props: IRadio) => {
  const { onChange, value, direction, options = [] } = props;
  return (
    <>
      <Radio.Group
        data-testid={props["data-testid"]}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      >
        <Space direction={direction}>
          {options.map((option) => (
            <Radio key={option.value} value={option.value}>
              {option.text}
            </Radio>
          ))}
        </Space>
      </Radio.Group>
    </>
  );
};
