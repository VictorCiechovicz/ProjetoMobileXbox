import React from 'react'
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native'

import Jogo1 from './assets/jogo-1.png'
import Jogo2 from './assets/jogo-2.png'
import Jogo3 from './assets/jogo-3.png'

import estilos from './estilos'

export default function telaJogos() {
  return (
    <ScrollView>
      <View style={estilos.fundoconsoles}>
        <Text style={estilos.tituloconsoles}>Jogos em 4k</Text>
        <Text style={estilos.tituloconsoles}>
          Os principais jogos estão aqui. Veja abaixo três exemplos de grande
          sucesso.
        </Text>
        <View>
          <ImageBackground source={Jogo1} style={estilos.imgjogos}>
            <Text style={estilos.tituloconsoles}>Forza Horizon 5</Text>
          </ImageBackground>
          <Text style={estilos.tituloconsoles}>
            Forza Horizon 5 é um jogo de corrida. É o quinto jogo da série Forza
            Horizon e o décimo segundo título principal da franquia Forza. O
            jogo se passa em uma representação ficcional do México.
          </Text>
        </View>
        <View>
          <ImageBackground source={Jogo2} style={estilos.imgjogos}>
            <Text style={estilos.tituloconsoles}>Cyberpunk 2077</Text>
          </ImageBackground>
          <Text style={estilos.tituloconsoles}>
            Cyberpunk 2077 é um jogo eletrônico de RPG de ação desenvolvido e
            publicado pela CD Projekt.
          </Text>
        </View>
        <View>
          <ImageBackground source={Jogo1} style={estilos.imgjogos}>
            <Text style={estilos.tituloconsoles}>Halo 5</Text>
          </ImageBackground>
          <Text style={estilos.tituloconsoles}>
            Halo 5: Guardians é um videojogo de tiro em primeira pessoa, parte
            da franquia Halo e sequência de Halo 4.
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}
