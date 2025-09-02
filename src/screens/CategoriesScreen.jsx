import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native'
import categories from '../data/categories.json'
import FlatCard from '../components/FlatCard'

const CategoriesScreen = ({setCategorySelected}) => {

    const renderCategoryItem = ({ item }) => (
        <Pressable onPress={()=>setCategorySelected(item.title)}>
            <FlatCard style={styles.categoriesContainer}>
                <Text>{item.title}</Text>
                <Image source={{ uri: item.image }}
                    width={80}
                    height={50}
                    resizeMode='contain'
                />
            </FlatCard>
        </Pressable>
    )

    return (
        <View>
            <FlatList
                data={categories}
                renderItem={renderCategoryItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    categoriesContainer: {
        gap: 16,
        justifyContent: "space-between",
        margin: 8
    }
})