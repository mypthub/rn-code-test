import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home';
import Details from './src/pages/details';

const { Navigator, Screen } = createStackNavigator();
const App = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" />
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="homeScreen" component={Home} />
      <Screen name="detailScreen" component={Details} />
    </Navigator>
  </NavigationContainer>
);

export default App;
