import {
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const Input = ({
  placeholder,
  onChange,
  error = "",
  value,
  rightIcon = "",
  leftIcon = "",
  styles: customStyles = {},
}) => {
  const shakeAnimation = useRef(new Animated.Value(0)).current;

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
    <Animated.View
      style={[
        { transform: [{ translateX: shakeAnimation }] },
        styles.inputContainer,
      ]}
    >
      {leftIcon && (
        <Icon name={leftIcon} size={24} color="black" style={styles.iconLeft} />
      )}
      <TextInput
        style={[
          styles.input,
          customStyles,
          { marginLeft: leftIcon ? 22 : 0 },
          { marginRight: rightIcon ? 22 : 0 },
        ]}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {rightIcon && (
        <Icon
          name={rightIcon}
          size={24}
          color="black"
          style={styles.iconRight}
        />
      )}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </Animated.View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 11,
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginVertical: 4,
  },
  input: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
  },
  iconLeft: {
    position: "absolute",
    left: 12,
    zIndex: 1,
  },
  iconRight: {
    position: "absolute",
    right: 12,
    zIndex: 1,
  },

  textInput: {
    fontFamily: "Poppins_400Regular",
  },
  errorText: {
    color: "red",
    fontFamily: "Poppins_600SemiBold",
  },
});
