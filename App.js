import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Header from './src/components/Header';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import TabsNavigator from './src/navigation/TabsNavigator';
import { mundoGeekStore } from './src/store';
import { Provider } from 'react-redux';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    'Karla-Regular': require('./assets/fonts/Karla-Regular.ttf'),
    'Karla-Bold': require('./assets/fonts/Karla-Bold.ttf'),
    'Karla-Italic': require('./assets/fonts/Karla-Italic.ttf'),
    'Karla-Light': require('./assets/fonts/Karla-Light.ttf'),
    'PressStart2P': require('./assets/fonts/PressStart2P-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Provider store={mundoGeekStore}>
      <NavigationContainer>
        <TabsNavigator />
        <StatusBar style="light" />
      </NavigationContainer>
    </Provider>
  );
}

