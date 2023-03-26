import React, { useContext } from "react";
import { Text, View, ScrollView } from "react-native";
import FitnessCards from "./components/FitnessCards";
import { FitnessItems } from "./Context";
import { styles } from "./styles/HomeScreenStyles";

const HomeScreen = () => {
  const {
    workoutsDone,
    caloriesBurnt,
    minutesSpent,
  } = useContext(FitnessItems);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          WELCOME TO HOME WORKOUT
        </Text>
        <View style={styles.row}>
          <View style={styles.metricContainer}>
            <Text style={styles.metricText}>
              {workoutsDone}
            </Text>
            <Text style={styles.metricLabel}>
              WORKOUT
            </Text>
          </View>
          <View style={styles.metricContainer}>
            <Text style={styles.metricText}>
              {caloriesBurnt}
            </Text>
            <Text style={styles.metricLabel}>
              CALORIES
            </Text>
          </View>
          <View style={styles.metricContainer}>
            <Text style={styles.metricText}>
              {minutesSpent}
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
