import React from "react";
import { ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const Options = ({ onOptionClick }) => {
  const options = [
    { icon: "settings" },
    { icon: "bell" },
    { icon: "camera" },
    { icon: "search" },
    // Add more options here
  ];

  return (
    <ScrollView horizontal style={styles.optionsContainer}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.option}
          onPress={() => onOptionClick(option.icon)}
        >
          <Feather name={option.icon} size={24} color="white" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  optionsContainer: {
    flexDirection: "row",
    paddingVertical: 8,
    backgroundColor: "blue", // Change the background color to blue
  },
  option: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },
});

export default Options;
