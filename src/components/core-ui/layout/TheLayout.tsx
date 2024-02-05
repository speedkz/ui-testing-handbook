import { BaseSidebar, TheHeader } from "components/core-ui";

export interface ILayout {
  children?: any;
}

export const TheLayout = (props: ILayout) => {
  const { children } = props;
  return (
    <div className="grid grid-cols-5 h-screen">
      <BaseSidebar />
      <div className="col-span-4 grid grid-rows-[auto_1fr]">
        <TheHeader />
        {children}
      </div>
    </div>
  );
};
