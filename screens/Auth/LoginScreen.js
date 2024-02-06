import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../components/ui/Input";
import CustomButton from "../../components/ui/CustomButton";

const LoginScreen = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text>LoginScreen</Text>
      <Input
        placeholder="Username"
        error={error}
        leftIcon="user"
        styles={styles.input}
      />
      <Input
        placeholder="Password"
        error={error}
        leftIcon="lock"
        rightIcon="eye-slash"
        styles={styles.input}
      />
      <CustomButton
        title="Login"
        styles={styles.button}
        textStyles={styles.buttonText}
      />
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
  input: {},
  button: {
    width: "100%",
    marginTop: 24,
    backgroundColor: "red",
  },
  buttonText: {
    color: "white",
  },
});
