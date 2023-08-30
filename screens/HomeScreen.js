import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import AppLayout from "../components/AppLayout";
import Settings from "./Settings";
const HomeScreen = () => {
  const [section, setSection] = useState("home");

  const handleProfileClick = () => {
    // Handle profile icon click
  };

  const handleRefreshClick = () => {
    // Handle refresh icon click
  };

  const handleOptionClick = (option) => {
    if (option === "settings") {
      setSection("settings");
    } else if (option === "home") {
      setSection("home");
    }
  };

  return (
    <AppLayout
      title="Home"
      onProfile={handleProfileClick}
      onRefresh={handleRefreshClick}
      onOptionClick={handleOptionClick}
    >
      {section === "home" ? (
        <View>
          <Text style={styles.text}>Home Screen Content</Text>
          {/* Add your content here */}
        </View>
      ) : (
        <View>
          <Settings />
          {/* <Text style={styles.text}>Settings Screen Content</Text> */}
          {/* Add your settings content here */}
        </View>
      )}
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreen;
