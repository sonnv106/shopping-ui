import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./src/screen/SplashScreen";
import TabNavigator from "./src/screen/TabNavigator";
import PaimentScreen from "./src/screen/PaimentScreen";
import SuccessScreen from "./src/screen/SuccessScreen";
import Camera from "./src/screen/Camera";
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{headerheShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>
        <Stack.Screen name="TabNavigator" component = {TabNavigator} options={{
          headerShown: false
        }}/>
        <Stack.Screen name="PaimentScreen" component={PaimentScreen} options={{headerShown: false}}/>
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} options={{headerShown: false}}/>
        <Stack.Screen name="CameraScreen" component={Camera} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
