import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import ActionBar from "./ActionBar";
import Options from "./Options";

const AppLayout = ({
  title,
  onProfile,
  onRefresh,
  onOptionClick,
  children,
}) => {
  return (
    <View style={styles.container}>
      <ActionBar
        title={title}
        onProfile={onProfile}
        onRefresh={onRefresh}
        onOptionClick={onOptionClick}
      />

      <Options onOptionClick={onOptionClick} />
      <ScrollView style={styles.contentContainer}>{children}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export default AppLayout;
