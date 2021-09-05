import Home from '@pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { enableScreens } from 'react-native-screens';

enableScreens(true);

const App = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" />
    <Home />
  </NavigationContainer>
);

export default App;
