import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const ActionBar = ({ title, onProfile, onRefresh, onOptionClick }) => {
  return (
    <View style={styles.actionBar}>
      <TouchableOpacity onPress={onProfile} style={styles.iconContainer}>
        <Feather name="user" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity onPress={onRefresh} style={styles.iconContainer}>
        <Feather name="refresh-cw" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onOptionClick} style={styles.iconContainer}>
        <Feather name="menu" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  actionBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white", // Change the background color to white
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  iconContainer: {
    padding: 8,
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ActionBar;
