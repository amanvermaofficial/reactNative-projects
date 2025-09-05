import React, { useState } from 'react';
import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


function App() {
  const [randomColor, setRandomColor] = useState('#913333')
  const [colors, setColors] = useState(['red', 'white'])
  const generateColor = () => {
    const hexCode = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexCode[Math.floor(Math.random() * 16)]
    }
    return color;
  }
  const handleColors = () => {
    setRandomColor(generateColor())
    setColors([generateColor(), generateColor()])
  }
  return (
    <SafeAreaView style={[{ flex: 1, backgroundColor: randomColor }]}>
      <StatusBar backgroundColor={randomColor} barStyle="dark-content" />
      <View style={[styles.container]}>
        <View style={{ flexDirection: 'row',marginBottom: 20 }}>
          <View style={[styles.square, { backgroundColor: colors[0] }]} />
          <View style={[styles.circle, { backgroundColor: colors[1] }]} />
        </View>
        <TouchableOpacity onPress={handleColors}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionBtn: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 12
  },
  actionBtnTxt: {
    color: "black",
    fontSize: 20,
    fontWeight: 600
  },
  square: {
    width: 100,
    height: 100,
    margin: 10,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 10,
  }

});

export default App;
