import { ChakraProvider } from "@chakra-ui/react";
import { AppRoutes } from "./route";
import { theme } from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppRoutes />
    </ChakraProvider>
  );
}

export default App;
