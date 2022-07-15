import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

import Console1 from '../assets/console-1-2.png'
import Console2 from '../assets/console-2.png'

import estilos from './estilos'

export default function telaConsoles() {
  return (
    <ScrollView>
      <View style={estilos.fundoconsoles}>
        <Image style={estilos.imgconsoles} source={Console1} />
        <Text style={estilos.tituloconsoles}>XBOX SERIES S</Text>
        <Text style={estilos.paragrafo1consoles}>
          Desempenho de última geração no menor Xbox de todos os tempos.
        </Text>
        <Text style={estilos.paragrafo2consoles}>
          O Series S é pra quem busca jogos de nova geração gastando pouco. É o
          console mais barato da nova geração. Ele é o equilíbrio entre gráfico
          e performance.
        </Text>
      </View>

      <View>
        <Image style={estilos.imgconsoles} source={Console2} />
        <Text style={estilos.tituloconsoles}>BOX SERIES X</Text>
        <Text style={estilos.paragrafo1consoles}>
          O Xbox mais rápido e poderoso de todos os tempos.
        </Text>
        <Text style={estilos.paragrafo2consoles}>
          O Series X é pra quem quer poder absoluto. O console mais poderoso do
          mercado, excelência em gráficos e performance.
        </Text>
      </View>
    </ScrollView>
  )
}
