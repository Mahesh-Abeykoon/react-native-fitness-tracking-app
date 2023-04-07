import React, { useState,useEffect } from "react";
import { Text, View, ScrollView } from "react-native";
import FitnessCards from "./components/FitnessCards";
import { styles } from "./styles/HomeScreenStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = () => {
  const [completed, setCompleted] = useState([]);
  const [workout, setWorkout] = useState(0);
  const [calories, setCalories] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    AsyncStorage.getItem("workoutData").then((data) => {
      if (data) {
        const parsedData = JSON.parse(data);
        setCompleted(parsedData.completed);
        setWorkout(parsedData.workout);
        setMinutes(parsedData.minutes);
        setCalories(parsedData.calories);
      }
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          WELCOME TO HOME WORKOUT
        </Text>
        <View style={styles.row}>
          <View style={styles.metricContainer}>
            <Text style={styles.metricText}>
              {workout}
            </Text>
            <Text style={styles.metricLabel}>
              WORKOUT
            </Text>
          </View>
          <View style={styles.metricContainer}>
            <Text style={styles.metricText}>
              {calories}
            </Text>
            <Text style={styles.metricLabel}>
              CALORIES
            </Text>
          </View>
          <View style={styles.metricContainer}>
            <Text style={styles.metricText}>
              {minutes}
            </Text>
            <Text style={styles.metricLabel}>
              MINUTES
            </Text>
          </View>
        </View>
      </View>
      <FitnessCards />
    </ScrollView>
  );
};

export default HomeScreen;
