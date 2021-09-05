import { ServiceCode } from '@pages/Home/ServiceCode';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Info from './Info';
import Market from './Market';

const HomeTabs = createBottomTabNavigator();

export const Home = () => {
  return (
    <HomeTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: iconProps => {
          const { color, size } = iconProps;

          let iconName;

          if (route.name === 'Info') {
            iconName = 'info';
          } else if (route.name === 'Market') {
            iconName = 'shopping-cart';
          } else if (route.name === 'ServiceCode') {
            iconName = 'code';
          }

          // You can return any component that you like here!
          return (
            <MaterialIcons name={iconName || ''} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <HomeTabs.Screen name="Info" component={Info} />
      <HomeTabs.Screen name="Market" component={Market} />
      <HomeTabs.Screen
        name="ServiceCode"
        component={ServiceCode}
        options={{
          title: 'Code',
        }}
      />
    </HomeTabs.Navigator>
  );
};
