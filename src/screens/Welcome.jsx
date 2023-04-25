import { StyleSheet, Text, View, Image, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


import ButttonLogin from '../components/ButttonLogin';



const Welcome= () => {
    const navigation = useNavigation();
    return (
        <View style={styles.viewcontainer}>

            <View style={styles.container1} >
                <Image style={{
                    position: "absolute",
                    height: 470,
                    width: "100%",
                }} source={require('./../images/Ellipse3.png')} />

                <Image style={{
                    position: "absolute",
                    height: 500,
                    width: 300,
                }} source={require('./../images/Ellipse2.png')} />

                <View style={styles.containerA} >

                    <Image style={{
                        height: 430,
                        width: 270,
                    }} source={require('./../images/Ellipse1.png')} />

                </View>


                <View style={styles.logocontainer} >

                    <Image style={{
                        height: 60,
                        width: 60,
                        marginLeft: 20,


                    }} source={require('./../images/Combined.png')} />

                    <Text style={{ margin: 15, fontSize: 20 }}> {`Welcome \n Back`}</Text>

                </View>



            </View>

            <View style={styles.container2} >
                <View style={styles.button}>

                    <ButttonLogin bgcolor="blue" tittle={"Sign in"} onpress={() =>
                        navigation.navigate("Signin")
                    } />

                </View>

                <View style={styles.button}>

                    <ButttonLogin textcolor="blue" borderWidth={1} icolor={"blue"} 
                    onpress={() => navigation.navigate('Signup')} />

                </View>
                <View style={styles.iconbar}>
                
                </View>
            </View>

        </View >
    );

}

export default Welcome

const styles = StyleSheet.create({

    viewcontainer: {
        // flex: 1,
    },
    container1: {
        width: "100%",
        height: "60%",

    },
    container2: {
        width: "100%",
        height: "40%",
        marginTop: 30,

    },
    containerA: {
        // height: 430,
        // width: 300,

    },
    logocontainer: {
        position: 'absolute',
        marginTop: 30,
        marginLeft: 40,

    },
    button: {
        
        padding: 30,
        height: 80,

    },
    



})