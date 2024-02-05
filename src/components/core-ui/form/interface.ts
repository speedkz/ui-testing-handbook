import { UseFormRegister } from "react-hook-form";

export const FORM_CONFIGS = {
  DATA_TEST_ID: "data-testid",
  BUTTON_TEST_ID: "btn-submit",
};
const COLSPANS = [6, 12] as const;
export interface IFormItem {
  component: keyof typeof EFormItem;
  label?: string;
  colSpan?: (typeof COLSPANS)[number];
  options?: any[];
  multiple?: boolean;
  autocomplete?: boolean;
  prependIcon?: any;
  fetchOptions?: any;
  setOptions?: any;
  required?: boolean;
}
export interface IForm {
  formFields: TFormFields<any>;
  control?: any;
  register?: UseFormRegister<any>;
  errors: any;
}

export type TFormFields<T> = {
  [key in keyof T]: IFormItem;
};

export enum EFormItem {
  INPUT = "INPUT",
  PASSWORD = "PASSWORD",
  RADIO = "RADIO",
  DATE = "DATE",
  SELECT = "SELECT",
  SELECT_SEARCH_REMOTE = "SELECT_SEARCH_REMOTE",
}

export const COLSPAN_STYLES = {
  6: "col-span-6",
  12: "col-span-12",
};

export interface ILoginForm {
  username: string;
  password: string;
}

export type IFormSystem = {
  login: TFormFields<ILoginForm>;
};
