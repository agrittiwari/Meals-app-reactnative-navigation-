import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import DefaultText from "./DefaultText";

const MealItem = props =>{
  return(
    <View style={styles.mealItem}>
        <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
            <View style={{...styles.mealRow,...styles.mealHeader}}>
                <ImageBackground source={{uri:props.image}} style={styles.bgImg}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}  >{props.title}</Text>
                </View> 
            </ImageBackground>
            </View>
            <View style={{...styles.mealRow,...styles.mealDetail}}>
                <DefaultText>{props.duration}</DefaultText>
            <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
            </View>
        </View>
        </TouchableOpacity>
    </View>)  
}

const styles = StyleSheet.create({  

mealItem:{
height: 200,
width:'94%',
margin:10,
backgroundColor: '#f5f5f5',
borderRadius:10,
overflow: "hidden",

},
mealRow:{
flexDirection:'row'
},
mealHeader:{
    height: '85%'
    },
    mealDetail:{
        paddingHorizontal: 10,
        justifyContent: 'space-between' ,
        alignItems: 'center',       
    height: '13%'
    },
bgImg:{
    width:'100%',
    height:'100%',
    justifyContent:'flex-end'
},
titleContainer:{
    backgroundColor:'rgba(0,0,0,0.5)',
    paddingVertical:5,
    paddingHorizontal:12,
},
title:{
    fontSize:22,
    color:'white',
   
    textAlign:'center'
}
})

export default MealItem;