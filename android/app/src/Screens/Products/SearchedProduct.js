// We need a way of handling the rendering of the filtered result
// Hence this SearchedProduct component
import React from "react";
import {
  Image,
  TouchableHighlight,
  FlatList,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
import InstacastButton from "../../Shared/StyledComponents/InstacastButton";

// Styling handled here(add background color, set font size)
const Item = ({ title, price, image }) => (
  <View style={styles.itemContainer}>
    <View>
      <Image
        style={styles.image}
        source={{
          uri: image
            ? image
            : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
        }}
      />
    </View>
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>$ {price}</Text>
    </View>
  </View>
);

const SearchedProduct = (props) => {
  const { productsFiltered } = props;

  const renderItem = ({ item }) => (
    <View>
      {/* <Item image={item.image} /> */}
      <Item image={item.image} title={item.title} price={item.price} />
    </View>
  );
  return (
    // FIXME: Implement navigate to singlepage for product when you click on product
    // onPress={() => {props.navigate("Product Detail",{item: item})}}
    <View>
      {productsFiltered.length > 0 ? (
        <FlatList
          data={productsFiltered}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View style={styles.center}>
          <Text style={{ alignSelf: "center" }}>
            No products match the selected criteria!
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  image: { height: 30, width: 30, margin: 10 },
  item: {
    // padding: 20,
    // marginVertical: 8,
    // marginHorizontal: 16,
    // borderRadius: 40,
    // height: 140,
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "grey",
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    // textAlign: "center",
  },
  price: {
    fontSize: 20,
    color: "orange",
    marginTop: 10,
  },
});

export default SearchedProduct;
