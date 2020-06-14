import {
  SET_PRODUCTS,
  INCREMENT_PRODUCT_CART,
  DECREMENT_PRODUCT_CART,
  REMOVE_PRODUCT_CART,
} from "./actionTypes";
import { ProductItem } from "../types";

export const setProducts = (products: ProductItem[]) => {
  console.log(SET_PRODUCTS);
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const incrementProductCart = (product: ProductItem) => {
  console.log(INCREMENT_PRODUCT_CART);
  return {
    type: INCREMENT_PRODUCT_CART,
    payload: product,
  };
};

export const decrementProductCart = (product: ProductItem) => {
  console.log(DECREMENT_PRODUCT_CART, product);
  return {
    type: DECREMENT_PRODUCT_CART,
    payload: product,
  };
};

export const removeProductCart = (product: ProductItem) => {
  console.log(REMOVE_PRODUCT_CART, product);
  return {
    type: REMOVE_PRODUCT_CART,
    payload: product,
  };
};
