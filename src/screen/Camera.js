"use strict";
import React, { Component } from "react";

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import { RNCamera } from "react-native-camera";
const Camera = () => {
  const onSuccess = (e) => {
    Linking.openURL(e.data).catch((err) =>
      console.error("An error occured", err)
    );
  };
  return (
    <QRCodeScanner
      onRead={() => onSuccess()}
      flashMode={RNCamera.Constants.FlashMode.torch}
      containerStyle={styles.containerStyle}
      cameraStyle={styles.cameraStyle}
      showMarker ={true}
      
    ></QRCodeScanner>
  );
};
export default Camera;
const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: "#777",
  },
  textBold: {
    fontWeight: "500",
    color: "#000",
  },
  buttonText: {
    fontSize: 21,
    color: "rgb(0,122,255)",
  },
  buttonTouchable: {
    marginTop: 30,
    backgroundColor: 'blue'
  },
  containerStyle:{
      backgroundColor: '#EADECE',
      justifyContent: 'center',
      alignItems: 'center'
  },
  cameraStyle: {
    backgroundColor: 'yellow',
    width: 287.5,
    height: 481,
  }
});
