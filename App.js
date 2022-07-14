import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import TelaInicial from './Componentes/TelaInicial'
import TelaConsoles from './Componentes/TelaConsoles'
import TelaJogos from './Componentes/TelaJogos'
import TelaXcloud from './Componentes/TelaXcloud'

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
