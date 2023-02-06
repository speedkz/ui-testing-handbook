import { initialize, mswDecorator } from "msw-storybook-addon";
import "index.css";
import "styles/atomic/animation.css";
import "plugins";
import 'antd/dist/reset.css';

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
      { name: "highlight", value: "#F0F0F0" },
    ],
  },
};

export const decorators = [(Story) => <Story />, mswDecorator];
