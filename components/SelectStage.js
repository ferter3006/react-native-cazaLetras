import { View, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'

const SelectStage = ({ navigation }) => {

    const userState = useSelector((state) => state.user)


    // functions handlers
    const handleHuntButton = (e) => {
        if (e === userState.actualStage) {
            navigation.navigate('PantallaHunt')
        }
    }

    return (
        <SafeAreaView>
            <View style={viewContenedor}>
                <View style={stylebutton}>
                    <Button
                        title="Go Hunt Stage 1"
                        color={userState.actualStage === 1 ? "" : "grey"}
                        onPress={() => handleHuntButton(1)}
                    />
                </View>
                <View style={stylebutton}>
                    <Button
                        style={stylebutton}
                        title="Go Hunt Stage 2"
                        color={userState.actualStage === 2 ? "" : "grey"}
                        onPress={() => handleHuntButton(2)}
                    />
                </View>
                <View style={stylebutton}>
                    <Button
                        style={stylebutton}
                        title="Go Hunt Stage 3"
                        color={userState.actualStage === 3 ? "" : "grey"}
                        onPress={() => handleHuntButton(3)}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

// style consts
const stylebutton = {
    marginTop: 35,
    width: "70%"
}

const viewContenedor = {
    width: "100%",
    alignItems: "center",
}

export default SelectStage