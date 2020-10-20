import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './modules/home';
import { StatusBar } from 'react-native';

export default function App() {
  const Stack = createStackNavigator();

  const headerOptions ={
    title: 'Search Images',
    headerStyle:{
      backgroundColor: '#0d2c61',
   },
headerTintColor: '#fff',

  }
  return (
    <>
    <StatusBar backgroundColor="#0d2c61" networkActivityIndicatorVisible/>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} options={headerOptions}/>
      </Stack.Navigator>
    </NavigationContainer>
</>
  );
}
