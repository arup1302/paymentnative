import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import SettingsScreen from '../screens/SettingsScreen';

import Icon from 'react-native-vector-icons/Ionicons';
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';


const Tab = createBottomTabNavigator();


const Buttomnavigator = () => {
  return (
    <Tab.Navigator>

      <Tab.Screen name="Home" component={Home} options={{
        headerShown: false, tabBarIcon: () => (
          <Icon name="ios-home" color="red" size={25} />
        )
      }}
      />
      <Tab.Screen name="Welcome" component={Welcome} options={{
        headerShown: false, tabBarIcon: () => (
          <Icon name="home-sharp" color="red" size={25} />
        )
      }}
      />

      <Tab.Screen name="Settings" component={SettingsScreen} options={{
        headerShown: false, tabBarIcon: () => (
          <Icon name="settings" tittle="Setting" color="red" size={25} />
        )
      }} />

    </Tab.Navigator>
  )
}

export default Buttomnavigator