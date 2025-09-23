import { StyleSheet, Text, View, FlatList, Pressable, ActivityIndicator } from 'react-native'
//import products from '../../data/products.json'
import FlatCard from '../../components/FlatCard'
import { useEffect, useState } from 'react'
import Search from '../../components/Search'
import { useSelector } from 'react-redux'
import { useGetProductsByCategoryQuery } from '../../store/services/shopApi'

const ProductsScreen = ({ route, navigation }) => {
  const [productsFiltered, setProductsFiltered] = useState([])
  const [keyword, setKeyword] = useState("")



  //console.log(route)
  const products = useSelector(state => state.shopReducer.products)

  //const { category } = route.params

  const category = useSelector(state => state.shopReducer.categorySelected)
  //console.log(category)
  const { data: productsFilteredByCategory, isLoading, error } = useGetProductsByCategoryQuery(category.toLowerCase())
  //console.log(productsFilteredByCategory)

  //const productsFilteredByCategory = useSelector(state=>state.shopReducer.productsFilteredByCategory)

  useEffect(() => {
    /* const productsFilteredByCategory = products.filter(
      product => product.category.toLowerCase() == category.toLowerCase()
    ) */
    if (keyword) {
      setProductsFiltered(productsFilteredByCategory.filter(
        product => product.title.toLowerCase().includes(keyword.toLowerCase())
      ))
    } else {
      setProductsFiltered(productsFilteredByCategory)
    }
  }, [keyword, productsFilteredByCategory, category])



  const renderProductItem = ({ item }) => (
    <Pressable onPress={() => navigation.navigate("Producto", { product: item })}>
      <FlatCard>
        <Text>{item.title}</Text>
      </FlatCard>
    </Pressable>
  )
  return (
    <>
      <Search setKeyword={setKeyword} keyword={keyword} />
      {
        isLoading
          ?
          <ActivityIndicator />
          :
          <FlatList
            data={productsFiltered}
            renderItem={renderProductItem}
            keyExtractor={item => item.id}
          />
      }
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