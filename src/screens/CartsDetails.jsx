import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react'

const CartsDetails = () => {
  const myState = useSelector((state) => state.count)
  const dispatch = useDispatch()
  return (
    <View style={styles.carddesign}>
      
      <TouchableOpacity onPress={() => dispatch({ type: "ADD_TO_CART" })}>
        <FontAwesome5 name='cart-plus' style={{ color: "blue", fontSize: 55, width: 80, }} />
      </TouchableOpacity>  
      <Text  style={{ color: "black", fontSize: 55, }}> {myState}</Text>
      <TouchableOpacity onPress={() => dispatch({ type: "REMOVE_FROM_CART" })}>
      {/* <FontAwesomeIcon icon="fa-solid fa-cart-minus" /> */}
        <FontAwesome5 name='cart-arrow-down' style={{ color: "red", fontSize: 55, width: 80, }} />
      </TouchableOpacity>
    </View>
  )
}

export default CartsDetails

const styles = StyleSheet.create({
   carddesign:{
    flexDirection: "row",
    justifyContent: 'space-evenly',
    alignItems: 'center'
}})