import { SET_PRODUCTS, ADD_PRODUCT_CART } from "./actionTypes";
import { Action, Store } from "../types";

const INITIAL_STATE: Store = {
  products: [],
  productsCart: [],
};

export default (state = INITIAL_STATE, { type, payload }: Action) => {
  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    case ADD_PRODUCT_CART:
      let flag = false;
      let products = state.productsCart.map((product) => {
        if (product.id === payload.id && product.size === payload.size) {
          flag = true;
          product.qtdCart++;
          return product;
        }
        return product;
      });
      if (flag) {
        payload.qtdCart = 1;
        return { ...state, productsCart: [...products, payload] };
      }
      return { ...state, productsCart: products };

    default:
      return state;
  }
};
