import { SET_PRODUCTS } from "./actionTypes";
import { Action, Store } from "../types";

const INITIAL_STATE : Store = {
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

    default:
      return state;
  }
};
