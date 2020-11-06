import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Details from './Details';
import Info from './Info';
import Market from './Market';
import Native from './Native';

const HomeTabs = createBottomTabNavigator();

const MarketStack = createStackNavigator();

const MarketStackScreen = () => {
  return (
    <MarketStack.Navigator>
      <MarketStack.Screen
        name="Market"
        component={Market}
        options={{ headerShown: false }}
      />
      <MarketStack.Screen
        name="Details"
        component={Details}
        options={{
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
        }}
      />
    </MarketStack.Navigator>
  );
};

const Home = () => {
  return (
    <HomeTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Info') {
            iconName = 'info';
          } else if (route.name === 'Market') {
            iconName = 'shopping-cart';
          } else if (route.name === 'Native') {
            iconName = 'settings';
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <HomeTabs.Screen name="Info" component={Info} />
      <HomeTabs.Screen name="Market" component={MarketStackScreen} />
      <HomeTabs.Screen name="Native" component={Native} />
    </HomeTabs.Navigator>
  );
};

export default Home;
