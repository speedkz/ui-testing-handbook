import { ThemeConfig } from "antd/es/config-provider";

export enum COLORS {
  PRIMARY = "#C50533",
  PRIMARY_2 = "#FFD9E2",
}

export const theme: ThemeConfig = {
  token: {
    colorPrimary: COLORS.PRIMARY,
  },
  components: {
    Button: {},
    Table: {
      headerBg: COLORS.PRIMARY_2,
      headerColor: COLORS.PRIMARY,
    },
  },
};
