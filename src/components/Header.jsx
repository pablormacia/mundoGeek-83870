import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../theme/colors'

const Header = ({ subtitle }) => {
  console.log("Header montado")
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mundo Geek</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    paddingTop:30,
    height: 140,
    backgroundColor: colors.purple,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 24,
    color: colors.white,
    fontFamily: "PressStart2P"
  },
  subtitle: {
    fontSize: 16,
    color: colors.white,
    fontFamily:"Karla-Bold"
  }
})