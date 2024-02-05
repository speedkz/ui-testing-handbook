import { IContainer } from "./interface";
import { useTranslation } from "react-i18next";

export const TheContainer = (props: IContainer) => {
  const { t } = useTranslation();
  const { children, title } = props;
  return (
    <div className="px-8 py-6 bg-white shadow=[0_2px_4px_0_#0000001A]">
      {title && <div className="font-semibold text-2xl mb-6">{t(title)}</div>}
      {children}
    </div>
  );
};
