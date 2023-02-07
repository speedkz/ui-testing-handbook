import { faker } from "@faker-js/faker";
import { EFormItem, IFormItem } from "components/atomic/Form";
import { format } from "date-fns";

export const sampleData = (id, item: IFormItem) => {
  let data = getByTestId(id);
  if (data) return data;
  data = getByFieldType(item.component);
  if (data) return data;
  return "none";
};

const getByTestId = (id: string) => {
  if (["lastName"].some((x) => id.includes(x))) {
    return faker.name.lastName();
  }
  if (["name"].some((x) => id.includes(x))) {
    return faker.name.firstName();
  }
  if (["email"].some((x) => id.includes(x))) {
    return faker.internet.email();
  }
  if (["password"].some((x) => id.includes(x))) {
    return faker.internet.password();
  }
  if (["phone"].some((x) => id.includes(x))) {
    return faker.phone.number();
  }
  return "";
};

const getByFieldType = (component: keyof typeof EFormItem) => {
  if (component === EFormItem.DATE)
    return ` ${format(faker.date.birthdate(), "yyyy-MM-dd")}`;
  return "";
};
