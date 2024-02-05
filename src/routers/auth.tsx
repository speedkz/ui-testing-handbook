import { FullLayout } from "components/core-ui";
import { LoginPage } from "pages/authencation/LoginPage";

const authRoutes = [
  {
    path: "/",
    element: (
      <FullLayout>
        <LoginPage />
      </FullLayout>
    ),
  },
];

export default authRoutes;
