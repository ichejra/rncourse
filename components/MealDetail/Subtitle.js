import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Subtitle = ({children}) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    margin: 4,
    padding: 6,
    borderBottomColor: "#D9AF83",
    borderBottomWidth: 2,
    marginHorizontal: 12,
  },
  subtitle: {
    color: "#D9AF83",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
