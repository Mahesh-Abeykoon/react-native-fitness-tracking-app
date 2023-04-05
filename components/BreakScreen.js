import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, Text, SafeAreaView } from "react-native";
import styles from "../styles/BreakScreenStyles";

const BreakScreen = () => {
  const navigation = useNavigation();
  let timer = 0;
  const [timeLeft, setTimeLeft] = useState(5);

  const startTime = () => {
    setTimeout(() => {
      if (timeLeft <= 0) {
        navigation.goBack();
        clearTimeout(timer);
      }
      setTimeLeft(timeLeft - 1);
    }, 1000);
  };

  useEffect(() => {
    startTime();
    return () => clearTimeout(timer);
  }, );

  return (
    <SafeAreaView>
      <Image
        source={{
          uri: "https://imgs.search.brave.com/9xHgsO754Y_RyB47UqR8Ke0EzAfOPaBuEp-4Cq9p_iw/rs:fit:1000:851:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvZml0bmVzcy9m/aXRuZXNzX1BORzU3/LnBuZw",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>HAVE A BREAK!</Text>

      <Text style={styles.timer}>{timeLeft}</Text>
    </SafeAreaView>
  );
};

export default BreakScreen;
