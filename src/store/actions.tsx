import { SET_PRODUCTS, ADD_PRODUCT_CART } from "./actionTypes";
import { ProductItem } from "../types";

export const setProducts = (products: ProductItem[]) => {
  console.log(SET_PRODUCTS);
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const addProductCart = (product: ProductItem) => {
  console.log(ADD_PRODUCT_CART);
  return {
    type: ADD_PRODUCT_CART,
    payload: product,
  };
};
