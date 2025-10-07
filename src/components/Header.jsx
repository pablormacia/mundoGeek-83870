import { StyleSheet, Text, View, Pressable } from 'react-native'
import { colors } from '../theme/colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useSelector,  useDispatch } from 'react-redux';
import { clearSession } from '../db';
import { clearUser } from '../store/slices/userSlice';

const Header = ({ subtitle }) => {
  //console.log("Header montado")
  const navigation = useNavigation()
  const user = useSelector(state => state.userReducer.user)

  const dispatch = useDispatch()

  const categorySelected = useSelector(state=>state.shopReducer.categorySelected)

  const handleClearSession = async () => {
    try {
      await clearSession()
    } catch {
      console.log("Hubo un error al limpiar la sesión")
    }
    dispatch(clearUser())

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mundo Geek</Text>
      <Text style={styles.subtitle}>{
        categorySelected
        ?
        categorySelected
        :
        subtitle
    }</Text>
      {
        navigation.canGoBack()
        &&
        <Pressable onPress={() => navigation.goBack()} style={styles.goBackBtn}>
          <Ionicons name="chevron-back-outline" size={24} color={colors.white} />
        </Pressable>
        
      }
      {
        user
        &&
        <Pressable onPress={handleClearSession}>
          <Text>Salir</Text>
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