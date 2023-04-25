import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react'

const ButttonLogin = ({ bgcolor, textcolor, icolor, tittle, onpress}) => {
   
  
  
  return (
    
      <TouchableOpacity style={[styles.button,{backgroundColor:bgcolor}]} onPress={onpress}>
        <Text  style={[{color:textcolor}]}>{tittle?tittle:"Sign up"}</Text>
      
        <AntDesign name='arrowright' color={icolor?icolor:'#fff'} size={25} />
        
      </TouchableOpacity>
   
  )
}

export default ButttonLogin

const styles = StyleSheet.create({
  button: {
  flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding: 15,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 50,
    height: 70, 
    paddingLeft: 25,
    paddingRight:25,
  
  },
})