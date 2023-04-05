import { Text, SafeAreaView, Image, Pressable } from "react-native";
import React, { useState, useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FitnessItems } from "../Context";
import FitScreenStyles from "../styles/FitScreenStyles";

const FitScreen = () => {
  const route = useRoute();
  // console.log(route.params);
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const excersise = route.params.excersises;
  const current = excersise[index];
  // console.log(current, "first excersise");
  const {
    completed,
    setCompleted,
    workout,
    setWorkout,
    calories,
    setCalories,
    minutes,
    setMinutes,
  } = useContext(FitnessItems);
// console.log(completed, "Completed Excersise!");

  return (
    <SafeAreaView>
      <Image
        style={FitScreenStyles.workoutImage} source={{ uri: current.image }}
      />
      <Text style={FitScreenStyles.workoutName}>{current.name}</Text>
      <Text style={FitScreenStyles.workoutSets}>[x{current.sets} Times]</Text>

      {index + 1 >= excersise.length ? (
        <Pressable
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={FitScreenStyles.doneButtonContainer}
        >
          <Text 
          style={FitScreenStyles.doneButtonText}>DONE</Text>
        </Pressable>
      ) : (
        <Pressable
          onPress={() => {
            navigation.navigate("Break");
            setCompleted([...completed, current.name]);
            setWorkout(workout + 1);
            setMinutes(minutes + 2.5);
            setCalories(calories + 6.3);
            setTimeout(() => {
              setIndex(index + 1);
            }, 2000);
          }}
          style={FitScreenStyles.doneButtonContainer}
        >
          <Text 
          style={FitScreenStyles.doneButtonText}>DONE</Text>
        </Pressable>
      )}

      <Pressable style={FitScreenStyles.preButton}>

        <Pressable
          disabled={index == 0}
          onPress={() => {
            navigation.navigate("Break");
            setTimeout(() => {
              setIndex(index - 1);
            }, 2000);
          }}
          style={FitScreenStyles.prevButtonContainer}
        >
          <Text 
          style={FitScreenStyles.prevButtonText}>PREV</Text>
        </Pressable>

        {index + 1 >= excersise.length ? (

          <Pressable
            onPress={() => {
              navigation.navigate("Home");
            }}
            style={FitScreenStyles.skipButtonContainer}
          >
            <Text 
            style={FitScreenStyles.skipButtonText}>SKIP</Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              navigation.navigate("Break");
              setTimeout(() => {
                setIndex(index + 1);
              }, 2000);
            }}
            style={FitScreenStyles.skipButtonContainer}
          >
            <Text 
            style={FitScreenStyles.skipButtonText}>SKIP</Text>
          </Pressable>
        )}
      </Pressable>
    </SafeAreaView>
  );
};
export default FitScreen;
