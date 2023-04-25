import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import ButtonConform from '../components/ButtonConform';
const Resend = () => {
  return (
  

<View style={styles.splashscreen}>
            
           <Image source={require('./../images/Combined.png')} />
        
           <Text style={{ alignItems:"center", justifyContent :"center",  marginTop: 25,}}>
           please wait  for 1 minute atleast for  new OTP</Text>
           
           
   </View>
   
  
  )
}

export default Resend

const styles = StyleSheet.create({ 
    splashscreen:{
        flex: 1,
    justifyContent: 'center',
    backgroundColor: "black",
  alignItems: 'center'
},


})