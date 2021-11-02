import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Linking, ScrollView, Pressable, SafeAreaView, Image } from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Constants from 'expo-constants';
import { Alert } from 'react-native';

const statusBarHeight = Constants.statusBarHeight;

const styles = StyleSheet.create({
  container: {
    marginTop: statusBarHeight,
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  headerView:{
    backgroundColor: 'rgba(52, 52, 52, 0.0)',
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: 10,
  },
  heading:{
    fontSize: 60,
    textAlign: 'center',
    textDecorationLine: 'underline',
    textShadowRadius: 1,
    textShadowOffset: {width: 1 , height: 1},
    textShadowColor: '#b5b5b5',
    paddingBottom: 25,
  },
  subheading:{
    fontSize: 17,
    paddingVertical: 2 ,
    paddingHorizontal: 3,
    textAlign: 'center',
  },

  boxView:{
    backgroundColor: 'rgba(52, 52, 52, 0.0)',
    width: '100%',
    paddingHorizontal: 3,
    paddingTop: '10%',
    paddingVertical: '5%',
  },
  
  column: {
    flex: 1,
    flexDirection:"row",
    backgroundColor: 'rgba(52, 52, 52, 0.0)',
  },

  box:{
    flex: 1,
    backgroundColor: '#000501',
    margin: 3,
    borderRadius: 10,
  },

  inner: {
    justifyContent: 'center',
  },
  boxHeaderText:{
    fontSize: 30,
    marginBottom: 10,
    color: "#ffffff",
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  boxMainText:{
    fontSize: 15,
    marginTop: 10,
    color: "#ffffff",
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  icon:{
    width: 40,
    height: 40,
    opacity: 0.6,
    left: 5,
    bottom: 2,
  }
 
});



function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <Item title = {item.title}/>
  );

  return (
<View style={styles.container}>
<View style = {styles.headerView}>     
<Text style = {styles.heading}>MyHelpline</Text>
<Text style = {styles.subheading}>Your friend anytime you need to call a helpline in Australia. Help is only a few taps away 😊 </Text>
<Text style = {styles.subheading}>Need help getting started? Just tap one of the buttons below to find a Helpline, and talk with someone now.</Text>
</View>


<ScrollView
alwaysBounceHorizontal={false}
alwaysBounceVertical={true}
scrollEnabled={true}
showsVerticalScrollIndicator={false}
overScrollMode= 'always'
style = {styles.boxView}>     
<View style={styles.column}> 
  
  <View style = {[styles.box, {backgroundColor: '#BB8CE5'}]}>
  <Pressable
      style={({ pressed }) => [{ opacity: pressed ? 0.65 : 1 } ]}
      onPress={() => {
        navigation.navigate('TwentyFourHour') }}
        onLongPress={() => {
          {/* Alert.alert(
            "Alert Title",
            "This is an alert!",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );*/}
        }}
        >
  <Text style={styles.boxHeaderText}>24 Hour Help</Text>
    <Text style={styles.boxMainText}>
      This is the new text box, hopefully wrapping correctly.
    </Text>
    <Image
        source={require('./components/twentyfour.png')}
        fadeDuration={0}
        style={styles.icon}
      />
  </Pressable>
  </View>

  <View style = {[styles.box, {backgroundColor: '#FD8C87'}]}>
  <Pressable 
      style={({ pressed }) => [{ opacity: pressed ? 0.65 : 1 } ]}
      onPress={() => {
        navigation.navigate('Trauma') }}
        onLongPress={() => {
          {/* Alert.alert(
            "Alert Title",
            "This is an alert!",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );*/}
        }}>
  <Text style={styles.boxHeaderText}>Family and Trauma</Text>
    <Text style={styles.boxMainText}>
      This is the new text box, hopefully wrapping correctly.
    </Text>
    <Image
        source={require('./components/family.png')}
        fadeDuration={0}
        style={styles.icon}
      />
  </Pressable>
  </View>
  </View>

  <View style={styles.column}>

  <View style = {[styles.box, {backgroundColor: '#F7CA81'}]}>
  <Pressable
        style={({ pressed }) => [{ opacity: pressed ? 0.65 : 1 } ]}
        onPress={() => {
        navigation.navigate('Depression and Anxiety') }}
        onLongPress={() => {
          {/* Alert.alert(
            "Alert Title",
            "This is an alert!",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );*/}
        }
      
      }
        
        
        
        >
  <Text style={styles.boxHeaderText}>Anxiety and Depression</Text>
    <Text style={styles.boxMainText}>
      This is the new text box, hopefully wrapping correctly.
    </Text>
    <Image
        source={require('./components/depression.png')}
        fadeDuration={0}
        style={styles.icon}
      />
  </Pressable>
  </View>

  <View style = {[styles.box, {backgroundColor: '#6ce66c'}]}>
  <Pressable 
    style={({ pressed }) => [{ opacity: pressed ? 0.65 : 1 } ]}
    onPress={() => {
        navigation.navigate('Crisis') }}
        onLongPress={() => {
          {/* Alert.alert(
            "Alert Title",
            "This is an alert!",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );*/}
        }}>
  <Text style={styles.boxHeaderText}>Crisis Support</Text>
    <Text style={styles.boxMainText}>
      This is the new text box, hopefully wrapping correctly.
    </Text>
    <Image
        source={require('./components/crisis.png')}
        fadeDuration={0}
        style={styles.icon}
      />
  </Pressable>
  </View>
  
  </View>

</ScrollView>
</View>
);
}

function TwentyFourHourScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Text className = "HeaderTitle">24 Hour Helplines</Text>

{/* <TouchableOpacity className = "ButtonNav24Hour" onPress={() => {
Linking.openURL(`tel:+61415964238`)
  }} title="24 Hour Helplines" /> */}
    </View>
  );
}


function DepressionScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text className = "HeaderTitle">Depression Helplines</Text>
    </View>
  );
}


function TraumaScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text className = "HeaderTitle">Trauma Helplines</Text>
    </View>
  );
}


function CrisisScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text className = "HeaderTitle">Crisis Helplines</Text>
    </View>
  );
}


export function callPhone() {
  //Linking.openURL('tel:+61415964238');
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="TwentyFourHour" component={TwentyFourHourScreen} />
        <Drawer.Screen name="Depression and Anxiety" component={DepressionScreen} />
        <Drawer.Screen name="Trauma" component={TraumaScreen} />
        <Drawer.Screen name="Crisis" component={CrisisScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    
    
  );
}