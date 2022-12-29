import { StyleSheet, Text, View } from "react-native";
import React from "react";

const List = () => {
  return (
    <View style={styles.container}>
      <Text>List</Text>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    padding: 16,
  },
});
