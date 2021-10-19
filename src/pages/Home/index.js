import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Info from './Info';
import Market from './Market';
import FetchKey from './FetchKey';
import ProductDetail from './ProductDetail';
import { NavigationContainer } from '@react-navigation/native'
import { createCompatNavigatorFactory } from '@react-navigation/compat'
import { createStackNavigator } from '@react-navigation/stack'


const HomeTabs = createBottomTabNavigator();
// const MarketStack = createNativeStackNavigator();

// function MarketStackScreen() {
//   return (
//     <MarketStack.Navigator>
//       <MarketStack.Screen name="Market" component={Market} />
//       <MarketStack.Screen name="ProductDetail" component={ProductDetail} />
//     </MarketStack.Navigator>
//   );
// }
const MarketStack = createCompatNavigatorFactory(createStackNavigator)({
  Market: {
    screen: Market,
  },
  ProductDetail: {
    screen: ProductDetail,
  } ,
})



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
          }
          else if (route.name === 'FetchKey') {
            iconName = 'info';
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
      <HomeTabs.Screen name="Market" component={MarketStack} />
      <HomeTabs.Screen name="FetchKey" component={FetchKey} />

    </HomeTabs.Navigator>
  );
};

export default Home;
