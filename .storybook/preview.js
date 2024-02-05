import { initialize, mswDecorator } from "msw-storybook-addon";
import { MemoryRouter } from "react-router";
import { ConfigProvider } from "antd";

import { theme } from "theme";
import "../src/setup";

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
    default: "blue",
    values: [
      { name: "blue", value: "#2cc5d2" },
      { name: "white", value: "#fff" },
      { name: "highlight", value: "#F0F0F0" },
    ],
  },
};

export const decorators = [
  (Story) => (
    <ConfigProvider theme={theme}>
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    </ConfigProvider>
  ),
  mswDecorator,
];
