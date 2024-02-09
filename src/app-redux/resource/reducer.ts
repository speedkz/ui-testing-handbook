import {
  Draft,
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { getList, getOne } from "./apis";
import { RESOURCE_ACTIONS } from "./constant";
import { Action, IResourceState, Resource } from "./interface";

export const getResourceActionName = (resource: Resource, action: Action) => {
  switch (action) {
    case "get_list":
      return `${RESOURCE_ACTIONS.GET_LIST}_${resource}`;
    case "set_list":
      return `${RESOURCE_ACTIONS.SET_LIST}_${resource}`;
    case "get_one":
      return `${RESOURCE_ACTIONS.GET_ONE}_${resource}`;
    case "save_one":
      return `${RESOURCE_ACTIONS.SAVE_ONE}_${resource}`;
    case "save_many":
      return `${RESOURCE_ACTIONS.SAVE_MANY}_${resource}`;
    case "delete_one":
      return `${RESOURCE_ACTIONS.DELETE_ONE}_${resource}`;
    case "delete_many":
      return `${RESOURCE_ACTIONS.DELETE_MANY}_${resource}`;
    default:
      return "";
  }
};

export const resourceList = <IResource>(
  state: IResourceState<IResource>,
  action: PayloadAction<IResource[]>,
  resource: Resource
) => {
  const { type, payload } = action;

  switch (type) {
    case getResourceActionName(resource, "get_list"): {
      return state.list;
    }
    case getResourceActionName(resource, "set_list"): {
      state.list = payload;
      return state.list;
    }
    default: {
      return state.list;
    }
  }
};

export const resourceDetail = <IResource>(
  state: IResourceState<IResource>,
  action: PayloadAction<IResource>,
  resource: Resource
) => {
  const { type, payload } = action;

  switch (type) {
    case getResourceActionName(resource, "get_one"): {
      return state.detail;
    }
    case getResourceActionName(resource, "save_one"): {
      state.detail = payload;
      return state.detail;
    }
    default: {
      return state.detail;
    }
  }
};

export const fetchList = <IResource>(resource: Resource) => {
  const actionName = getResourceActionName(resource, "get_list");
  return createAsyncThunk(actionName, async () => {
    const res = await getList<IResource[]>(resource);
    const payload = res.data;

    return payload;
  });
};

export const fetchOne = <IResource>(resource: Resource) => {
  const actionName = getResourceActionName(resource, "get_one");
  return createAsyncThunk(actionName, async (id: number) => {
    const res = await getOne<IResource>(resource, id);
    const payload = res.data;

    return payload;
  });
};

export const resourceSlice = <IResource>(
  state: IResourceState<IResource>,
  reducers,
  resource: Resource
) =>
  createSlice({
    name: "products",
    initialState: state,
    reducers: { ...reducers },
    extraReducers: (builder) => {
      // Add reducers for additional action types here, and handle loading state as needed
      builder.addCase(
        fetchList<IResource>(resource).fulfilled,
        (state, action) => {
          // Add user to the state array
          state.list = action.payload as Draft<IResource>[];
        }
      );
      builder.addCase(
        fetchOne<IResource>(resource).fulfilled,
        (state, action) => {
          // Add user to the state array
          state.detail = action.payload as Draft<IResource>;
        }
      );
    },
  });
