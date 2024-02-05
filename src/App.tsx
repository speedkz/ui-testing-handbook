import { ConfigProvider } from "antd";
import { AppRoutes } from "routers";
import { theme } from "theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <ConfigProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </ConfigProvider>
  );
}

export default App;
