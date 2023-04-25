import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native'
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { addtoCart } from '../redux/actions';
import { nativeViewGestureHandlerProps } from 'react-native-gesture-handler/lib/typescript/handlers/NativeViewGestureHandler';
const ProductDeatils = ({ navigation, route }) => {

    const { title, thumbnail, price, description, stock, brand, images, category } = route.params;
    const [image_url, setUrl] = useState(images[0])

    const dispatch = useDispatch()

    return (


        <View style={styles.container}>

            <View style={{
                height: "100%", borderRadius: 20,
                overflow: 'hidden', shadowColor: '#171717',
                shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 9,
                shadowRadius: 3,
                elevation: 5,
                shadowColor: '#52006A',
            }}>
                <View style={styles.thumbnil}>
                    <Image source={{ uri: image_url, }} style={{
                        width: "100%",
                        height: "40%",
                        borderWidth: 7,

                        borderColor: 'lightgray',
                        resizeMode: 'contain',
                    }}></Image>

                    <ScrollView
                        horizontal
                        style={{ padding: 5, height: 70, width: "100%", marginTop: 20 }}
                    >
                        {
                            images.map((url) => (<TouchableOpacity
                                key={Math.random(5000 * 23)}
                                onPress={() => setUrl(url)}
                                style={{
                                    marginLeft: 12, height: 80, width: 80, backgroundColor: "black", borderWidth: 3,
                                    borderColor: 'gray', resizeMode: 'contain', justifyContent: "center", alignItems: 'center'
                                }}>
                                <Image
                                    source={{ uri: url }}
                                    style={{ width: "80%", height: "100%" }}
                                    resizeMode='contain'

                                />
                            </TouchableOpacity >))
                        }
                    </ScrollView>


                    <View style={styles.price}>

                        <Text style={{ color: 'blue', fontSize: 25, }} >{title}
                        </Text>

                        {/* <Button title='remove from cart'
                         onPress={()=>{
                         navigation.navigate('CartsDetails')}}> </Button> */}
                        <View style={styles.card}>

                            <Text style={{ color: 'blue',fontSize: 20}} >{`Price: $ ${price}`}
                            </Text>
                            <Button title='Go to cart'
                                onPress={() => {
                                    navigation.navigate('CartsDetails')
                                }}>
                            </Button>
                        </View>

                        <Text style={{ color: 'blue', }} >{` Brand Name:${brand} `}</Text>

                        <Text style={{ color: 'blue', }} >{` In Stock:${stock} `}</Text>
                        <Text style={{ color: '#800000' }} >{` Category-Type:${category} `}</Text>



                        <Text style={{ color: 'black', fontSize: 17, marginTop: 10 }} >{` Details:${description} `}</Text>


                    </View>
                </View>

            </View>

        </View >
    )
}

export default ProductDeatils

const styles = StyleSheet.create({
    container: {

        // alignContent: "center",
        // justifyContent:'center',

        width: "100%",
        height: "100%"

    },
    thumbnil: {
        width: "100%",
        padding: 20,


    },
    price: {
        paddingLeft: 5,
        fontSize: 20
  
    }
    , card: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingRight: 10,
        alignContent: "center",
        alignItems: "center"
    }
})