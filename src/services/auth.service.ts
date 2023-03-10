import { axiosIntance } from "./axios.config";

const URL_PREFIX = "auth";

export const AUTH_APIS = {
  login: `${URL_PREFIX}/login`,
};

export function login(data) {
  return axiosIntance.post(`${AUTH_APIS.login}`, data);
}
