import React from 'react'
import { ImageBackground, ScrollView, Text, View } from 'react-native'

import Jogo1 from '../../assets/jogo-1.png'
import Jogo2 from '../../assets/jogo-2.png'
import Jogo3 from '../../assets/jogo-3.png'

import estilos from './estilos'

export default function TelaJogos() {
  return (
   
      <View style={estilos.fundo}>

        <Text style={estilos.titulo}>Jogos em 4k</Text>

        <Text style={estilos.descricao}>
          Os principais jogos estão aqui. Veja abaixo três exemplos de grande
          sucesso.
        </Text>
        <View style={estilos.boxJogo}>
          <ImageBackground source={Jogo1} style={estilos.img}>
            <Text style={estilos.tituloimg}>Forza Horizon 5</Text>
          </ImageBackground>
          <Text style={estilos.paragrafo}>
            Forza Horizon 5 é um jogo de corrida. É o quinto jogo da série Forza
            Horizon e o décimo segundo título principal da franquia Forza. O
            jogo se passa em uma representação ficcional do México.
          </Text>
        </View>
        <View style={estilos.boxJogo}>
          <ImageBackground source={Jogo2} style={estilos.img}>
            <Text style={estilos.tituloimg}>Cyberpunk 2077</Text>
          </ImageBackground>
          <Text style={estilos.paragrafo}>
            Cyberpunk 2077 é um jogo eletrônico de RPG de ação desenvolvido e
            publicado pela CD Projekt.
          </Text>
        </View>
        <View style={estilos.boxJogo}>
          <ImageBackground source={Jogo3} style={estilos.img}>
            <Text style={estilos.tituloimg}>Halo 5</Text>
          </ImageBackground>
          <Text style={estilos.paragrafo}>
            Halo 5: Guardians é um videojogo de tiro em primeira pessoa, parte
            da franquia Halo e sequência de Halo 4.
          </Text>
        </View>
      </View>
    
  )
}
