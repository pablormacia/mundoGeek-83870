import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../theme/colors'

const FlatCard = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

export default FlatCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGray,
        padding: 16,
        margin: 16,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        elevation: 10,
    }
})