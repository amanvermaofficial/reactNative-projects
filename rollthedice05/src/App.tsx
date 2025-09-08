import { StyleSheet, Text, View, Image, ImageSourcePropType, Pressable } from 'react-native'
import React, { useState } from 'react'
import type { JSX, PropsWithChildren } from 'react'

import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'

import ReactNativeHapticFeedback from "react-native-haptic-feedback";

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false
};

const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  )
}

const getDiceImage = (randomNum:number) => {
  switch (randomNum) {
      case 1: return DiceOne
      case 2: return DiceTwo
      case 3: return DiceThree
      case 4: return DiceFour
      case 5: return DiceFive
      case 6: return DiceSix
    }
}
export default function App(): JSX.Element {
  const [diceImage1, setDiceImage1] = useState<ImageSourcePropType>(DiceOne)
  const [diceImage2, setDiceImage2] = useState<ImageSourcePropType>(DiceOne)

  const rollDice = () => {
    const randomNum1 = Math.floor(Math.random() * 6) + 1
    const randomNum2 = Math.floor(Math.random() * 6) + 1

    setDiceImage1(getDiceImage(randomNum1))
    setDiceImage2(getDiceImage(randomNum2))
    
    

    ReactNativeHapticFeedback.trigger("impactHeavy", options);
  }
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage1} />
      <Dice imageUrl={diceImage2} />
      <Pressable onPress={rollDice}>
        <Text style={styles.rollDiceBtnText}>Roll the dice</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  diceImage: {
    
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 4,
    borderWidth: 2,
    fontSize: 20,
    borderColor: '#E5E0FF',
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
})