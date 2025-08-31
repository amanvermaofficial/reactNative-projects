import { Linking, StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink)
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's new in Javascript 21 - ES12</Text>
        </View>
        <Image
        source={{ uri: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>Just like every year, Javascript brings in new features. This year
            javascript is bringing 4 new features, which are almost in
            production rollout. I won't be wasting much more time and directly
            jump to code with easy to understand examples.</Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
          onPress={()=>openWebsite('https://developer.mozilla.org/en-US/docs/Web/JavaScript')}
          >
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>openWebsite('https://github.com/amanvermaofficial')}>
            <Text style={styles.socialLinks}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText:{
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:8
  },
  card:{
    width:380,
    height:370,
    borderRadius:6,
    marginVertical:12,
    marginHorizontal:16
  },
  cardElevated:{
    backgroundColor:'#ffe1c6ff',
    elevation:3,
    shadowOffset:{
      width:1,
      height:1
    },
    shadowColor:'#0f0f0fff',
    shadowOpacity:0.4
  },
  headingContainer:{
    height:40,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  headerText:{
    fontSize:16,
    fontWeight:600,
    color:'black'
  },
  cardImage:{
    height:200
  },
  bodyContainer:{
    padding:10
  },
  socialLinks:{
    fontSize:16,
    color:'black',
    backgroundColor:'white',
    paddingHorizontal:20,
    paddingVertical:6,
    borderRadius:6
  },
  footerContainer:{
    padding:8,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center'
  }
})