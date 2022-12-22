import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import cartItems from "./Reducers/CartItem";

/***
 * Cart store
 */

const reducers = combineReducers({
  cartItems: cartItems,
});

const store = legacy_createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
