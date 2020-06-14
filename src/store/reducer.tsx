import {
  SET_PRODUCTS,
  INCREMENT_PRODUCT_CART,
  DECREMENT_PRODUCT_CART,
  REMOVE_PRODUCT_CART,
} from "./actionTypes";
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

    case INCREMENT_PRODUCT_CART:
      let flagAdd = true;
      let productsAdd = state.productsCart.map((product) => {
        if (product.id === payload.id && product.size === payload.size) {
          flagAdd = false;
          product.qtdCart++;
          return product;
        }
        return product;
      });
      if (flagAdd) {
        payload.qtdCart = 1;
        return { ...state, productsCart: [...productsAdd, payload] };
      }
      return { ...state, productsCart: productsAdd };

    case DECREMENT_PRODUCT_CART:
      let productsDecrement = state.productsCart.map((product) => {
        if (
          product.id === payload.id &&
          product.size === payload.size &&
          product.qtdCart > 1
        ) {
          product.qtdCart--;
          return product;
        }
        return product;
      });
      return { ...state, productsCart: productsDecrement };

    case REMOVE_PRODUCT_CART:
      let productsRemove = state.productsCart.filter(
        (product) =>
          product.id !== payload.id ||
          (product.id === payload.id && product.size !== payload.size)
      );
      console.log("REMOVE2: ", productsRemove, payload);
      return { ...state, productsCart: productsRemove };

    default:
      return state;
  }
};
