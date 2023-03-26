import { Text, View, Image, Pressable } from "react-native";
import React from "react";
import fitness from "./fitness";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/FitnessCardsStyles";

const FitnessCards = () => {
    const FitnessData = fitness;
    const navigation = useNavigation();

    return (
        <View>
           {FitnessData.map((item, key) => (
            <Pressable  
            // onPress={()=> console.warn("Clicked", item.name)}
                onPress={() => navigation.navigate("Workout", {
                    image:item.image,
                    excersises:item.excersises,
                    id:item.id
                })}
                style={styles.container}
                key={key}>
                <Image
                    style={styles.image}
                    source={{ uri: item.image }}
                />
                <Text style={styles.text}>{item.name}</Text>
            </Pressable>
           ))}
        </View> 
    )
}

export default FitnessCards;

