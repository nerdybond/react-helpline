import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';
import { ButtonGroup } from '@material-ui/core';





export function callPhone() {
  //Linking.openURL('tel:+61415964238');
}

export default function App() {
  return (



    <View style={styles.container}>

      <h1>HelpMeOut</h1>
      <p>Your assistant anytime you need to call up an Australian Helpline.</p>
      <p>Help is only a few taps away.</p>

      <ButtonGroup>      
          <Button onPress={() => { console.log('you clicked me') }} title="Phone 1" />
          <Button onPress={() => { console.log('you clicked me') }} title="Phone 2" />
          <Button onPress={() => { console.log('you clicked me') }} title="Phone 3" />
          <Button onPress={() => { console.log('you clicked me') }} title="Phone 4" />
          <Button onPress={() => { console.log('you clicked me') }} title="Phone 5" />
          <Button onPress={() => { console.log('you clicked me') }} title="Phone 6" />
      </ButtonGroup>


      <Text onPress={() => { callPhone }} style={styles.funcNavText}>Phone 6</Text>

      <StatusBar style="auto" />
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
