import { Card } from "components/atomic/Card";
import { LayoutHeader } from "components/atomic/LayoutHeader";
import { BaseSidebar } from "components/atomic/Sidebar";
import "./layout.scss";

export interface ILayout {
  children?: any;
}

export const Layout = (props: ILayout) => {
  const { children } = props;
  return (
    <div className="layout__container">
      <div className="header">
        <LayoutHeader />
      </div>
      <div className="sidebar">
        <BaseSidebar width={"100%"} />
      </div>
      <div className="main bg-page-background">
        <Card>{children}</Card>
      </div>
    </div>
  );
};
