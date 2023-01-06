import React, { useEffect, useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import ProductList from "./ProductList";
import { windowWidth, windowHeight } from "../../../../../utils/Dimensions";

// data
import productData from "../../../../../assets/data/products.json";
import SearchedProduct from "./SearchedProduct";

function ProductContainer(props) {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [focus, setFocus] = useState([]);

  useEffect(() => {
    setProducts(productData);
    setProductsFiltered(productData);
    return () => {
      setProducts([]);
      setProductsFiltered([]);
    };
  }, []);

  // Search for product(s)
  const searchProduct = (text) => {
    if (text) {
      const product = products.filter((item) => {
        const itemTitle = item.title
          ? item.title.toLowerCase()
          : "".toLowerCase();
        const searchTerm = text.toLowerCase();
        return itemTitle.indexOf(searchTerm) > -1;
      });

      setProductsFiltered(product);
    } else {
      setProductsFiltered(products);
    }
  };

  // Set focus
  const openList = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.inputContainer]}>
        <Feather
          name="search"
          size={20}
          color="black"
          style={styles.searchIcon}
        />
        <TextInput
          style={[styles.input]}
          // textAlign={"center"}
          onChangeText={(text) => searchProduct(text)}
          onFocus={openList}
          // value={text}
          // placeholder="Search"
          //   accessibilityRole="search"
        />
        {
          focus == true ? (
            <Ionicons
              style={styles.closeIcon}
              onPress={onBlur}
              name="ios-close"
              size={20}
              color="#000"
            />
          ) : null // FIXME: Can't see the close sign
        }
      </View>
      {focus == true ? (
        <SearchedProduct
          //   navigation={props.navigation}
          productsFiltered={productsFiltered}
        />
      ) : (
        <ScrollView>
          <View style={styles.listContainer}>
            {products.map((item) => {
              return (
                <ProductList
                  //   navigation={props.navigation}
                  key={item.id}
                  item={item}
                />
              );
            })}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

// TODO: implement SearchedProduct

// Styles
const styles = StyleSheet.create({
  container: {
    // flexWrap: "wrap",
    // backgroundColor: "gainsboro",
    flex: 1,
    backgroundColor: "#fff",
  },
  listContainer: {
    height: windowHeight,
    // flex: 2,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    fontSize: 15,
  },
  inputContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    // width: 250,
    height: 40,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 50,
    // justifyContent: "center",
    // margin: 40,
    // textAlign: "center",
    marginLeft: 40,
    marginRight: 40,
  },
  searchIcon: {
    padding: 10,
  },
  closeIcon: {
    padding: 10,
  },
});

export default ProductContainer;
