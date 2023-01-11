import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { setNickName } from '../redux/actions/userActions';

const HomeScreen = ({ navigation }) => {

    const [username, setUsername] = useState('username')
    const dispatch = useDispatch()

    const tInput = {
        backgroundColor: "white",
        height: 40,
        width: "50%",
        marginBottom: 35,
        //marginTop: 30,
        textAlign: "center",
        fontSize: 19,
    }

    const info = {
        fontSize: 20,
    }
    const info2 = {
        fontSize: 12,
        color: "grey",
        marginBottom: 45
    }
    const viewContenedor = {
        alignItems: "center",
    }

    const crear_user = () => {
        dispatch(setNickName(username))
        navigation.navigate('PantallaSelectStage')
    }

    const handleHuntButton = () => {
        if (username === 'username') {
            alert('Change the username, lameruzo')
            return
        } else if (username.length < 5) {
            alert('5 carácteres mínimo!')
            return
        } else if (username.length > 11) {
            alert('12 carácteres máximo!')
            return
        }
        crear_user()

    }


    return (
        <SafeAreaView>
            <View style={viewContenedor}>
                <Text style={info}>Ingresa tu nickname</Text>
                <Text style={info2}>Se mostrará en la tabla de clasificación según tu puntuación</Text>
                <TextInput onFocus={() => setUsername('')} style={tInput} value={username} onChangeText={setUsername} />
                <Button
                    title="Let's Go!"
                    onPress={handleHuntButton}
                />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen