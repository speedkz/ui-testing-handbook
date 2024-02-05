import { Input } from "antd";
import { IInput } from "./interface";
import { useTranslation } from "react-i18next";

export const TheInput = (props: IInput) => {
  const { t } = useTranslation();
  const { placeholder } = props;

  const tPlaceholder = t(placeholder || "");
  return <Input {...props} placeholder={tPlaceholder} />;
};
