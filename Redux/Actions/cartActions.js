import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../constants";

/***
 * Handles all actions in the cart including:
 *  1. adding an item to the cart,
 *  2. removing item from the cart and
 *  3. emptying the cart
 */

export const addToCart = (payload) => {
  return { type: ADD_TO_CART, payload };
};
export const removeFromCart = (payload) => {
  return { type: REMOVE_FROM_CART, payload };
};
export const clearCart = () => {
  return { type: CLEAR_CART };
};
