import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Info from './Info';
import Market from './Market';
import Details from './Details';
import Settings from './Settings';

const HomeTabs = createBottomTabNavigator();

const MarketStack = createStackNavigator();

function MarketStackScreen() {
  return (
    <MarketStack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <MarketStack.Screen
        options={{ headerShown: false }}
        name="Market"
        component={Market}
      />
      <MarketStack.Screen name="Details" component={Details} />
    </MarketStack.Navigator>
  );
}

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
          } else if (route.name === 'Settings') {
            iconName = 'settings-cell';
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
      <HomeTabs.Screen name="Settings" component={Settings} />
    </HomeTabs.Navigator>
  );
};

export default Home;
