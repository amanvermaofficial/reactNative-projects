import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'


export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.headingText}>Elevated Cards</Text>
            <ScrollView horizontal style={styles.container}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>me</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>to</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Scroll</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>more...</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>{'\u{1F600}'}</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        padding: 8
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
    },
    cardElevated: {
        backgroundColor: '#ffe6a1ff',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#000000ff',
        shadowOpacity: 0.2,
        shadowRadius: 2
    }
})