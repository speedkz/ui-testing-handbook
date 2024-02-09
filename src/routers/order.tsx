import { TheLayout } from "components/core-ui";
import { ManageOrderStatus } from "pages/manage-order-status/ManageOrderStatus";
import { OrderDetail } from "pages/order-detail/OrderDetail";
import { getResourcePath } from "./constant";
import { Resource } from "app-redux/resource/interface";

const resource: Resource = "products";

const orderRoutes = [
  {
    path: getResourcePath(resource, "list"),
    element: (
      <TheLayout>
        <ManageOrderStatus />
      </TheLayout>
    ),
  },
  {
    path: getResourcePath(resource, "detail"),
    element: (
      <TheLayout>
        <OrderDetail />
      </TheLayout>
    ),
  },
];

export default orderRoutes;
