import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import store from './store';

import CounterComponent from './screens/CounterComponent ';

import LandingAppStack from './navigation/LandingAppStack'
import AuthStack from './navigation/AuthStack'

const appColor = '#000'; // Change this to your app's color
const App = () => {
  return (
    <>
      <StatusBar backgroundColor={appColor} barStyle="light-content" />
      <Provider store={store}>
        <NavigationContainer>
          <LandingAppStack/>
          {/* <AuthStack/> */}
        </NavigationContainer>
      </Provider>
    </>
  )
}

export default App;