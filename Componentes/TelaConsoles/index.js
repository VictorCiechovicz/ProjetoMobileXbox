import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

import Console1 from '../../assets/console-1-2.png'
import Console2 from '../../assets/console-2.png'

import estilos from './estilos'

export default function TelaConsoles() {
  return (
    <View style={estilos.fundo}>
      <View style={estilos.box}>
        <Image style={estilos.img} source={Console1} />

        <Text style={estilos.titulo}>XBOX SERIES S</Text>

        <Text style={estilos.paragrafo}>
          Desempenho de última geração no menor Xbox de todos os tempos.
        </Text>

        <Text style={estilos.paragrafo}>
          O Series S é pra quem busca jogos de nova geração gastando pouco. É o
          console mais barato da nova geração. Ele é o equilíbrio entre gráfico
          e performance.
        </Text>
      </View>

      <View style={estilos.box}>
        <Image style={estilos.img} source={Console2} />
        <Text style={estilos.titulo}>XBOX SERIES X</Text>
        <Text style={estilos.paragrafo}>
          O Xbox mais rápido e poderoso de todos os tempos.
        </Text>
        <Text style={estilos.paragrafo}>
          O Series X é pra quem quer poder absoluto. O console mais poderoso do
          mercado, excelência em gráficos e performance.
        </Text>
      </View>
    </View>
  )
}
