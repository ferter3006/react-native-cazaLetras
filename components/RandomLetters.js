import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

const RandomLetters = ({ top, left, allLettersIndex, allLetters }) => {

    const randomLettersStyle = {
        color: "black",
        top: `${top}%`,
        left: `${left}%`,
        fontSize: 25,
        fontWeight: "800",
    }

    return (
        <Text style={randomLettersStyle}>{allLetters[allLettersIndex]}</Text>
    )
}


export default RandomLetters