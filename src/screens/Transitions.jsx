
import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Entypo from 'react-native-vector-icons/Entypo';

const Transitions = () => (
  <>
    <View style={styles.container}>

      <View style={styles.containerA
      }>
        <View style={styles.container1} >

          <Text style={styles.title1}>

            Transactions

          </Text>


          <Text style={styles.title1}>

            Your total expences

          </Text>

          <Text style={styles.title2}>

            $1063.30

          </Text>

        </View>
      </View>

      <View style={styles.container2} >

        <View style={styles.iconbar}>

        </View>


        <View style={styles.lowerContainer} >

          <View style={styles.Icon}>
            <View style={styles.searchIcon} >
              <Ionicons name='search' />
            </View >
            <TextInput style={styles.input}
              placeholder={"Search"}

            />
          </View>

        </View>



        <View style={styles.lowerContainer1} >

          <View style={styles.viewcontainer1}>
            <View style={styles.viewcard} >
              <Ionicons style={styles.iconsign} name='card' />
            </View >
            <View>
              <Text >
                Shopping
              </Text>
              <Text style={styles.date} >
                15 Mar 2019, 8:20 PM
              </Text>

            </View>

          </View>


          <View style={styles.viewcontainer2}>

            <Text style={styles.price}>
              - $120
            </Text>

            <Text style={styles.arrowright} >
              <Entypo name='chevron-right' />
            </Text>

          </View>

        </View>

        <View style={styles.lowerContainer1} >

          <View style={styles.viewcontainer1}>
            <View style={styles.viewcard1} >
              <Ionicons style={styles.iconsign} name='card' />
            </View >
            <View>
              <Text >
                Shopping
              </Text>
              <Text style={styles.date} >
                15 Mar 2019, 8:20 PM
              </Text>

            </View>

          </View>


          <View style={styles.viewcontainer2}>

            <Text style={styles.price}>
              - $120
            </Text>

            <Text style={styles.arrowright} >
              <Entypo name='chevron-right' />
            </Text>

          </View>

        </View>

        <View style={styles.lowerContainer1} >

          <View style={styles.viewcontainer1}>
            <View style={styles.viewcard2} >
              <SimpleLineIcons style={styles.iconsign} name='handbag' />
            </View >
            <View>
              <Text >
                Shopping
              </Text>
              <Text style={styles.date} >
                15 Mar 2019, 8:20 PM
              </Text>

            </View>

          </View>


          <View style={styles.viewcontainer2}>

            <Text style={styles.price}>
              - $120
            </Text>

            <Text style={styles.arrowright} >
              <Entypo name='chevron-right' />
            </Text>

          </View>

        </View>
        <View style={styles.lowerContainer1} >

<View style={styles.viewcontainer1}>
  <View style={styles.viewcard3} >
    <Ionicons style={styles.iconsign} name='card' />
  </View >
  <View>
    <Text >
      Shopping
    </Text>
    <Text style={styles.date} >
      15 Mar 2019, 8:20 PM
    </Text>

  </View>

</View>


<View style={styles.viewcontainer2}>

  <Text style={styles.price}>
    - $120
  </Text>

  <Text style={styles.arrowright} >
    <Entypo name='chevron-right' />
  </Text>

</View>

</View>
<View style={styles.lowerContainer1} >

          <View style={styles.viewcontainer1}>
            <View style={styles.viewcard4} >
              <Ionicons style={styles.iconsign} name='card' />
            </View >
            <View>
              <Text >
                Shopping
              </Text>
              <Text style={styles.date} >
                15 Mar 2019, 8:20 PM
              </Text>

            </View>

          </View>


          <View style={styles.viewcontainer2}>

            <Text style={styles.price}>
              - $120
            </Text>

            <Text style={styles.arrowright} >
              <Entypo name='chevron-right' />
            </Text>

          </View>

        </View>
        <View style={styles.lowerContainer1} >

<View style={styles.viewcontainer1}>
  <View style={styles.viewcard5} >
    <Ionicons style={styles.iconsign} name='card' />
  </View >
  <View>
    <Text >
      Shopping
    </Text>
    <Text style={styles.date} >
      15 Mar 2019, 8:20 PM
    </Text>

  </View>

</View>


<View style={styles.viewcontainer2}>

  <Text style={styles.price}>
    - $120
  </Text>

  <Text style={styles.arrowright} >
    <Entypo name='chevron-right' />
  </Text>

</View>

</View>




      </View>

    </View>
  </>
);

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: 'white',
  },
  containerA: {

    width: '100%',
    height: 260,
    borderBottomLeftRadius: 85,
    borderBottomRightRadius: 85,
    backgroundColor: 'skyblue',
  },
  container1: {
    display: 'flex',
    // textAlign: 'center',
    justifyContent: "center",
    alignItems: 'center',
    width: '100%',
    height: '98%',
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    backgroundColor: '#4960F9',
  },
  container2: {

    width: '100%',
    alignItems: 'center',
    height: 541,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    marginTop: 50,
    backgroundColor: '#4960F9',

  },
  title1: {

    marginTop: 50,
    fontSize: 22,
    fontWeight: "400",
  },

  title2: {
    fontSize: 28,
    marginTop: 5,
    fontWeight: "700",
  },

  iconbar: {
    // alignSelf: 'center',
    width: 47,
    height: 10,
    top: 28,
    backgroundColor: 'white'
  },
  lowerContainer: {
    borderColor: "#3D56FA",
    marginTop: 50,
    backgroundColor: " #4960FA",
    height: 60,
    width: "80%",
    borderWidth: 2,
    borderRadius: 16,

  },
  Icon: {
    flex: 1,
    padding: 5,
    // justifyContent: 'center',
    height: 0,
    flexDirection: 'row',

  },
  searchIcon: {
    height: 53,
    width: 40,
    paddingLeft: 30,
    justifyContent: 'center',

  },
  input: {
    height: 50,
    width: 300,
    // backgroundColor: "05199E",
    borderRadius: 16,
    padding: 10,
  },
  lowerContainer1: {
  
    // borderStyle: 'dashed',
    // borderColor: 'red',
    // borderWidth: 1,
    height: 60,
    padding: 10,
    paddingLeft: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  viewcontainer1: {
    width: '70%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  viewcontainer2: {
    width: '30%',
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewcard: {
    backgroundColor: "#FFCF87",
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewcard1: {
    backgroundColor: "#E09FFF",
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewcard2: {
    backgroundColor: "#87F0FF", 
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewcard3: {
    backgroundColor: "#FFCF87",
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewcard4: {
    backgroundColor: "#A73131",
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewcard5: {
    backgroundColor: "#298693",
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  price: {

  },
  iconsign: {
    color: "red"
  },
  arrowright: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 5,
    margin: 5,
  },
  date: {

    fontFamily: "Montserrat",
    fontSize: 10,
    fontWeight: '300',

  },



});
export default Transitions