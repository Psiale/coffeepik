/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/pages/home';
import Brews from './src/pages/brews';
import Detail from './src/pages/detail';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer style={{flex: 1}}>
      <Stack.Navigator style={{flex: 1}}>
        <Stack.Screen
          style={{flex: 1}}
          name="Home"
          component={Home}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name="Brews"
          component={Brews}
          options={{title: 'Brews'}}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{title: 'Detail'}}
        />        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
