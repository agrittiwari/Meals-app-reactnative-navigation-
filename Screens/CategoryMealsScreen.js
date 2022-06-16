import React from 'react'
import {View, Text, Button,StyleSheet, Platform} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';


const CategoriesMealsScreen = props=>{
          
const catId = props.navigation.getParam('categoryId')
//  console.log(catId)
const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
// console.log(selectedCategory, CATEGORIES)   
return(

        <View style={styles.screen}>
            <Text> The Categories Meals Screen</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="Go to Meal Detail" onPress={()=>{
                props.navigation.navigate('MealDetail')}} />
        </View>
    )
};

CategoriesMealsScreen.navigationOptions =(navigationData)=>{
    //  console.log(navigationData)
 const catId = navigationData.navigation.getParam('categoryId');
// console.log(`In navigation Options ${catId}`)
const selectedCategory = CATEGORIES.find(cat =>cat.id ===catId)
return{
    headerTitle: selectedCategory.title ,
    headerStyle:{
        backgroundColor: Platform.OS ==='android'? Colors.primaryColor :'',
    },
    headerTintColor: Platform.OS=== 'android'? 'white' :Colors.primaryColor
}

}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default CategoriesMealsScreen;
