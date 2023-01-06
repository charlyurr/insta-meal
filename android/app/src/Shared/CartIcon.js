import React from "react";
import { StyleSheet, Text } from "react-native";
import { Badge, Icon, withBadge } from "react-native-elements";
import { connect } from "react-redux";

const CartIcon = (props) => {
  const BadgedIcon = withBadge(props.cartItems.length)(Icon);
  return (
    <>
      {props.cartItems.length ? (
        // <Badge style={styles.badge}>
        //   <Text style={styles.text}>{props.cartItems.length}</Text>
        // </Badge>
        // <BadgedIcon type="ionicon" />
        <BadgedIcon
          type="ionicon"
          name="md-cart"
          size={30}
          color={props.color}
        />
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

const styles = StyleSheet.create({
  badge: {
    width: 25,
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    top: -1,
    right: -15,
    backgroundColor: "red",
  },
  text: {
    fontSize: 12,
    width: 100,
    fontWeight: "bold",
  },
});

export default connect(mapStateToProps)(CartIcon);
// export default CartIcon;
