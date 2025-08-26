import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import CategoriesScreen from './src/screens/CategoriesScreen';
import Header from './src/components/Header';

export default function App() {
  return (
    <View>
      <Header />
      <CategoriesScreen />
      <StatusBar style="light" />
    </View>
  );
}

