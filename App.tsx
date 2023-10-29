import React, { useEffect } from 'react'
import Navigation from './src/navigation/navigation'
import { StatusBar, View } from 'react-native'
import store from './src/utils/Redux/store'
import { Provider } from 'react-redux'
import RNBootSplash from 'react-native-bootsplash';

export default function App() {

  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 3000);
  }, []);

  
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={'#00CCBB'} />
      <Navigation />
    </Provider>
  )
}