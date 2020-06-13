import { SET_PRODUCTS } from "./actionTypes";
import { ProductItem } from "../types";

export const setProducts = (products: ProductItem[]) => {
  console.log(SET_PRODUCTS)
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};
