import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import CategoriesScreen from './src/screens/CategoriesScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import Header from './src/components/Header';
import { useState } from 'react';

export default function App() {
  const [categorySelected, setCategorySelected] = useState("")
  //console.log("Categoria seleccionada: ", categorySelected)

  return (
    <>
      {
        categorySelected
          ?
          <>
            <Header subtitle={categorySelected}/>
            <ProductsScreen category={categorySelected} />
          </>
          :
          <>
            <Header subtitle="Home" />
            <CategoriesScreen setCategorySelected={setCategorySelected}/>
          </>
      }
      <StatusBar style="light" />
    </>
  );
}

