import { StyleSheet, Text, View, FlatList, Image, Pressable, useWindowDimensions } from 'react-native'
import categories from '../../data/categories.json'
import FlatCard from '../../components/FlatCard'
import TextKarlaRegular from '../../components/customText/TextKarlaRegular'
import { useState,useEffect } from 'react'

const CategoriesScreen = ({navigation}) => {
    const [newNumColumns, setNunColumns] = useState(1)

    const renderCategoryItem = ({ item }) => (
        <Pressable onPress={()=>navigation.navigate("Productos",{category:item.title})}>
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

    const {width, height} = useWindowDimensions()
    
    useEffect(()=>{
        if(width>height){
            setNunColumns(3)
        }
    },[width, height])

    //console.log("Dimensiones: ", width, height)

    return (
        <View>
            <FlatList
                data={categories}
                renderItem={renderCategoryItem}
                keyExtractor={item => item.id}
                //numColumns={3}
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