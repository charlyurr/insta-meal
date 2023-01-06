import React from "react";
import {
  Dimensions,
  Image,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import ProductCard from "./ProductCard";
var { width } = Dimensions.get("window");

function ProductList(props) {
  const { item } = props;
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={{ width: "50%" }}
        // onPress={() =>
        //     props.navigation.navigate("Product Detail", { item: item})
        // }
      >
        <View style={{ width: width / 2, backgroundColor: "gainsboro" }}>
          <ProductCard {...item} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default ProductList;
