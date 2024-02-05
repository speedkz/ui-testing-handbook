import { TheLayout } from "components/core-ui";
import { ManageOrderStatus } from "pages/manage-order-status/ManageOrderStatus";

const orderRoutes = [
  {
    path: "/order/manage-status",
    element: (
      <TheLayout>
        <ManageOrderStatus />
      </TheLayout>
    ),
  },
];

export default orderRoutes;
