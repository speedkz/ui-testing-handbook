import { Resource } from "app-redux/resource/interface";

declare const type: readonly ["list", "detail"];
export type NavigateType = (typeof type)[number];

export const getResourcePath = (resource: Resource, type: NavigateType) => {
  switch (type) {
    case "list":
      return `/${resource}/list`;
    case "detail":
      return `/${resource}/:id`;

    default:
      return "";
  }
};
