import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import OTPInputView from '@twotalltotems/react-native-otp-input'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ButtonConform from '../components/ButtonConform';
const OtpVerify = () => {
    const navigation = useNavigation();
    

    const resend = () => navigation.navigate('Resend')
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
                        {` Enter the OTP sent to Number `}
                    </Text>


                </View>


                <View style={styles.rowContainer}>
                    <OTPInputView
                        style={{ width: '80%', height: 200 }}
                        pinCount={4}

                         autoFocusOnLoad
                        codeInputFieldStyle={styles.underlineStyleBase}
                        codeInputHighlightStyle={styles.underlineStyleHighLighted}

                    />
                </View>
                <View style={styles.resendContainer}>
                    <Text style={styles.text1}> Didn’t you receive the OTP? </Text>


                    <TouchableOpacity onPress={resend}>
                    <Text style={styles.text2}> Resend OTP</Text>
                    </TouchableOpacity>
                    
                </View>

                <View style={styles.button}>

                    <ButtonConform bgcolor="blue" onpress={() =>
                        navigation.navigate("Profile")
                    } />

                </View>
            </View >
        </View >

    );

}

export default OtpVerify

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
        // marginTop: 40,
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
    text2: {
        color: "blue",
    },
    rowContainer: {
        height: " 25%",
        alignItems: 'center',
        justifyContent: 'center',

        padding: 10,
    },
    textphone: {
        color: "silver",
        fontWeight: 400,
        fontSize: 15,
        marginTop: 50,
    },
    phoneInput: {
        paddingLeft: 100,
        paddingRight: 100,
        borderBottomWidth: 1,
        color: 'black'

    },
    otpinput: {
        height: 60,
        width: 60,
        margin: 5,
        borderBottomWidth: 2,
        backgroundColor: "black"
    },
    borderStyleBase: {
        width: 30,
        height: 45
    },

    borderStyleHighLighted: {
        borderColor: "black",
        color: "black"
    },

    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        color: "black",
        borderBottomWidth: 1,
        borderBottomColor: "black",
    },

    underlineStyleHighLighted: {
        borderColor: "#03DAC6",
        color: "black",
    },
    resendContainer:{
        flexDirection: "row", 
        alignItems: 'center',
        justifyContent: 'center',
    }



})