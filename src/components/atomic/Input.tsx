import { Input as AInput, InputProps } from "antd";
import { ReactNode } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

export interface ITextArea {
  placeholder?: string;
  maxLength?: number;
  rows?: number;
  autoSize?: boolean;
}

export interface IInput extends ITextArea, InputProps {
  status?: "error" | "warning";
  prefix?: ReactNode;
  suffix?: ReactNode;
  allowClear?: boolean;
}

export const Input = (props: IInput) => {
  return <AInput {...props} />;
};

export const PasswordInput = (props: IInput) => {
  return (
    <AInput.Password
      {...props}
      placeholder="input password"
      iconRender={(visible) =>
        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
      }
    />
  );
};

export const Textarea = (props: ITextArea) => {
  return <AInput.TextArea {...props} />;
};
