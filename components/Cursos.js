import { View, Text, StyleSheet } from 'react-native';

export function Cursos({ albumName, descricao }) {

  return (
    <View>
      <Text style={[ styles.albumName, styles.bold ]}>{albumName}</Text>
      <Text style={styles.descricao}>{descricao} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  albumName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft:10,
    marginTop:10,
  },

  descricao: {
    marginLeft: 10
    
  }
})