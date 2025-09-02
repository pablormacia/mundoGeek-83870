import { StyleSheet, Text, View, FlatList } from 'react-native'
import products from '../data/products.json'
import FlatCard from '../components/FlatCard'
import { useEffect, useState } from 'react'
import Search from '../components/Search'

const ProductsScreen = ({ category }) => {
  //console.log("Category en ProductsScreen: ",category)
  const [productsFiltered, setProductsFiltered] = useState([])
  const [keyword, setKeyword] = useState("")
  //console.log("ProductsScreen montado")
  //console.log("Keyword: ", keyword)

  useEffect(() => {
    const productsFilteredByCategory = products.filter(
      product => product.category.toLowerCase() == category.toLowerCase()
    )
    if(keyword){
      setProductsFiltered(productsFilteredByCategory.filter(
        product=>product.title.toLowerCase().includes(keyword.toLowerCase())
      ))
    }else{
      setProductsFiltered(productsFilteredByCategory)
    }
  }, [keyword])



  const renderProductItem = ({ item }) => (
    <FlatCard>
      <Text>{item.title}</Text>
    </FlatCard>
  )
  return (
    <>
      <Search setKeyword={setKeyword} keyword={keyword}/>
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