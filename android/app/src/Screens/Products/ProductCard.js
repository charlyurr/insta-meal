import React from "react";
import Toast from "react-native-toast-message";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import InstacastButton from "../../Shared/StyledComponents/InstacastButton";
import { connect } from "react-redux";
import * as actions from "../../../../../Redux/Actions/cartActions";

let { width, height } = Dimensions.get("window");

function ProductCard(props) {
  const { title, price, image } = props;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{
          uri: image
            ? image
            : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
        }}
      />
      <View style={styles.card} />
      <Text style={styles.title}>
        {title.length > 15 ? title.substring(0, 15 - 3) + "..." : title}
        {/* {title} */}
      </Text>
      <Text style={styles.price}>${price}</Text>
      <InstacastButton
        primary
        medium
        onPress={() => {
          props.addItemToCart(props.id),
            Toast.show({
              topOffset: 60,
              type: "success",
              text1: `${title} added to Cart`,
              text2: "Go to your cart to complete order",
            });
        }}
      >
        <Text style={{ color: "white" }}>Add</Text>
      </InstacastButton>
    </View>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) =>
      dispatch(actions.addToCart({ quantity: 1, product })),
  };
};

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 20,
    height: width / 1.7,
    padding: 10,
    borderRadius: 10,
    marginTop: 55,
    marginBottom: 5,
    marginLeft: 10,
    alignItems: "center",
    elevation: 8,
    backgroundColor: "white",
  },
  image: {
    width: width / 2 - 20 - 10,
    height: width / 2 - 20 - 30,
    backgroundColor: "transparent",
    position: "absolute",
    top: -45,
  },
  card: {
    marginBottom: 10,
    height: width / 2 - 20 - 90,
    backgroundColor: "transparent",
    width: width / 2 - 20 - 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  price: {
    fontSize: 20,
    color: "orange",
    marginTop: 10,
  },
});

export default connect(null, mapDispatchToProps)(ProductCard);
