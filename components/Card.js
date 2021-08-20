import React from 'react';
import { StyleSheet, View, ImageBackground, Dimensions } from 'react-native';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.height * 0.3);
const imageWidth = Math.round(dimensions.width * 0.4);

export default function Card (props){
return (
<View style = {styles.card}>

    <View style = {styles.cardContent}>
        {props.children}
    </View>
</View>
)
}

{/* <ImageBackground style = {styles.image}
source = {require('./colorGradient.png')}>
<View style = {styles.cardContent}>
    {props.children}
</View>
</ImageBackground> */}


const styles = StyleSheet.create({
card:{
borderRadius: 6,
elevation: 3,
shadowOffset: {width: 1, height: 1},
marginHorizontal: 4,
marginVertical: 4,
padding: 5,
width: 1008,
height: 300,
backgroundColor: 'teal',

},
cardContent:{
flex: 1,
marginHorizontal: 6,
marginVertical: 4,

},

image:{
padding: 10,
height:imageHeight,
width: imageWidth,

},

});
