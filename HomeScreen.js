import React, { useContext } from "react";
import { Text, View, ScrollView } from "react-native";
import { FitnessItems } from "./Context";

const HomeScreen = () => {
  const {
    workoutsDone,
    caloriesBurnt,
    minutesSpent,
  } = useContext(FitnessItems);

  return (

    <ScrollView style={{ marginTop: 50 }}>
      <View
        style={{
          backgroundColor: "#RD123P",
          padding: 15,
          height: 150,
          width: "100%",
        }}>
        <Text style={{ 
            color: "white", 
            textAlign:"center", 
            fontSize: 16 }}>
                
          WELCOME TO HOME WORKOUT</Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 22,
          }}>
          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}>   
              {workoutsDone}
            </Text>
            <Text style={{ fontSize: 16, marginTop: 6 }}>
            WORKOUT
            </Text>
          </View>

          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}>   
              {caloriesBurnt}
            </Text>
            <Text style={{ fontSize: 16, marginTop: 6 }}>
                CALORIES
            </Text>
          </View>

          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}>   
              {minutesSpent}
            </Text>
            <Text style={{ fontSize: 16, marginTop: 6 }}>
            MINUTES
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;