import React from 'react'
import { Pressable, Text, View, Image } from 'react-native'

import Logo from '../assets/logo.png'
import imgConsole from '../assets/console-1.png'
import imgJogo from '../assets/jogo.png'
import imgXcloud from '../assets/xcloud-1.png'

import estilos from './estilos'

export default function TelaInicial(props) {
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
      >
        <Image source={imgConsole} style={estilos.cardImg} />
        <Text style={estilos.cardTexto}>Conheça os consoles</Text>
      </Pressable>

      <Pressable
        style={estilos.cards}
        onPress={() => {
          props.navigation.navigate('Jogos')
        }}
      >
        <Image source={imgJogo} style={estilos.cardImg} />
        <Text style={estilos.cardTexto}>Conheça os jogos</Text>
      </Pressable>

      <Pressable
        style={estilos.cards}
        onPress={() => {
          props.navigation.navigate('Xcloud')
        }}
      >
        <Image source={imgXcloud} style={estilos.cardImg} />
        <Text style={estilos.cardTexto}>Conheça o xCloud</Text>
      </Pressable>
    </View>
  )
}
