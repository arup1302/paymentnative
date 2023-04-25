import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView
} from 'react-native';

const SettingsScreen = ({  navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16, backgroundColor:"blue" }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            You are on Setting Screen
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate('Home')
            }>
            <Text>Go to Home Tab</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate('Profilecompelte')
            }>
            <Text>Open Detail Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate('Profile')
            }>
            <Text>Open Profile Screen</Text>
          </TouchableOpacity>
        </View>
       
       
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
    width: 300,
    marginTop: 16,
    color:"white",
  },
});
export default SettingsScreen;