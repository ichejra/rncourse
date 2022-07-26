import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CategoryGridTile = ({ title, color, onPress }) => {
  //! navigation as a prop is dedicated only to screen components
  // const navigation = useNavigation(); //* we can use navigation like this if we want to navigate from a child componenent as it does not have navigation as a prop

  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 150,
    margin: 16,
    borderRadius: 8,
    elevation: 4,
    //* if we want shadow to be applied the style must have bgColor attribute
    backgroundColor: "white",
    //* elevation for ios
    shadowColor: "black",
    // shadowOppacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    //* elevation for ios
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    // * hidden just to make sure the andrid_ripple effect doesn't beyond the rounded corner
    // * and visible on ios cs the shadow disapears when overflow is hidden
  },

  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
