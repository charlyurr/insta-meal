import React from "react";
import {
  Button,
  Dimensions,
  FlatList,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { connect } from "react-redux";
// import { ListItem } from "react-native-elements";
import * as actions from "../../../../../Redux/Actions/cartActions";
import { SwipeListView } from "react-native-swipe-list-view";
import CartItem from "./CartItem";
import Icon from "react-native-vector-icons/FontAwesome";
import { windowWidth, windowHeight } from "../../../../../utils/Dimensions";

/***
 * * Add items to cart
 *
 * @returns
 * The cart screen
 */

// import * as actions from "../../Redux/Actions";

const Cart = (props) => {
  let total = 0;
  props.cartItems.forEach((cart) => {
    return (total += cart.product.price);
  });
  return (
    // react fragement
    <>
      {props.cartItems.length ? (
        // container instead
        <View>
          <Text style={{ alignSelf: "center" }}>Cart</Text>
          {/* {props.cartItems.map((data) => {
            return <CartItem item={data} />;
          })} */}
          <SwipeListView
            data={props.cartItems}
            renderItem={(data) => <CartItem item={data} />}
            renderHiddenItem={(data) => (
              <View style={styles.hiddenContainer}>
                <TouchableOpacity
                  style={styles.hiddenButton}
                  onPress={() => props.removeFromCart(data.item)}
                >
                  <Icon name="trash" color={"white"} size={30} />
                </TouchableOpacity>
              </View>
            )}
            disableRightSwipe={true}
            previewOpenDelay={3000}
            friction={1000}
            tension={40}
            leftOpenValue={75}
            stopLeftSwipe={75}
            rightOpenValue={-75}
          />
          <View style={styles.bottomContainer}>
            <Text style={styles.totalPrice}>$ {-total}</Text>
            <Button title="Clear" onPress={() => props.clearCart()} />
            <Button
              title="Checkout"
              onPress={() => props.navigation.navigate("Checkout")}
            />
          </View>
        </View>
      ) : (
        // Container instead of view
        <View style={styles.emptyContainer}>
          <Text>Looks like your cart is empty</Text>
          <Text>Add products to your cart to get started</Text>
        </View>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return { cartItems: cartItems };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
    removeFromCart: (item) => dispatch(actions.removeFromCart(item)),
  };
};

const styles = StyleSheet.create({
  // body: {
  //   margin: 10,
  //   alignItems: "center",
  //   flexDirection: "row",
  // },
  bottomContainer: {
    flexDirection: "row",
    // position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "white",
    elevation: 20,
  },
  emptyContainer: {
    height: windowHeight,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  hiddenContainer: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  hiddenButton: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 25,
    height: 70,
    width: windowWidth / 1.2,
  },
  // image: { height: 50, width: 50 },
  // listItem: {
  //   alignItems: "center",
  //   backgroundColor: "white",
  //   justifyContent: "center",
  // },
  // // FIXME: Find a way to make price appear on the far right, and not use marginLeft
  // price: { marginLeft: 90 },
  totalPrice: { fontSize: 18, margin: 20, color: "red" },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
// export default Cart;
