import { StyleSheet, Text, View, FlatList,Pressable } from 'react-native'
import products from '../../data/products.json'
import FlatCard from '../../components/FlatCard'
import { useEffect, useState } from 'react'
import Search from '../../components/Search'

const ProductsScreen = ({ route,navigation }) => {
  const [productsFiltered, setProductsFiltered] = useState([])
  const [keyword, setKeyword] = useState("")

  //console.log(route)

  const { category } = route.params

  useEffect(() => {
    const productsFilteredByCategory = products.filter(
      product => product.category.toLowerCase() == category.toLowerCase()
    )
    if (keyword) {
      setProductsFiltered(productsFilteredByCategory.filter(
        product => product.title.toLowerCase().includes(keyword.toLowerCase())
      ))
    } else {
      setProductsFiltered(productsFilteredByCategory)
    }
  }, [keyword])



  const renderProductItem = ({ item }) => (
    <Pressable onPress={()=>navigation.navigate("Producto",{product:item})}>
      <FlatCard>
        <Text>{item.title}</Text>
      </FlatCard>
    </Pressable>
  )
  return (
    <>
      <Search setKeyword={setKeyword} keyword={keyword} />
      <FlatList
        data={productsFiltered}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
      />
    </>

  )
}

export default ProductsScreen

const styles = StyleSheet.create({})