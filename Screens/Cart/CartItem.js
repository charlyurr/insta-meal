import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ListItem } from "react-native-elements";

const CartItem = (props) => {
  const data = props.item.item;
  const [quantity, setQuantity] = useState(props.item.item);
  return (
    <ListItem style={styles.listItem} key={Math.random()}>
      {/* FIXME: Image not rendering correctly */}
      {/* FIXME: Edit text Styling  */}
      {/* TODO: Add thumbnail instead of image on the left */}
      <Image
        style={styles.image}
        // resizeMode="contain"
        source={{
          uri: data.image
            ? data.image
            : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
        }}
      />
      {/* Body, name on left price on right */}
      <View style={styles.body}>
        <Text>{data.name}</Text>
        <Text style={styles.price}>$ {data.price}</Text>
      </View>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  image: { height: 50, width: 50 },
  listItem: {
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
  },
  // body: {
  //   margin: 10,
  //   alignItems: "center",
  //   flexDirection: "row",
  // },
  // FIXME: Find a way to make price appear on the far right, and not use marginLeft
  price: { marginLeft: 90 },
});

export default CartItem;
