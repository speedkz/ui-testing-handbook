import { PayloadAction } from "@reduxjs/toolkit";
import { RESOURCE_ACTIONS } from "./constant";
import { IResourceState, Resource } from "./interface";

export const getListActionName = (resource: Resource) =>
  `${RESOURCE_ACTIONS.GET_LIST}_${resource}`;

export const setListActionName = (resource: Resource) =>
  `${RESOURCE_ACTIONS.SET_LIST}_${resource}`;

export const resourceReducer =
  <IResource>(resource: Resource) =>
  (reducer) => {
    return (
      state: IResourceState<IResource>,
      action: PayloadAction<IResource[]>
    ) => {
      const { type, payload } = action;

      switch (type) {
        case getListActionName(resource): {
          return state.list;
        }
        case setListActionName(resource): {
          state.list = payload;
          return;
        }
        default: {
          return reducer(state, action);
        }
      }
    };
  };
