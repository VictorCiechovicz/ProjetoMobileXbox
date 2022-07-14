import React from 'react'
import { Pressable, Text, View } from 'react-native'

import Logo from './assets/logo.png'
import estilos from './estilos'

export default function telaInicial(props) {
  return (
    <View style={estilos.fundoinicial}>
      <Image source={Logo} style={estilos.imglogo} />
      <Text style={estilos.titulo}>Xbox</Text>
      <Text style={estilos.descricao}>
        Xbox é uma marca de consoles criada pela Microsoft. Toque nos cards para
        conhecer.
      </Text>

      <Pressable
        style={estilos.cards}
        onPress={() => {
          props.navigation.navigate('Consoles')
        }}
      ></Pressable>

      <Pressable
        style={estilos.cards}
        onPress={() => {
          props.navigation.navigate('Jogos')
        }}
      ></Pressable>

      <Pressable
        style={estilos.cards}
        onPress={() => {
          props.navigation.navigate('Xcloud')
        }}
      ></Pressable>
    </View>
  )
}
