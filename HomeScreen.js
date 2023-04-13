import React, { useState,useEffect } from "react";
import { Text, View, ScrollView, Pressable } from "react-native";
import FitnessCards from "./components/FitnessCards";
import { styles } from "./styles/HomeScreenStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from '@expo/vector-icons';
import { Share } from 'react-native';

const HomeScreen = () => {
  const [completed, setCompleted] = useState([]);
  const [workout, setWorkout] = useState(0);
  const [calories, setCalories] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const [shareMessage, setShareMessage] = useState('Check out my workout progress!');
  
  // shared with activity type of result.activityType
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `I have completed ${workout} workouts and burnt ${calories} calories on this awesome fitness app!`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

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
          WELCOME TO HOME  
        </Text>
        <Pressable onPress={onShare} style={styles.shareButton}>
        <Ionicons name='barbell-outline' size={25} color="white" />
      </Pressable>
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
