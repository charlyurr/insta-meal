import React, { useEffect, useState } from "react";
import {
  Image,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  Button,
} from "react-native";
import { connect } from "react-redux";
import * as actions from "../../../Redux/Actions/cartActions";
import { ListItem } from "react-native-elements";

// import Toast from "react-native-toast-message";
// import axios from "axios";
// import baseURL from "../../../assets/common/baseUrl";

var { width, height } = Dimensions.get("window");

const Confirm = (props) => {
  const confirm = props.route.params;
  // const finalOrder = props.route.params;

  // // Add this
  // const [productUpdate, setProductUpdate] = useState();
  // useEffect(() => {
  //   if (finalOrder) {
  //     getProducts(finalOrder);
  //   }
  //   return () => {
  //     setProductUpdate();
  //   };
  // }, [props]);

  // // Add this
  // const getProducts = (x) => {
  //   const order = x.order.order;
  //   var products = [];
  //   if (order) {
  //     order.orderItems.forEach((cart) => {
  //       axios
  //         .get(`${baseURL}products/${cart.product}`)
  //         .then((data) => {
  //           products.push(data.data);
  //           setProductUpdate(products);
  //         })
  //         .catch((e) => {
  //           console.log(e);
  //         });
  //     });
  //   }
  // };

  const confirmOrder = () => {
    // const order = finalOrder.order.order;
    // axios
    //   .post(`${baseURL}orders`, order)
    //   .then((res) => {
    //     if (res.status == 200 || res.status == 201) {
    //       Toast.show({
    //         topOffset: 60,
    //         type: "success",
    //         text1: "Order Completed",
    //         text2: "",
    //       });
    //       setTimeout(() => {
    //         props.clearCart();
    //         props.navigation.navigate("Cart");
    //       }, 500);
    //     }
    //   })
    //   .catch((error) => {
    //     Toast.show({
    //       topOffset: 60,
    //       type: "error",
    //       text1: "Something went wrong",
    //       text2: "Please try again",
    //     });
    //   });

    setTimeout(() => {
      props.clearCart();
      props.navigation.navigate("Cart");
    }, 500);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Confirm Order</Text>
        {confirm ? (
          <View style={{ borderWidth: 1, borderColor: "orange" }}>
            <Text style={styles.title}>Shipping to:</Text>
            <View style={{ padding: 8 }}>
              <Text>Address: {confirm.order.order.shippingAddress1}</Text>
              <Text>Address2: {confirm.order.order.shippingAddress2}</Text>
              <Text>City: {confirm.order.order.city}</Text>
              <Text>Zip Code: {confirm.order.order.zip}</Text>
              <Text>Country: {confirm.order.order.country}</Text>
            </View>
            <Text style={styles.title}>Items:</Text>

            {confirm.order.order.orderItems.map((x) => {
              return (
                <ListItem style={styles.listItem} key={x.product.id}>
                  {/* FIXME: Image not rendering, thumnail not working */}
                  <Image source={{ uri: x.product.image }} />
                  {/* <Thumbnail source={{ uri: x.product.image }} /> */}
                  <View style={styles.body}>
                    <Text>{x.product.name}</Text>
                    <Text>$ {x.product.price}</Text>
                  </View>
                </ListItem>
              );
            })}
          </View>
        ) : null}
        <View style={{ alignItems: "center", margin: 20 }}>
          <Button title={"Place order"} onPress={confirmOrder} />
        </View>
      </View>
    </ScrollView>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
  };
};

const styles = StyleSheet.create({
  container: {
    height: height,
    padding: 8,
    alignContent: "center",
    backgroundColor: "white",
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  title: {
    alignSelf: "center",
    margin: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  listItem: {
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
    width: width / 1.2,
  },
  body: {
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default connect(null, mapDispatchToProps)(Confirm);
// export default Confirm;
