import { FullLayout } from "components/layout/FullLayout";
import { SimpleLoginPage } from "pages/authencation/SimpleLoginPage";

const authRoutes = [
  {
    path: "/",
    element: (
      <FullLayout>
        <SimpleLoginPage />
      </FullLayout>
    ),
  },
];

export default authRoutes;
