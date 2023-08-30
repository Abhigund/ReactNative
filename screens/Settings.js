import React from "react";
import { Text, StyleSheet, View } from "react-native";
import AppLayout from "../components/AppLayout";

const Settings = () => {
  const handleProfileClick = () => {
    // Handle profile icon click
  };

  const handleRefreshClick = () => {
    // Handle refresh icon click
  };

  const handleOptionClick = (option) => {
    // Handle option click based on the 'option' parameter
    console.log(`Option clicked: ${option}`);
    // Add navigation logic here if needed
  };

  return (
    <AppLayout
      title="Settings"
      onProfile={handleProfileClick}
      onRefresh={handleRefreshClick}
      onOptionClick={handleOptionClick}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Settings Screen</Text>
        <Text style={styles.subtitle}>Customize Your App</Text>
        <Text style={styles.content}>
          Here you can customize various settings for your app. Make it your
          own!
        </Text>
        {/* Add more content here */}
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
    color: "#666",
  },
  content: {
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 20,
    color: "#333",
  },
});

export default Settings;
