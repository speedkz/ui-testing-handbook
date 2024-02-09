import { PayloadAction, combineReducers } from "@reduxjs/toolkit";
import { IResourceState } from "app-redux/resource/interface";
import {
  resourceDetail,
  resourceList,
  resourceSlice
} from "app-redux/resource/reducer";
import { IProduct } from "./interface";

const initialState: IResourceState<IProduct> = {
  list: [],
  detail: null,
  loading: false,
};

export const listProductsReducer = (
  state = initialState,
  action: PayloadAction<IProduct[]>
) => resourceList<IProduct>(state, action, "products");

export const detailProductReducer = (
  state = initialState,
  action: PayloadAction<IProduct>
) => resourceDetail<IProduct>(state, action, "products");

export const productReducer = combineReducers({
  list: listProductsReducer,
  detail: detailProductReducer,
});

const productSlice = resourceSlice(initialState, productReducer, "products");

export default productSlice.reducer;
