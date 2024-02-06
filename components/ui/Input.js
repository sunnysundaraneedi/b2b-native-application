import {
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef } from "react";

const Input = ({ placeholder, onChange }) => {
  const shakeAnimation = useRef(new Animated.Value(0)).current;

  //   useEffect(() => {
  //     startShakeAnimation();
  //   }, []);

  const startShakeAnimation = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true,
        // delay: 250,
      }),
    ]).start();
  };

  return (
    <Animated.View style={{ transform: [{ translateX: shakeAnimation }] }}>
      <TextInput />
      <Text style={styles.errorText}>Error Message</Text>
      <TouchableOpacity onPress={startShakeAnimation}>
        <Text>Shake</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Input;

const styles = StyleSheet.create({
  errorText: {
    color: "red",
    fontFamily: "Poppins_600SemiBold",
  },
});
