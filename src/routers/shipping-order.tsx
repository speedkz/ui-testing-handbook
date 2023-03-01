import { Layout } from "components/layout/Layout";
import ShippingOrder from "pages/shipping-order";

const shippingOrderRoutes = [
  {
    path: "/shipping-order",
    element: (
      <Layout>
        <ShippingOrder />
      </Layout>
    ),
  },
];

export default shippingOrderRoutes;
