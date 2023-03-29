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
        style={FitScreenStyles.image}
        source={{ uri: current.image }}
      />
      <Text style={FitScreenStyles.title}>{current.name}</Text>

      <Text style={FitScreenStyles.subtitle}>x{current.sets}</Text>

      {index + 1 >= excersise.length ? (
        <Pressable
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={FitScreenStyles.button}
        >
          <Text style={FitScreenStyles.buttonText}>DONE</Text>
        </Pressable>
      ) : (
        <Pressable
          onPress={() => {
            navigation.navigate("Rest");
            setCompleted([...completed, current.name]);
            setWorkout(workout + 1);
            setMinutes(minutes + 2.5);
            setCalories(calories + 6.3);
            setTimeout(() => {
              setIndex(index + 1);
            }, 2000);
          }}
          style={FitScreenStyles.button}
        >
          <Text style={FitScreenStyles.buttonText}>DONE</Text>
        </Pressable>
      )}

      <Pressable style={FitScreenStyles.controlsContainer}>
        <Pressable
          disabled={index == 0}
          onPress={() => {
            navigation.navigate("Rest");
            setTimeout(() => {
              setIndex(index - 1);
            }, 2000);
          }}
          style={[FitScreenStyles.controlButton, { backgroundColor: 'green' }]}
        >
          <Text style={FitScreenStyles.controlButtonText}>PREV</Text>
        </Pressable>

        {index + 1 >= excersise.length ? (
          <Pressable
            onPress={() => {
              navigation.navigate("Home");
            }}
            style={[FitScreenStyles.controlButton, { backgroundColor: 'green' }]}
          >
            <Text style={FitScreenStyles.controlButtonText}>SKIP</Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              navigation.navigate("Rest");
              setTimeout(() => {
                setIndex(index + 1);
              }, 2000);
            }}
            style={[FitScreenStyles.controlButton, { backgroundColor: 'green' }]}
          >
            <Text style={FitScreenStyles.controlButtonText}>SKIP</Text>
          </Pressable>
        )}
      </Pressable>
    </SafeAreaView>
  );
};
export default FitScreen;
