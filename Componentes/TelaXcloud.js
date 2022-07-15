import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'

import Xcloud from '../assets/xcloud-2.png'
import Xcloudfundo from '../assets/fundo-xcloud.png'

import estilos from './estilos'

export default function TelaNuvem() {
  return (
    <ImageBackground source={Xcloudfundo} style={estilos.imgfundoxcloud}>
      <Text style={estilos.tituloxcloud}>Xbox Cloud Gaming</Text>
      <Text style={estilos.paragrafoxcloud}>Serviço de streaming de jogos</Text>
      <Text style={estilos.paragrafoxcloud}>
        Jogue mais de 100 jogos de console de alta qualidade no seu dispositivo
        favorito.
      </Text>
      <Text style={estilos.paragrafoxcloud}>
        Desktop, Notebook, console ou até mesmo celular pode se tornar um XBOX.
      </Text>
      <Text style={estilos.paragrafoxcloud}>
        Através de uma assinatura você terá um XBOX virtual sempre que precisar.
      </Text>
      <Image style={estilos.imgxcloud} source={Xcloud} />
    </ImageBackground>
  )
}
