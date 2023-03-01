import { Layout } from "components/layout/Layout";
import DeliveryPlan from "pages/plan/delivery-plan";
import { Outlet } from "react-router-dom";

const planRoutes = [
  {
    path: "/plan",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: "delivery-plan",
        element: <DeliveryPlan />,
      },
    ],
  },
];
export default planRoutes;
