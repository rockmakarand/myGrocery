import React from 'react';
import {StyleSheet, View} from 'react-native';
import Dashboard from './src/screens/Dashboard';
import Search from './src/screens/SearchScreen';
import Home from './src/screens/HomeScreen';
import About from './src/screens/AboutScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/native-stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DashBoard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
