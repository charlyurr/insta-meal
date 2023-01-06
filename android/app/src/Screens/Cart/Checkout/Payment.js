import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { ListItem } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/FontAwesome";

import { RadioButton } from "react-native-paper";

import {
  NativeBaseProvider,
  // Container,
  // Header,
  // Content,
  // ListItem,
  // Text,
  Radio, // try reactnativeelements checkbox
  // TODO: https://reactnative.dev/docs/flexbox#:~:text=By%20default%2C%20React%20Native%20lays,applied%20on%20the%20left%20side.
  // Right,// Layout with Flexbox
  // Left, // Layout with Flexbox
  // Picker,
  // Icon,
  // Body,
  // Title,
} from "native-base";

const methods = [
  { name: "Cash on Delivery", value: 1 },
  { name: "Bank Transfer", value: 2 },
  { name: "Card Payment", value: 3 },
];

const paymentCards = [
  { name: "Wallet", value: 1 },
  { name: "Visa", value: 2 },
  { name: "MasterCard", value: 3 },
  { name: "Other", value: 4 },
];

const Payment = (props) => {
  const order = props.route.params;

  const [selected, setSelected] = useState();
  const [card, setCard] = useState();
  return (
    <View>
      <View>
        <View>
          {/* Title */}
          <Text>Choose your payment method</Text>
        </View>
      </View>
      <View>
        {methods.map((item, index) => {
          return (
            <ListItem key={item.name} onPress={() => setSelected(item.value)}>
              <Text>{item.name}</Text>
              <RadioButton value={selected == item.value} />
            </ListItem>
          );
        })}
        {selected == 3 ? (
          <Picker
            // mode="dropdown"
            // iosIcon={<Icon name={"arrow-down"} />}
            // headerStyle={{ backgroundColor: "orange" }}
            // headerBackButtonTextStyle={{ color: "#fff" }}
            // headerTitleStyle={{ color: "#fff" }}
            selectedValue={card}
            onValueChange={(x) => setCard(x)}
          >
            {paymentCards.map((c, index) => {
              return <Picker.Item key={c.name} label={c.name} value={c.name} />;
            })}
          </Picker>
        ) : null}
        <View style={{ marginTop: 60, alignSelf: "center" }}>
          <Button
            title={"Confirm"}
            onPress={() => props.navigation.navigate("Confirm", { order })}
          />
        </View>
      </View>
    </View>
  );
};

export default Payment;
