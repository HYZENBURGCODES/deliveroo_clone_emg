import React from 'react'
import Navigation from './src/navigation/navigation'
import { StatusBar, View } from 'react-native'
import store from './src/utils/Redux/store'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={'#00CCBB'} />
      <Navigation />
    </Provider>
  )
}