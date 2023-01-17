import ATOMICS from "utils/constants/atomic";
import Logo from "assets/images/atomic/Logo.svg";
import DarkLogo from "assets/images/atomic/Logo Dark.svg";
import Solar from "assets/images/atomic/solar.svg";
import { Avatar } from "./Avatar";
const XmasLogo = require("assets/images/atomic/LogoXmas.png");

interface IProfile {
  image: any;
}
export interface ILayoutHeader {
  height?: number;
  theme: "dark" | "light" | "xmas";
  profile: IProfile;
}

export const LayoutHeader = (props: ILayoutHeader) => {
  const {
    height = ATOMICS.LAYOUT_HEADER_HEIGHT,
    theme = "light",
    profile = { image: "" },
  } = props;
  const { image } = profile;
  return (
    <div
      style={{ height }}
      className="relative flex items-center bg-primary-dark px-8"
    >
      <div className="absolute inset-x-0 top-0 flex h-[6px]">
        <div className="bg-primary-light w-7/12"></div>
        <div className=" bg-primary grow"></div>
      </div>
      <div className="flex items-center">
        <HeaderLogo theme={theme} />
      </div>
      <div className="grow"></div>
      <Mode theme={theme} />
      <div className=" bg-primary flex justify-center items-center h-full p-[15px]">
        <Avatar image={image} circle={true} />
      </div>
    </div>
  );
};

const HeaderLogo = ({ theme }) => {
  const images = {
    dark: <img src={DarkLogo} alt="logo" />,
    light: <img src={Logo} alt="logo" />,
    xMas: <img src={XmasLogo} alt="logo" />,
  };
  return <div>{images[theme]}</div>;
};

const Mode = ({ theme }) => {
  const mode = {
    light: (
      <>
        <span className="text-white text-sm ml-[10px]">Light</span>
        <div className="bg-primary flex items-center justify-center rounded-full w-[22px] h-[22px]">
          <img src={Solar} alt="mode" />
        </div>
      </>
    ),
  };
  return (
    <div className="flex items-center justify-center gap-[10px] rounded-[14px] bg-primary-light p-[3px] h-7 mr-[13px] cursor-pointer">
      {mode[theme]}
    </div>
  );
};
