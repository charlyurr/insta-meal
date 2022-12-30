/**
 * FIXME: This app is getting an approximate coordinate
 * because ACCESS_FINE_LOCATION is not set
 * There set ACCESS_FINE_LOCATION
 */
import React, { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet } from "react-native";

import * as Location from "expo-location";

export default function GetLocation() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  let latitude, longitude;
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    longitude = location.coords.longitude;
    latitude = location.coords.latitude;
    text = JSON.stringify(location);
  }

  // console.log(latitude, longitude);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  paragraph: { fontSize: 14 },
});
