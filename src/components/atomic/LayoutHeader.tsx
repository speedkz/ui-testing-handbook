import { faker } from "@faker-js/faker";
import { Avatar } from "antd";
import ATOMICS from "utils/constants/atomic";

interface IProfile {
  image: any;
}
export interface ILayoutHeader {
  height?: number;
  theme?: "dark" | "light" | "xmas";
  profile?: IProfile;
}

export const LayoutHeader = (props: ILayoutHeader) => {
  const {
    height = ATOMICS.LAYOUT_HEADER_HEIGHT,
    profile = { image: faker.internet.avatar() },
  } = props;
  const { image } = profile;
  return (
    <div
      style={{ height }}
      className="relative flex items-center bg-primary px-8"
    >
      <div className="grow"></div>
      <Avatar src={image} />
    </div>
  );
};
