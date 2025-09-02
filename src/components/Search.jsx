import { StyleSheet, TextInput, View } from 'react-native'
import { colors } from '../theme/colors'

const Search = ({setKeyword,keyword}) => {
    return (
        <View style={styles.searchContainer}>
            <TextInput
                onChangeText={(text)=>setKeyword(text)}
                placeholder='Buscar producto'
                style={styles.textInput}
                value={keyword}
            />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    searchContainer:{
        flexDirection:"row",
        justifyContent:"center",
        marginTop:16
    },
    textInput:{
        borderWidth:1,
        borderColor:colors.mediumGray,
        borderRadius:16,
        width:"90%",
        paddingLeft:8
    }
})