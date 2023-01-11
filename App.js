import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './screens/HomeScreen'
import Hunt from './screens/Hunt'
import SelectStage from './screens/SelectStage'

import { Provider } from 'react-redux'
import { store } from './redux/store'



const Stack = createNativeStackNavigator()

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name="PantallaHome" component={HomeScreen} />
          <Stack.Screen name="PantallaHunt" component={Hunt} />
          <Stack.Screen name="PantallaSelectStage" options={{ headerBackVisible: false }} component={SelectStage} />

        </Stack.Navigator>
      </NavigationContainer >
    </Provider>

  );
}

export default App