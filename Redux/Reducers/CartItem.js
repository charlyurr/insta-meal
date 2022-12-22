import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../constants";

/***
 * Returns the cart state based on the chosen action type which can be a list of items in cart,remaining cart items or an empty cart
 */

const cartItems = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter((cartItem) => cartItem !== action.payload);
    case CLEAR_CART:
      return [];
  }

  return state;
};

export default cartItems;
