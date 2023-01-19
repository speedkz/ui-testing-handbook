import { axiosIntance } from "./axios.config";

const URL_PREFIX = "auth";

export function login() {
  const data = {
    userId: 2,
    username: "maria",
    password: "guess",
  };
  return axiosIntance.post(`${URL_PREFIX}/login`, data);
}
