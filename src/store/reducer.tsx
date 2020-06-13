import { SET_PRODUCTS } from "./actionTypes";
import { Action } from "../types";

const INITIAL_STATE = {
  products: [],
  productsBag: [],
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
