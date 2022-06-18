import React from 'react'
import {View, Text, Button,StyleSheet, FlatList  } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import Colors from '../constants/Colors';


const CategoriesMealsScreen = props=>{
   const renderMealItem =(itemData)=>{
    return(
        <View>
            <Text>{itemData.item.title}</Text>
        </View>
    )
   }
    

const catId = props.navigation.getParam('categoryId')
//  console.log(catId)

const displayedMeals = MEALS.filter(meal=> meal.categoryIds.indexOf(catId) >= 0)

return(

        <View style={styles.screen}>
            <Text> The Categories Meals Screen</Text>
<FlatList data={displayedMeals} keyExtractor={(item, index)=> item.id} renderItem={renderMealItem} />
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
