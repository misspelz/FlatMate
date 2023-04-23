import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({ buttonText, containerStyles }) => {
  return (
    <TouchableOpacity style={[styles.root, { ...containerStyles }]}>
      <Text style={styles.text}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#9D69FC",
    height: 50,
    width: "80%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 18,
  },
});
