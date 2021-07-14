import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button, Linking, ScrollView } from 'react-native';






export function callPhone() {
  //Linking.openURL('tel:+61415964238');
}

export default function App() {
  return (

    <View style={styles.container}>
      <ScrollView>

        <Text className = "HeaderTitle">MyHelpline</Text>

        <Text className = "HeaderText">Your friend anytime you need to call a helpline in Australia. Just top one of the buttons below to start!</Text>


        <Button className = "ButtonNav24Hour" onPress={() => {
          //navigate to React Router page '24 hour helplines'
          // These will also be cards in a flat list.
          }} title="24 Hour Helplines" />
        <Button className = "ButtonNavDepression" onPress={() => { 
          console.log('you clicked me') 
          }} title="Depression" />
        <Button className = "ButtonNavTrauma" onPress={() => {
           console.log('you clicked me') 
           }} title="Trauma" />
        <Button className = "ButtonNavMore" onPress={() => {
           console.log('you clicked me') 
           }} title="More Options" />
        

        <Text onPress={() => { callPhone }} style={styles.funcNavText}>Phone 6</Text>

        <StatusBar style="auto" />
      </ScrollView>
    </View>
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
