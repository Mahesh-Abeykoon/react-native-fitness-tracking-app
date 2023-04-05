import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import WorkoutScreen from "./components/WorkoutScreen";
import FitScreen from "./components/FitScreen";
import BreakScreen from "./components/BreakScreen";
const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Workout" component={WorkoutScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Fit" component={FitScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Break" component={BreakScreen} options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
