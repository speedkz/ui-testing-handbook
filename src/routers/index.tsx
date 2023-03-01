import { LoadingScreen } from "components/atomic/LoadingScreen";
import { FC, LazyExoticComponent, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import planRoutes from "./plan";
import shippingOrderRoutes from "./shipping-order";

export const Loadable = (Component: LazyExoticComponent<FC>) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

const router = createBrowserRouter([...planRoutes, ...shippingOrderRoutes]);
export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
