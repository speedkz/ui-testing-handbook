import { axiosIntance as axios } from "services/axios.config";
import { Resource } from "./interface";

export const getList = <IResource>(resource: Resource) => {
  return axios.get<IResource>(`${resource}`);
};

export const getOne = <IResource>(resource: Resource, id: number) => {
  return axios.get<IResource>(`${resource}/${id}`);
};
