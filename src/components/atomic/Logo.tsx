const BasicLogo = require("assets/images/atomic/Logo.png");
const DarkLogo = require("assets/images/atomic/Logo Dark.png");
const LogoXmas = require("assets/images/atomic/LogoXmas.png");

export interface ILogo {
  xmas?: boolean;
  theme?: "light" | "dark";
}

export const Logo = (props: ILogo) => {
  const { xmas, theme = "light" } = props;
  return (
    <>
      {xmas ? (
        <img src={LogoXmas} alt="logo xmas" />
      ) : theme === "light" ? (
        <img src={BasicLogo} alt="logo" />
      ) : (
        <img src={DarkLogo} alt="logo" />
      )}
    </>
  );
};
