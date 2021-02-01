import { useReducer } from "react";

import {
    UPDATE_PART,
    UPDATE_CURRENT_STATUS,
    UPDATE_CUSTOMER,
    ADD_REPAIR,
    ADD_MULTIPLE_PART,
    REMOVE_PART,
    UPDATE_PART_QUANTITY,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    // if action type value is the value of `UPDATE_PRODUCTS`, return a new state object with an updated products array
    case UPDATE_PART:
      return {
        ...state,
        products: [...action.parts],
    };

    case UPDATE_CURRENT_STATUS:
      return {
        ...state,
        currentStatus: action.currentStatus,
    };

      case REMOVE_PART:
      let newState = state.cart.filter((part) => {
        return part._id !== action._id;
    });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState,
    };

    case UPDATE_PART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map((part) => {
          if (action._id === part._id) {
            part.purchaseQuantity = action.purchaseQuantity;
          }
          return part;
        }),
    };

    default:
      return state;
  }
};

//help initialize our global state object and then provide us with the
//functionality for updating that state by automatically running it through
//our custom reducer() function.
export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}