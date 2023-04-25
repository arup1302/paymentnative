import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Feed from '../screens/Feed';
import Details from '../screens/Details';
import Home from '../screens/Home';
import SettingsScreen from '../screens/SettingsScreen';
import Transitions from '../screens/Transitions';



const Drawernavigator = () => {
    const Drawer = createDrawerNavigator();

  return (
    
    <Drawer.Navigator  useLegacyImplementation={true}  options={{headerShown:false}}  >

<Drawer.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Drawer.Screen name="Details" component={Details}  screenOptions={{
        headerShown: false
      }} />
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
      <Drawer.Screen name="Transition" component={Transitions} />
     
    </Drawer.Navigator>
  
  )
}

export default Drawernavigator

const styles = StyleSheet.create({})