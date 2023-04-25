
import { useNavigation } from '@react-navigation/native';

import { StyleSheet, Text, View, Image, TextInput,  } from 'react-native'

import Entypo from 'react-native-vector-icons/Entypo';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import ButtonConform from '../components/ButtonConform';



const Profilecompelte = () => {
    const navigation = useNavigation();

    // const Compelete= () => navigation.navigate('Otp')

    return (

       

        <View style={styles.viewcontainer}>

            <View style={styles.container1} >

                <Image style={styles.image} source={require('./../images/picprofile.png')} />



            </View>
            < KeyboardAwareScrollView >
            <View style={styles.container2} >

                <View style={styles.inputcontainer}>

                    <Text style={styles.inputtext}> User Name</Text>

                    <View style={styles.textArea}>
                        <TextInput style={styles.textAreainput}
                            placeholder="Your Username"
                            placeholderTextColor="white"

                        />
                         <Entypo name='check' style={{ color: "white", fontSize: 15 }} />
                    </View>
                    <View style={styles.textArea}>
                        <TextInput style={styles.textAreainput}
                            placeholder="First Name"

                            placeholderTextColor="white"

                        />
                        <Entypo name='check' style={{ color: "white", fontSize: 15 }} />
                    </View>
                    <View style={styles.textArea}>
                        <TextInput style={styles.textAreainput}
                            placeholder="Last Name"

                            placeholderTextColor="white"

                        />
                        <Entypo name='check' style={{ color: "white", fontSize: 15 }} />
                    </View>
                    <View style={styles.textArea}>
                        <TextInput style={styles.textAreainput}
                            placeholder="Date of birth"

                            placeholderTextColor="white"

                        />
                        <Entypo name='check' style={{ color: "white", fontSize: 15 }} />
                    </View>
                    <View style={styles.button}>

                        <ButtonConform bgcolor="white" textcolor={"black"} tittle={"Complete"} onpress={() =>
                            navigation.navigate("Drawernavigator")
                        } />

                    </View>


                </View>



            </View >


</KeyboardAwareScrollView>


        </View >


    );

}

export default Profilecompelte

const styles = StyleSheet.create({

    viewcontainer: {
        flex: 1,
        backgroundColor: "blue"
    },
    container1: {
        width: "100%",
        height: "30%",
        alignItems: 'center',
        justifyContent: 'center',

    },
    container2: {
        width: "100%",
        height: "70%",
        padding: 20,
    },


    image: {
        height: 150,

    },




    inputtext: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 18,

    },
    textArea: {
        borderBottomWidth: 1,
        marginTop: 15,
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: "white"
    },

    textAreainput: {
        width: "90%",
        color: "white",

    },
    text: {

        alignItems: 'center',
        color: "white",
    },
    button: {
        marginTop: 60,
        height: 80,

    },


})