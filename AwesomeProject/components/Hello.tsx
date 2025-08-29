import React, { JSX } from "react";
import { Text, View, StyleSheet, useColorScheme } from "react-native";

function Hello(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>Hello World.Aman..!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  whiteText: {
    color: 'white',
    fontSize: 28
  },
  darkText: {
    color: 'black',
    fontSize: 28
  }
})

export default Hello;
