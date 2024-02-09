import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { TheIcon } from "../icon/TheIcon";
import { IContainer } from "./interface";

export const TheContainer = (props: IContainer) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { children, title, to } = props;
  return (
    <div className="flex flex-col px-8 py-6 bg-white shadow=[0_2px_4px_0_#0000001A]">
      <div className="flex items-center gap-3 mb-6">
        {to && <TheIcon icon="Back" onClick={() => navigate(to)} />}
        {title && <div className="font-semibold text-2xl">{t(title)}</div>}
      </div>
      {children}
    </div>
  );
};
