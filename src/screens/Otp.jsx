import { StyleSheet, Text, View, Image,TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ButtonConform from '../components/ButtonConform';
const Otp = () => {
    const navigation = useNavigation();
    return (

        
        <View style={styles.viewcontainer}>


            <View style={styles.container1} >

                <View style={styles.imagecontainer}>
                    <Image style={{
                        height: 250,
                        width: "50%",

                    }} source={require('./../images/OTP.png')}
                        resizeMode='cover' />

                </View>




            </View >


            <View style={styles.container2} >
                <View style={styles.otpcontainer}>
                    <Text style={styles.text}>
                        OTP Verification
                    </Text>

                    <Text style={styles.text1}>
                        {` We will send you a one-time password `}
                    </Text>
                    <Text style={styles.text1}>
                        {` to this mobile number. `}
                    </Text>


                </View>


                <View style={styles.rowContainer}>
                    <Text style={styles.textphone}>Enter Mobile Number</Text>
                    <TextInput
                        style={styles.phoneInput}
                        placeholder="Phone"
                            placeholderTextColor="#9a73ef"
                    />
                </View>

                <View style={styles.button}>

                    <ButtonConform bgcolor="blue" tittle={"Get OTP"} onpress={() =>
                        navigation.navigate("OtpVerify")
                    } />

                </View>
            </View >
        </View >
        
    );

}

export default Otp

const styles = StyleSheet.create({

    viewcontainer: {
        flex: 1,
        backgroundColor: "white"
    },
    container1: {
        width: "100%",
        height: "45%",
        
        alignItems: 'center',
        justifyContent: 'center',


    },
    container2: {
        width: "100%",
        height: "55%",


    },
    imagecontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
    },
    button: {
        marginTop:50,
        padding: 30,
        height: 80,

    },
    text: {
        color: "black",
        fontWeight: 900,
        padding: 10,
        fontSize: 23,
        

    },
    otpcontainer: {
        
        alignItems: 'center',

    },
    text1: {
        color: "black",
    },
    rowContainer:{
        height:" 25%",
        alignItems: 'center',
        justifyContent: 'center',
       
        padding: 10,
    },
    textphone:{
        color:"silver",
        fontWeight: 400,
        fontSize: 15,
        marginTop: 50,
    },
    phoneInput:{
        paddingLeft: 100,
        paddingRight:100,
        borderBottomWidth: 1,
        color: '#000'
        
    }


})