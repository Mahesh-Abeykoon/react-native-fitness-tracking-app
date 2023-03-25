import { StyleSheet, Text, SafeAreaView } from "react-native";
import React from 'react';
import { useRoute } from "@react-navigation/native";

const WorkoutScreen = () =>{
    const route = useRoute();
    console.log(route.params)
    return(
        <SafeAreaView>
            <Text>Mahesh Abeykoon</Text>
        </SafeAreaView>
    )
}

export default WorkoutScreen

const styles = StyleSheet.create({})