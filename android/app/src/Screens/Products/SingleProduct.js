import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Text } from "react-native";

const SingleProduct = (props) => {
  const [item, setItem] = useState(props.route.params.item);
  const [availability, setAvailability] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ marginBottom: 80, padding: 5 }}>
        <View>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{
              uri: item.image
                ? item.image
                : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
            }}
          />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.contentHeader}>{item.name}</Text>
          <Text style={styles.contentText}>{item.brand}</Text>
        </View>
        {/** TODO: description,rich description and availability*/}
      </ScrollView>
      {/* TODO: Place the button on the right of screen without marginLeft */}
      <View style={styles.bottomContainer}>
        <Text style={styles.price}>$ {item.price}</Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.button}>Add</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "white",
  },
  container: { position: "relative", height: 500 },
  contentContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  contentHeader: { fontWeight: "bold", fontSize: 25, marginBottom: 20 },
  contentText: { fontWeight: "bold", fontSize: 18, marginBottom: 20 },
  imageContainer: { backgroundColor: "white", padding: 0, margin: 0 },
  image: {
    width: "100%",
    height: 250,
  },
  price: {
    fontSize: 24,
    margin: 20,
    color: "red",
  },
  buttonContainer: {
    height: 70,
    width: 70,
    marginLeft: 150,
    backgroundColor: "#0000FF",
    alignItems: "center",
    // alignContent: "center",
    justifyContent: "center",
    // textAlign: "right",
    // alignSelf: "flex-end",
  },
  button: {
    color: "white",
  },
});

export default SingleProduct;
