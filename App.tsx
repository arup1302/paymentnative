/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Button } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Transitions from './src/screens/Transitions';

import Signup from './src/screens/Signup';
import SplashScreen from './src/screens/SplashScreen';
import Signin from './src/screens/Signin';
import Otp from './src/screens/Otp';
import OtpVerify from './src/screens/OtpVerify';
import Resend from './src/screens/Resend';;

import Buttomnavigator from './src/utilities/Buttomnavigator';
import Profile from './src/screens/Profile';
import Profilecompelte from './src/screens/Profilecompelte';
import Welcome from './src/screens/Welcome';
import Home from './src/screens/Home';
import ProductDeatils from './src/screens/ProductDeatils';
import Drawernavigator from './src/utilities/Drawernavigator';
import store from './src/redux/Store';
import CartsDetails from './src/screens/CartsDetails';






const Stack = createNativeStackNavigator();
const App = () => {
  return(

    <Provider store ={store}>
    
    
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="SplashScreen" component={SplashScreen} />
    {/* <Stack.Screen name="Bottom" component={Buttomnavigator} options={{headerTitle:'Home'}} /> */}
    <Stack.Screen name="Home" component={Home}  />
    <Stack.Screen name="Drawernavigator" component={Drawernavigator}  options={{headerShown:false}}/>
    <Stack.Screen name="Welcome" component={Welcome}  options={{headerShown:false}} />
    <Stack.Screen name="Profile" component={Profile}   />
    
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Otp" component={Otp}  />
      <Stack.Screen name="Resend" component={Resend} />
      <Stack.Screen name="OtpVerify" component={OtpVerify} />
      <Stack.Screen name="CartsDetails" component={CartsDetails} />
      <Stack.Screen name="Transitions" component={Transitions}  options={{headerShown:false}} />
      <Stack.Screen name="ProductDeatils" component={ProductDeatils}   />
      <Stack.Screen name="Profilecompelte" component={Profilecompelte}   options={{headerShown:false}}/>
      
  
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  )
};

const styles = StyleSheet.create({
  
  

});


export default App
