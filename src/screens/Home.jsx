import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react';
import { Rating } from 'react-native-ratings';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {
    const [Data, setData] = useState([]);
    
    const navigation = useNavigation();
    // onpress = () => {

    // }
    const getApiData = async () => {
        const url = "https://dummyjson.com/products";
        await fetch(url)
            .then(response => response.json())
            .then(data => { setData(data.products) })
            .catch(error => alert(error))


    }

    useEffect(() => {

        getApiData();

    }, []);


    const renderdata = ({ item }) => {

        return (

            <TouchableOpacity style={{}} onPress={() => navigation.navigate("ProductDeatils", {
                title: item.title, thumbnail: item.thumbnail,
                price: item.price, description: item.description, stock: item.stock, brand: item.brand, images: item.images,
                category: item.category
            })}>
                <View style={{
                    marginTop: 5, height: 300, padding: 10, marginBottom: 15, borderRadius: 20,
                    overflow: 'hidden', shadowColor: '#171717',
                    shadowOffset: { width: -2, height: 4 },
                    shadowOpacity: 9,
                    shadowRadius: 3,
                    elevation: 5,
                    shadowColor: '#52006A',
                }}>
                    <View style={styles.thumbnil}>
                        <Image source={{ uri: item.thumbnail }} style={{
                            width: "98%",
                            height: 100,
                            borderWidth: 5,
                            marginTop: 5,
                            borderColor: 'lightgray',
                            resizeMode: 'contain',
                        }}></Image>
                        <View>
                            <View style={styles.price}>
                                <Text style={{ color: 'darkblue', width: "80%", fontSize: 17, }} >{item.title}</Text>
                                <Ionicons name='bookmark' style={{ color: "blue", fontSize: 25, width: 30, }} />
                            </View>

                        </View>


                    </View>
                    <View >
                        <View style={{ width: "50%", fontSize: 25, marginLeft: 15, }}>

                            <Rating
                                type='star'
                                imageSize={25}
                                readonly
                                startingValue={item.rating}

                            />


                            <Text style={{ color: 'blue', marginLeft: 5 }} >{`Price: `}
                                <Text style={{ color: 'blue' }}>
                                    {`$ ${item.price}`}
                                </Text>
                            </Text>


                            <Text style={{ color: '#800000' }} >{` ${item.discountPercentage} % off`}</Text>
                        </View>

                    </View>


                </View>
            </TouchableOpacity>
        )
    }
    return (


        <View style={styles.container}>

            <View style={styles.container1}>
                <View style={styles.containerinner} >
                    <TouchableOpacity >
                        <Entypo  name='menu' style={{ color: "black", fontSize: 35 }}  onPress={() => navigation.toggleDrawer()}/>
                    </TouchableOpacity>
                    <Image style={{
                        marginRight: 20,
                        height: 60,

                    }} source={require('./../images/White.png')} />

                </View>

                <Text style={styles.text}>   {`Good morning`}</Text>
                <Text style={styles.text}>   {`Arup`}</Text>

            </View>
            <View style={styles.container2} >

                <FlatList
                    data={Data}
                    renderItem={renderdata}
                    ListEmptyComponent={() => {
                        return (

                            <Text style={{ color: '#000', alignSelf: 'center' }}>
                                {'Unable to list items at the momnent'}
                            </Text>
                        )
                    }}
                />
            </View>


            {/* <View style={styles.container3} >


                    <TouchableOpacity style={styles.button} onPress={onpress}>
                        <Text style={styles.text}>{`Account \n Blance`}</Text>

                        <AntDesign name='arrowright' color={'#fff'} size={25} />

                    </TouchableOpacity>

                </View> */}



        </View>


    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container1: {
        backgroundColor: "blue",
        height: "30%",
        width: "100%",

        borderBottomLeftRadius: 120,
        borderBottomRightRadius: 120,
    },
    container2: {
        height: "75%",
        marginTop: -45,
        // 
        width: "80%",

        padding: 20,
        alignSelf: 'center',
        backgroundColor: "white",
        borderRadius: 50,

    },
    containerinner: {
        marginTop: 20,
        width: "100%",
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    text: {
        marginLeft: 30,
        fontSize: 20,

    },
    container3: {
        height: "20%",
        marginTop: 25,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        width: "80%",
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        width: " 100%",
        borderWidth: 1,
        backgroundColor: "blue",
        borderColor: "blue",
        borderRadius: 50,
        height: 130,
    },
    thumbnil: {

        justifyContent: "center",
        padding: 5,

        alignItems: 'center'

    }, price: {
        flexDirection: "row",
        justifyContent: "space-around",
        //  padding: 4,
        marginTop: 10,
        marginLeft: 2,

    }, design: {

        maxWidth: '80%',

    }

})