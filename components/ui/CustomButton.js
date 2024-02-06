import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  onClick,
  styles: customStyles = {},
  textStyles = {},
}) => {
  return (
    <TouchableOpacity style={[styles.btn, customStyles]}>
      <Text style={[styles.text, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    margin: 8,
    backgroundColor: "blue",
    padding: 12,
    color: "#fff",
    borderRadius: 8,
    alignItems: "center",
  },
  text: {
    fontFamily: "Poppins_500Medium",
    // fontSize: 16,
  },
});
