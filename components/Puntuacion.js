import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Puntuacion = ({ points, timing }) => {

    const userState = useSelector((state) => state.user)

    const viewStyle = {
        backgroundColor: "black",
        marginLeft: 2,
        marginRight: 2,
        borderRadius: 5,
    }

    const puntuacionTextStyle = {
        color: "red",
        width: "100%",
        left: "2%",
    }

    const lifeTextStyle = {
        color: "white",
        width: "100%",
        position: "absolute",
        textAlign: "right",
        paddingRight: 3
    }

    const timingTextStyle = {
        color: "lightgreen",
        position: "absolute",
        width: "100%",
        textAlign: "center",
    }

    return (
        <View style={viewStyle}>
            <Text style={puntuacionTextStyle}>{points}/15</Text>
            <Text style={timingTextStyle}>{timing.toFixed()}</Text>
            <Text style={lifeTextStyle}>Stage: {userState.actualStage}</Text>
        </View>
    )
}

export default Puntuacion