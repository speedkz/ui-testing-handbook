import { userEvent } from "@storybook/testing-library";
import { EFormItem } from "components/atomic/Form";
export const SELECTORS = {
  [EFormItem.INPUT]: "input",
  [EFormItem.DATE]: "date",
  [EFormItem.PASSWORD]: "input",
  [EFormItem.SELECT_SEARCH_REMOTE]: "input",
  [EFormItem.RADIO]: "radio",
};

export const USER_EVENTS = {
  input: userEvent.type,
  date: userEvent.type,
  select: userEvent.selectOptions,
};
