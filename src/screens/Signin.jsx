
import { useNavigation } from '@react-navigation/native';

import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity,  } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import ButttonLogin from '../components/ButttonLogin';
import Buttomnavigator from '../utilities/Buttomnavigator';



const Signin = () => {
    const navigation = useNavigation();

    const ForgotPassword = () => navigation.navigate('Otp')

    return (

        <KeyboardAwareScrollView>
        
        <View style={styles.viewcontainer}>

            <View style={styles.container1} >
                <Image style={{
                    position: "absolute",
                    height: 270,
                    width: "95%",
                }} source={require('./../images/Ellipse_3.png')} />

                <Image style={{
                    position: "absolute",
                    height: 270,
                    width: 285,
                }} source={require('./../images/Ellipse_2.png')} />

                <View style={styles.containerA} >

                    <Image style={{
                        height: 250,
                        width: 260,
                    }} source={require('./../images/Ellipse_1.png')} />

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

                <View style={styles.inputcontainer}>

                    <Text style={styles.inputtext}> Sign In</Text>

                    <View style={styles.textArea}>
                        <TextInput style={styles.textAreainput}
                            placeholder="Email Address"
                            placeholderTextColor="#9a73ef"

                        />

                        <AntDesign name='check' style={{ color: "blue", fontSize: 20 }} />
                    </View>
                    <View style={styles.textArea}>
                        <TextInput style={styles.textAreainput}
                            placeholder="Password"
                            secureTextEntry={true}
                            placeholderTextColor="#9a73ef"


                        />

                        <Entypo name='eye' style={{ color: "blue", fontSize: 20 }} />
                    </View>
                    <TouchableOpacity onPress={ForgotPassword}>
                        <Text style={styles.text}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.inputcontainer}>
                    <View style={styles.button}>

                        <ButttonLogin bgcolor="blue" tittle={"Sign in"} onpress={() =>
                            navigation.navigate("Otp")
                        } />

                    </View>

                    
                </View>

            </View >



        </View >
        </KeyboardAwareScrollView>
   
    );

}

export default Signin

const styles = StyleSheet.create({

    viewcontainer: {
        flex: 1,
    },
    container1: {
        width: "100%",
        height: "35%",


    },
    container2: {
        width: "100%",
        height: "60%",
        padding: 20,



    },

    logocontainer: {
        position: 'absolute',
        marginTop: 40,
        marginLeft: 40,

    },

    inputcontainer: {
        height: "50%",
        marginTop: 50,
    },
    button: {
        marginTop: 35,
        height: 80,

    },
    inputtext: {
        color: "black",
        fontWeight: 'bold',
        fontSize: 20,

    },
    textArea: {
        borderBottomWidth: 1,
        marginTop: 15,
        alignItems: 'center',
        flexDirection: 'row'
    },

    textAreainput: {
        width: "90%",
        color: '#000'

    },
    text: {
        marginTop: 15,
        alignItems: 'center',
        color: "blue",
    },
    iconbar: {
        alignSelf: 'center',
        width: 120,
        height: 5,
        marginTop: 80,
        backgroundColor: 'black'
    },

})