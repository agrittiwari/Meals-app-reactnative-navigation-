import React from 'react'
import {View, Text, Button,StyleSheet, FlatList  } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import Colors from '../constants/Colors';
import MealItem from '../Components/MealItem';

const CategoriesMealsScreen = props=>{
   const renderMealItem =(itemData)=>{
    return(
        <MealItem title={itemData.item.title}  
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={()=>{props.navigation.navigate({routeName:'MealDetail',
    params:{
        mealId: itemData.item.id
    }})} }/>
    )
   }
    

const catId = props.navigation.getParam('categoryId')
//  console.log(catId)

const displayedMeals = MEALS.filter(meal=> meal.categoryIds.indexOf(catId) >= 0)

return(

        <View style={styles.screen}>
            <Text> The Categories Meals Screen</Text>
<FlatList data={displayedMeals} keyExtractor={(item, index)=> item.id} renderItem={renderMealItem} style={{width:'100%'}}/>
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
