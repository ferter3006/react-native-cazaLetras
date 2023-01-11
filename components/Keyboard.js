import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Keyboard = ({ passedRow, handlePressLetter }) => {
  return (
    <View style={styles.keyboard}>
      <View style={styles.keyboardRow}>
        {passedRow.map((letter, i) => (
          <TouchableOpacity key={i} onPress={() => handlePressLetter(letter)}>
            <View style={styles.key}>
              <Text style={styles.keyLetter}>{letter}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  // keyboard
  keyboard: {
    flexDirection: "column",
  },
  keyboardRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  key: {
    backgroundColor: "#DAF7A6",
    //padding: 10,    
    paddingBottom: 10,
    paddingTop: 10,    
    paddingLeft: 9,
    width: 31.5,
    margin: 4,
    borderRadius: 7,
  },
  keyLetter: {
    fontWeight: "700",
    fontSize: 18.5,
  },
})

export default Keyboard