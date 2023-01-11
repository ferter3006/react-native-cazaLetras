import { View, Text, Button, StyleSheet, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'

import Keyboard from '../components/Keyboard'
import Layout from '../components/Layout'
import Puntuacion from '../components/Puntuacion'
import EndStats from '../components/EndStats'
import { useDispatch, useSelector } from 'react-redux'
import { incrementStage } from '../redux/actions/userActions'

const Hunt = ({ navigation }) => {

    // general state
    const userState = useSelector((state) => state.user)

    // button show/notshow boolean
    const [activeRound, setActiveRound] = useState(false);

    // show or not show Stats or Layout comp
    const [endRound, setEndRound] = useState(false)

    //Points/life/time
    const [points, setPoints] = useState(0)
    const [timing, setTiming] = useState(0)
    const [counter, setCounter] = useState(0)
    const [newDate1, setNewDate1] = useState(0)

    // keyboard digits stage 1 (normal keyboard)
    const [row1, setRow1] = useState(["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"])
    const [row2, setRow2] = useState(["A", "S", "D", "F", "G", "H", "J", "K", "L"])
    const [row3, setRow3] = useState(["Z", "X", "C", "V", "B", "N", "M"])

    // ...for keyboar digits stage 2
    let allrows = [...row1, ...row2, ...row3]

    const barajaTeclado = () => {
        for (let i = 0; i < allrows.length; i++) {
            let randomCell = Math.floor(Math.random() * allrows.length)
            let temp = allrows[i]
            allrows[i] = allrows[randomCell]
            allrows[randomCell] = temp
        }
        setRow1(allrows.slice(0, 10))
        setRow2(allrows.slice(10, 19))
        setRow3(allrows.slice(19, 26))
    }

    // all letters in one array
    const allLetters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]
    const [allLettersIndex, setAllLettersIndex] = useState(0)

    // 50% mas or min for top/left const (position of letter spawned)
    const max = 50
    const min = -50

    // var and setters for random position of letters spawned
    const [top, setTop] = useState(-50)
    const [left, setLeft] = useState(-50)

    //dispatch 
    const dispatch = useDispatch()

    // explicit function randomize next Letter
    const randomizePositionOfLetter = () => {
        setTop(Math.floor(Math.random() * (max - min + 1)) + min)
        setLeft(Math.floor(Math.random() * (max - min + 1)) + min)
        setAllLettersIndex(Math.floor(Math.random() * allLetters.length))
    }

    // Declare random position on componenet Mount
    useEffect(() => {
        randomizePositionOfLetter()
    }, [])

    //end  Round when 15 letters hunted
    const handleEndOfRound = () => {
        dispatch(incrementStage())
        const date2 = new Date().valueOf()
        clearInterval(counter)
        const dif = date2 - newDate1
        setTiming(dif / 1000)
        setEndRound(true)
    }


    // handle actions when letter pressed
    const handlePressLetter = (e) => {
        if (allLetters[allLettersIndex] === e) {
            randomizePositionOfLetter()
            setPoints(points + 1)
            if (userState.actualStage === 2) { barajaTeclado() }
            if (points === 14) {
                handleEndOfRound()
            }
        }
    }

    // start the game' Stage
    const handleHuntStart = () => {
        // prepare game
        const date1 = new Date().valueOf()
        if (userState.actualStage === 2) { barajaTeclado() }
        setNewDate1(date1)
        setActiveRound(true)
        let tempTemps = 0

        // start counting temps
        setCounter(setInterval(() => {
            tempTemps += 1
            setTiming(tempTemps)

            // at stage 3 I randomize keyboard every 2 seconds
            if ((userState.actualStage === 3) && (tempTemps % 2 === 0)) { barajaTeclado() }
        }, 1000))
    }

    const handleGoHomeButton = () => {
        clearInterval(counter)
        navigation.navigate('PantallaSelectStage')
    }

    return (

        <View style={styles.huntLayout}>
            <Button
                title="Go Back!"
                onPress={handleGoHomeButton}
            />
            {!endRound ?
                <>
                    <Layout activeRound={activeRound} handleHuntStart={handleHuntStart} top={top} left={left} allLetters={allLetters} allLettersIndex={allLettersIndex} />
                    <Puntuacion points={points} timing={timing} />
                    <Keyboard passedRow={row1} handlePressLetter={handlePressLetter} />
                    <Keyboard passedRow={row2} handlePressLetter={handlePressLetter} />
                    <Keyboard passedRow={row3} handlePressLetter={handlePressLetter} />
                </>
                : <EndStats timing={timing} />
            }
        </View>

    )
}

const styles = StyleSheet.create({
    huntLayout: {
        backgroundColor: "#2ECC71",
    }
})
export default Hunt