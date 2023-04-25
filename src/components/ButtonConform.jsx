import { StyleSheet,  Text, View,TouchableOpacity} from 'react-native'
import React from 'react'

const ButtonConform = ( { bgcolor, textcolor, tittle, onpress}) => {
  return (
    <TouchableOpacity style={[styles.button,{backgroundColor:bgcolor}]} onPress={onpress}>
    <Text  style={[{color:textcolor}]}>{tittle?tittle:"Verify"}</Text>
  
  </TouchableOpacity>
  )
}

export default ButtonConform

const styles = StyleSheet.create({ 
    button: {
       
          justifyContent:'center',
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