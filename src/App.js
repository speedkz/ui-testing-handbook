import { ChakraProvider } from "@chakra-ui/react";
import { InboxScreen } from "./InboxScreen";
import { LoginScreen } from "./LoginScreen";
import { theme } from "./theme";
import { useAuth } from "./useAuth";

function App() {
  const [user, logIn] = useAuth();

  return (
    <ChakraProvider theme={theme}>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {user?.token ? <InboxScreen /> : <LoginScreen onLogIn={logIn} />}
    </ChakraProvider>
  );
}

export default App;
