import {
  getByRole,
  getAllByRole,
  userEvent,
  within,
  waitFor,
} from "@storybook/testing-library";
import { EFormItem, IFormItem, TFormFields } from "components/atomic/Form";
import { SELECTORS, USER_EVENTS } from "./constants";
import { sampleData } from "./generateSampleData";
import { expect } from "@storybook/jest";

export const fillForm = async <T>(formFields: TFormFields<T>, canvas) => {
  await sleep();
  for (let field in formFields) {
    await fillDataToFormItem(canvas, field, formFields[field]);
  }
};

const fillDataToFormItem = async (canvas, id, item: IFormItem) => {
  const selector = SELECTORS[item.component];
  if (!selector) return;
  if (item.component === EFormItem.SELECT_SEARCH_REMOTE) {
    await handleSelectRemoteOptions(canvas, id);
    return;
  }
  if (item.component === EFormItem.RADIO) {
    await handleSelectRadio(canvas, id);
    return;
  }
  const element = canvas.getByTestId(id, {
    selector,
  });
  await USER_EVENTS[selector](element, sampleData(id, item), { delay: 50 });
  if (item.component === EFormItem.DATE) {
    await userEvent.type(element, "{enter}");
  }
};
const handleSelectRemoteOptions = async (canvas, id) => {
  const element = canvas.getByTestId(id);
  const input = getByRole(element, "combobox");
  await sleep(1000);
  await userEvent.type(input, "vi", { delay: 100 });
  await sleep(2000);
  await waitFor(() => {
    expect(
      document.querySelector(
        ".ant-select-dropdown:not(.ant-select-dropdown-hidden) .ant-select-item-option-active"
      )
    ).toBeInTheDocument();
  });

  const option = document.querySelector(
    ".ant-select-dropdown:not(.ant-select-dropdown-hidden) .ant-select-item-option-active"
  );
  if (!option) return;
  await userEvent.click(option);
};

const handleSelectRadio = async (canvas, id) => {
  const element = canvas.getByTestId(id);
  const radio = getAllByRole(element, "radio")[0];
  await userEvent.click(radio);
};

export const sleep = (time = 200) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

export const submitForm = async (canvas) => {
  const submitButton = canvas.getByTestId("btn-submit", {
    selector: "button",
  });
  expect(submitButton).toBeInTheDocument();
  await userEvent.click(submitButton);
};
