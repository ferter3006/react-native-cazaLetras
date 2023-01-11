import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import RandomLetters from './RandomLetters'


const Layout = ({ activeRound, handleHuntStart, top, left, allLettersIndex, allLetters }) => {
    return (
        <View style={styles.layout}>
            {activeRound ?
                <RandomLetters top={top} left={left} allLetters={allLetters} allLettersIndex={allLettersIndex} /> :
                <Pressable
                    style={({ pressed }) => pressed ? styles.startButtonPressed : styles.startButton}
                    onPress={handleHuntStart}
                >
                    <Text style={styles.startButtonText}>
                        ¡START HUNT!
                    </Text>
                </Pressable>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    layout: {
        backgroundColor: "#fff",
        padding: 10,
        margin: 4,
        borderRadius: 7,
        height: "65%",
        alignItems: "center",
        alignItems: 'center',
        justifyContent: 'center',        

    },
    startButton: {
        backgroundColor: "#f8a",
        padding: 15,
        borderRadius: 50,
        width: 150,
        borderWidth: 1,
    },
    startButtonPressed: {
        backgroundColor: "#D7BDE2",
        padding: 15,
        borderRadius: 50,
        width: 150,
        borderWidth: 1,
    },
    startButtonText: {
        textAlign: "center",
        //color: "#323",
        fontWeight: "600",
    }
})

export default Layout