import React from 'react';
import {StyleSheet, View} from 'react-native';
import Dashboard from './src/screens/Dashboard';
import Search from './src/screens/SearchScreen';
import Home from './src/screens/HomeScreen';
import About from './src/screens/AboutScreen';
import {NavigationContainer} from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown:false}}>

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Search" component={Search} />


      </Stack.Navigator>
    </NavigationContainer>
   
  );
};

export default App;
