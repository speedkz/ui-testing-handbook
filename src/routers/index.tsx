import {
  TheLoadingRoute
} from "components/core-ui/loading/TheLoading";
import { FC, LazyExoticComponent, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import authRoutes from "./auth";
import orderRoutes from "./order";

export const Loadable = (Component: LazyExoticComponent<FC>) => (props) => {
  return (
    <Suspense fallback={<TheLoadingRoute />}>
      <Component {...props} />
    </Suspense>
  );
};

const router = createBrowserRouter([...authRoutes, ...orderRoutes]);
export const AppRoutes = () => {
  return (
    <Suspense fallback={<TheLoadingRoute />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
