import { ChakraProvider } from "@chakra-ui/react";
import { initialize, mswDecorator } from "msw-storybook-addon";
import { theme } from "../src/theme";
import "index.css";
import "styles/atomic/animation.css";

initialize();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "white",
    values: [
      { name: "blue", value: "#2cc5d2" },
      { name: "white", value: "#fff" },
    ],
  },
};

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  ),
  mswDecorator,
];
