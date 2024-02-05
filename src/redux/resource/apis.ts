import { axiosIntance as axios } from "services/axios.config";

declare const resource: readonly ["product"];
type Product = (typeof resource)[number];

export const getList = (resource: Product) => {
  return axios.get(`${resource}`);
};
