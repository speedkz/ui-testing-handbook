import { ILayout } from "./Layout";

export const FullLayout = (props: ILayout) => {
  const { children } = props;
  return (
    <div className="grid w-screen h-screen place-items-center bg-page-background">
      {children}
    </div>
  );
};
