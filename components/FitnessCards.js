import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import fitness from "./fitness";

const FitnessCards = () => {
    const FitnessData = fitness;

    return (
        <View>
        
           {FitnessData.map((item, key) => (
            <Pressable
            style={{alignItems: "center", justifyContent: "center", margin: 10 }} 
                key={key}>
            <Image
            style={{ width:"95%", height:140, borderRadius: 7 }}
                source={{ uri: item.image }}/>
            <Text 
            style={{ position:"absolute", color:"white",fontSize:16, fontWeight:"bold", left:20, top:25 }}>
                {item.name} </Text>
            
            </Pressable>
           ))}
        </View> 
    )
}

export default FitnessCards

const styles = StyleSheet.create({});
