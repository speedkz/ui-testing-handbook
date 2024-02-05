import { faker } from "@faker-js/faker";
import { Avatar } from "antd";

interface IProfile {
  image: any;
}
export interface ILayoutHeader {
  height?: number;
  theme?: "dark" | "light" | "xmas";
  profile?: IProfile;
}

export const TheHeader = (props: ILayoutHeader) => {
  const { height = 60, profile = { image: faker.internet.avatar() } } = props;
  const { image } = profile;
  return (
    <div
      style={{ height }}
      className="relative flex items-center bg-white px-8"
    >
      <div className="grow"></div>
      <Avatar src={image} />
    </div>
  );
};
