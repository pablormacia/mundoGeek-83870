import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native'
import categories from '../data/categories.json'
import FlatCard from '../components/FlatCard'
import TextKarlaRegular from '../components/customText/TextKarlaRegular'

const CategoriesScreen = ({setCategorySelected}) => {

    const renderCategoryItem = ({ item }) => (
        <Pressable onPress={()=>setCategorySelected(item.title)}>
            <FlatCard style={styles.categoriesContainer}>
                <TextKarlaRegular>{item.title}</TextKarlaRegular>
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