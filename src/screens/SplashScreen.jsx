import { StyleSheet, Text, View, Image
 } from 'react-native'
import React, { useEffect } from 'react'



const SplashScreen = ({navigation}) => {
   
useEffect(() => {
  setTimeout(() => {
    navigation.replace("Welcome")
  }, 1000);
});
    
    return (

        <View style={styles.splashscreen}>
           
                <Image source={require('./../images/Combined.png')} />
                <Text  style={styles.splashtext} >SplashScreen</Text>
        
    
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({ 
    splashscreen:{
        flex: 1,
    justifyContent: 'center',
  alignItems: 'center'
},
splashtext:{
    color: '#C432F8'
}

})