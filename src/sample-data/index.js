import { faker } from "@faker-js/faker";

const { email, password } = faker.internet;
const { ...nameModule } = faker.name;
export const SAMPLE = {
  USER_LOGIN: {
    username: email(),
    password: password(),
  },
  USER_INFORMATION: Object.keys(nameModule)
    .filter((key) => typeof nameModule[key] === "function")
    .reduce((acc, cur) => ({ ...acc, [cur]: nameModule[cur]() }), {}),
};
