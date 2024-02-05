declare const resource: readonly ["products"];

export type Resource = (typeof resource)[number];
export interface IResourceState<TResource> {
  list: TResource[];
}
