import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { playbackService } from '../../musicPlayerService'
import TrackPlayer, { usePlaybackState,State } from 'react-native-track-player'
export default function ControlCenter() {
  const { state } = usePlaybackState();

  const skipToNext = async () => {
    await TrackPlayer.skipToNext()
  }
  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious()
  }
  const togglePlayback = async (playback: State|undefined) => {
    if(!playback) return;
    const currentTrack = await TrackPlayer.getActiveTrack();

    if (currentTrack !== null) {
      if (playback === State.Paused || playback === State.Ready) {
        await TrackPlayer.play()
      } else {
        await TrackPlayer.pause()
      }
    }
  }

  return (
    <View>
      <Pressable onPress={skipToPrevious}>
        <Icon style={styles.icon} name="skip-previous" size={40} />
      </Pressable>
      <Pressable onPress={() => togglePlayback(state)}>
        <Icon
          style={styles.icon}
          name={state === State.Playing ? "pause" : "play-arrow"}
          size={75} />
      </Pressable>
      <Pressable onPress={skipToNext}>
        <Icon style={styles.icon} name="skip-next" size={40} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 56,

    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#FFFFFF',
  },
  playButton: {
    marginHorizontal: 24,
  },
});//slider and album