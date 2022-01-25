
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './src/Screen/Home';
import Profile from './src/Screen/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Order from './src/Screen/Order';
import Cart from './src/Screen/Cart';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const userInfo = {
  userId: '01',
  userName: 'Md Majharul Islam',
  userImg: 'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?size=626&ext=jpg'
}

const Tab = createBottomTabNavigator();
const Stack=createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          header: () => null,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="Profile" component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
          initialParams={userInfo}
        />
        <Tab.Screen name="Order" component={Order}
          options={{
            tabBarLabel: 'Order',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="reorder-horizontal" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="Cart" component={Cart}
          options={{
            tabBarLabel: 'CarT',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="shopping" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;