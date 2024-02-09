import { ConfigProvider } from "antd";
import { AppRoutes } from "routers";
import { theme } from "theme";
import { Provider } from "react-redux";
import { store } from "app-redux/store";

// Create a client

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider theme={theme}>
        <AppRoutes />
      </ConfigProvider>
    </Provider>
  );
}

export default App;
