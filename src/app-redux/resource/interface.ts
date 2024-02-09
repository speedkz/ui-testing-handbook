export const resource = ["products"];

export type Resource = (typeof resource)[number];
export interface IResourceState<TResource> {
  list: TResource[];
  detail: TResource | null;
  loading: boolean;
}

declare const actions: readonly [
  "get_one",
  "delete_one",
  "save_one",
  "delete_many",
  "save_many",
  "get_list",
  "set_list"
];

export type Action = (typeof actions)[number];
