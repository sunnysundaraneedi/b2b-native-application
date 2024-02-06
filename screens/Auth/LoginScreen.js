import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../components/ui/Input";

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <Text>LoginScreen</Text>
      <Input />
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
