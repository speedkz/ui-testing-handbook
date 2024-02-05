import NProgress from "nprogress";
import { FC, useEffect } from "react";

export const TheLoading: FC = () => {
  NProgress.configure({ showSpinner: true });

  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return <></>;
};
