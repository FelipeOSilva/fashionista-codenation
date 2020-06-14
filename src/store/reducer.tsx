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
      return {
        ...state,
        productsCart: state.productsCart.map((product) => {
          if (product.id === payload.id && product.size === payload.size) {
            product.qtdCart++;
            return product;
          }
          payload.qtdCart++;
          return payload;
        }),
      };

    default:
      return state;
  }
};
