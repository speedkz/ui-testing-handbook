import { Radio as ARadio, RadioProps, Space } from "antd";

export interface IRadio extends RadioProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: any;
  direction?: "vertical" | "horizontal" | undefined;
  options?: { text: string; value: string | number }[];
  size?: "large" | "middle" | "small";
}

export const Radio = (props: IRadio) => {
  return <ARadio {...props} />;
};

export const RadioGroup = (props: IRadio) => {
  const { onChange, value, direction, options = [] } = props;
  return (
    <ARadio.Group onChange={(e) => onChange(e.target.value)} value={value}>
      <Space direction={direction}>
        {options.map((option) => (
          <Radio key={option.value} value={option.value}>
            {option.text}
          </Radio>
        ))}
      </Space>
    </ARadio.Group>
  );
};
