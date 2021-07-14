import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button, Linking, ScrollView } from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';




export function callPhone() {
  //Linking.openURL('tel:+61415964238');
}

const Drawer = createDrawerNavigator();


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     
     <Text className = "HeaderTitle">MyHelpline</Text>

<Text className = "HeaderText">Your friend anytime you need to call a helpline in Australia. Just top one of the buttons below to start!</Text>


<Button className = "ButtonHome" onPress={() => {
 navigation.navigate('Home') 
// These will also be cards in a flat list.
  }} title="Home" />
<Button className = "ButtonNavDepression" onPress={() => { 
  navigation.navigate('TwentyFourHour') 
  }} title="Depression" />
<Button className = "ButtonNavTrauma" onPress={() => {
   navigation.navigate('TwentyFourHour')
   }} title="Trauma" />
<Button className = "ButtonNavMore" onPress={() => {
   navigation.navigate('TwentyFourHour')
   }} title="More Options" />

    </View>
  );
}

function TwentyFourHourScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Text className = "HeaderTitle">MyHelpline</Text>

     <Button className = "ButtonNav24Hour" onPress={() => {
Linking.openURL(`tel:+61415964238s`)
  }} title="24 Hour Helplines" />
    </View>
  );
}


export default function App() {
  return (

      <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="TwentyFourHour" component={TwentyFourHourScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    
  );
}

// const Button = styled.button`
//   background-color: black;
//   color: white;
//   font-size: 20px;
//   padding: 10px 60px;
//   border-radius: 5px;
//   margin: 10px 0px;
//   cursor: pointer;
// `;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  Button: {

  },
});
