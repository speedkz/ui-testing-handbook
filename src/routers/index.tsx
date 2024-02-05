import { FC, LazyExoticComponent, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import authRoutes from "./auth";
import { TheLoading } from "components/core-ui/loading/TheLoading";
import orderRoutes from "./order";

export const Loadable = (Component: LazyExoticComponent<FC>) => (props) => {
  return (
    <Suspense fallback={<TheLoading />}>
      <Component {...props} />
    </Suspense>
  );
};

const router = createBrowserRouter([...authRoutes, ...orderRoutes]);
export const AppRoutes = () => {
  return (
    <Suspense fallback={<TheLoading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
