import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_ENDPOINT } from '../api'


const EndStats = ({ timing }) => {

    const [ranking, setRanking] = useState(null)

    const userState = useSelector((state) => state.user)

    const viewStyle = {
        alignItems: "center",
        backgroundColor: "#ACFFCC",
        borderRadius: 5,
        margin: 5
    }

    const textStyle = {
        fontSize: 18,
        marginTop: 5,
        justifyContent: "center",
    }

    const textStyleW = {
        marginTop: 25,
        marginBottom: 5,
        color: "#8E009D",
        fontSize: 22,
    }

    const rankingStyle = {
        fontSize: 16,
        marginTop: 5,
        marginBottom: 2,
        width: "100%",
        textAlign: "right",
        marginRight: "67%",
    }

    useEffect(() => {
        fetch(`${API_ENDPOINT}/api/app_cazaletras_ranking/${userState.actualStage}`, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "keypassword": "159-ferter-1234000",
                "nickname": userState.username,
                "points": timing
            })
        })
            .then(response => response.json())
            .then(jsonResponse => {
                setRanking(jsonResponse.data)
            })
    }, [])

    return (
        <View style={viewStyle}>
            <Text style={textStyleW}>EndStats View</Text>
            <Text style={textStyle}>Your time: {timing} s</Text>
            <Text style={textStyleW}>World Ranking (stage {userState.actualStage - 1}): </Text>
            {
                !ranking ? null :
                    ranking.map((cosa, index) => (
                        <Text key={index} style={rankingStyle}>{index + 1} ) {cosa.nickname} - {cosa.points} s</Text>
                    ))
            }
        </View>
    )
}

export default EndStats