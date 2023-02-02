import { LayoutHeader } from "components/atomic/LayoutHeader";
import { Sidebar } from "components/atomic/Sidebar";

export interface ILayout {
  Page?: any;
}

export const Layout = (props: ILayout) => {
  const { Page } = props;
  return (
    <div className="w-screen h-screen flex flex-col">
      <LayoutHeader />
      <div className="flex grow">
        <Sidebar />
        <div className="bg-page-background grow p-8">{Page}</div>
      </div>
    </div>
  );
};
