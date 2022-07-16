import { StyleSheet } from 'react-native'

const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#94B49F',
    alignItems: 'center'
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 50
  },
  titulo: {
    fontSize: 50,
    color: 'green'
  },
  descricao: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    marginHorizontal: 20
  },
  cards: {
    backgroundColor: 'green',
    width: 300,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1
  },
  cardImg: {
    width: 70,
    height: 70
  },
  cardTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  }
})
export default estilos
