import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../theme/colors'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mundo Geek</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        height: 140,
        backgroundColor:colors.purple,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        fontSize: 24,
        color:colors.white
    }
})