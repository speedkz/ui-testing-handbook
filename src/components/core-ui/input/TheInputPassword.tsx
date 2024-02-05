import { TheInput } from "./TheInput";
import { IInput } from "./interface";

export const TheInputPassword = (props: IInput) => {
  return <TheInput type="password" {...props} />;
};
