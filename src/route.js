import { lazy, Suspense } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

const routes = [
  {
    path: "login",
    element: lazy(() => import("pages/authencation/LoginPage")),
  },
  {
    path: "",
    element: lazy(() => import("pages/homepage/HomePage")),
  },
];
export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route, i) => (
          <Route
            key={i}
            path={route.path}
            element={
              <Suspense fallback={<>loading...</>}>
                <route.element />
              </Suspense>
            }
          />
        ))}
      </Routes>
    </Router>
  );
};
