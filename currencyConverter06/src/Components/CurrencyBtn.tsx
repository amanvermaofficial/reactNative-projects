import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { JSX, PropsWithChildren } from 'react'

type CurrencyBtnProps = PropsWithChildren<{
  name:string;
  flag:string;
}>

export default function CurrencyBtn(props:CurrencyBtnProps):JSX.Element {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer:{
    alignItems:'center',
  },
  flag:{
    fontSize:28,
    color:'#FFFFFF',
    marginBottom:4
  },
  country:{
    fontSize:14,
    color: "#201f1fff",
  }
})