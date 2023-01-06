import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import CartIcon from "../Shared/CartIcon";

/***
 * This is the index file for the navigation to all screens
 */

// Stacks
import HomeNavigator from "./HomeNavigator";
import CartNavigator from "./CartNavigator";

const Tab = createBottomTabNavigator();

const Main = () => (
  <Tab.Navigator
    // initialRouteName="Home" //  WARN  Found screens with the same name nested inside one another. Check: Home, Home > Home
    screenOptions={{
      tabBarHideOnKeyboard: true,
      tabBarActiveTintColor: "#e91e63",
      tabBarShowLabel: false,
      tabBarStyle: [
        {
          display: "flex",
        },
        null,
      ],
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeNavigator}
      options={{
        tabBarIcon: ({ color }) => <Icon name="home" color={color} size={30} />,
      }}
    />
    <Tab.Screen
      name="Cart"
      component={CartNavigator}
      options={{
        tabBarIcon: ({ color }) => (
          <View>
            {/* FIXME: cart icon being rendered only when you start adding
                items to the cart. Rather, the cart icon should render when the page loads
            */}
            {/* <Icon name="shopping-cart" color={color} size={30} />
            <CartIcon /> */}
            {/* <Icon name="shopping-cart" color={color} size={30}></Icon> */}
            {/* FIXME: CartIcon not working */}
            <CartIcon color={color} />
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Admin"
      component={HomeNavigator}
      options={{
        tabBarIcon: ({ color }) => <Icon name="cog" color={color} size={30} />,
      }}
    />
    <Tab.Screen
      name="User"
      component={HomeNavigator}
      options={{
        tabBarIcon: ({ color }) => <Icon name="user" color={color} size={30} />,
      }}
    />
  </Tab.Navigator>
);

export default Main;
