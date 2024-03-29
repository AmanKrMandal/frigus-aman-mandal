import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import GetStartScreen from '../screens/GetStartScreen';
// import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SingUp" component={SignUpScreen} />
      <Stack.Screen name="GetSatrt" component={GetStartScreen} />
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
