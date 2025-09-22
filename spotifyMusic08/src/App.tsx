import React ,{useState,useEffect, JSX} from 'react'
import { StyleSheet, Text, View,ActivityIndicator} from 'react-native'

import { setupPlayer,addTrack } from '../musicPlayerService'
import { SafeAreaView } from 'react-native-safe-area-context'
import { playbackService } from '../musicPlayerService'

export default function App():JSX.Element {
  const [isPlayerReady, setIsPlayerReady] = useState(false)

  async function setup(){
    const isSetup = await setupPlayer()
    if(isSetup){
      await addTrack()
    }

    setIsPlayerReady(isSetup)
  }

  useEffect(()=>{
    setup()
  },[])

  if(!isPlayerReady){
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }

  return (
    <View style={styles.container}>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
