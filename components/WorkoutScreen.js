import React, { useContext } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FitnessItems } from '../Context';
import styles from '../styles/WorkoutScreenStyles';

const WorkoutScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { completed, setCompleted } = useContext(FitnessItems);

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Image style={styles.image} source={{ uri: route.params.image }} />
        <Ionicons name="arrow-back-outline" 
        style={styles.backButton}  
         onPress={() => navigation.goBack()} />

        {route.params.excersises.map((item, key) => (
          <Pressable style={styles.pressable} key={key}>
            <Image style={styles.thumbnail} source={{ uri: item.image }} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.sets}>{`x${item.sets}`}</Text>
            </View>
            {completed.includes(item.name) ? (
              <AntDesign name="checkcircle" style={styles.checkIcon} />
            ) : null}
          </Pressable>
        ))}
      </ScrollView>
      <Pressable
        style={styles.startButton}
        onPress={() => {
          navigation.navigate('Fit', {
            excersises: route.params.excersises,
          });
          setCompleted([]);
        }}>
        <Text style={styles.startButtonText}>START</Text>
      </Pressable>
    </>
  );
};

export default WorkoutScreen;
