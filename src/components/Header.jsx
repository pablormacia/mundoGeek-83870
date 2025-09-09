import { StyleSheet, Text, View, Pressable } from 'react-native'
import { colors } from '../theme/colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Header = ({ subtitle }) => {
  //console.log("Header montado")
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mundo Geek</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      {
        navigation.canGoBack()
        &&
        <Pressable onPress={() => navigation.goBack()} style={styles.goBackBtn}>
          <Ionicons name="chevron-back-outline" size={24} color={colors.white} />
        </Pressable>
        
      }

    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
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
    fontFamily: "Karla-Bold"
  },
  goBackBtn:{
    alignSelf:"flex-start",
    padding:8
  }
})