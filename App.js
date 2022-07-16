import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import TelaInicial from './Componentes/TelaInicial/index'
import TelaConsoles from './Componentes/TelaConsoles/index'
import TelaJogos from './Componentes/TelaJogos/index'
import TelaXcloud from './Componentes/TelaXcloud/index'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="Consoles" component={TelaConsoles} />
        <Stack.Screen name="Jogos" component={TelaJogos} />
        <Stack.Screen name="Xcloud" component={TelaXcloud} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
