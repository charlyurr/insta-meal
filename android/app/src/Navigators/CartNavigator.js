import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Cart from "../Screens/Cart/Cart";
// import { CheckoutNavigator } from "./CheckoutNavigator";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// Checkout Screens
import Checkout from "../Screens/Cart/Checkout/Checkout";
import Payment from "../Screens/Cart/Checkout/Payment";
import Confirm from "../Screens/Cart/Checkout/Confirm";

/***
 * Navigates to the cart screen
 */
const Stack = createStackNavigator();

//Trial, remove if fails
//The checkout screens are also implemented in CheckoutNavigator component but fails if called in here
// So I called them directly in here
const Tab = createMaterialTopTabNavigator();
function Checkout1() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Shipping" component={Checkout} />
      <Tab.Screen name="Payment" component={Payment} />
      <Tab.Screen name="Confirm" component={Confirm} />
    </Tab.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cart2"
        component={Cart}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Checkout"
        // FIXME: Some issue with CheckoutNavigator,
        // Tried rendering a simple view from Cart/Checkout/*, not fix
        // But assigning Cart as component works
        // component={CheckoutNavigator}
        component={Checkout1}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function CartNavigator() {
  return <MyStack />;
}
