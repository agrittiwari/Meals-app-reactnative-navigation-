import React from 'react'
import { CATEGORIES, MEALS } from '../data/dummy-data';

import MealList from '../Components/MealList';

const CategoriesMealsScreen = props=>{
const catId = props.navigation.getParam('categoryId')
//  console.log(catId)

const displayedMeals = MEALS.filter(meal=> meal.categoryIds.indexOf(catId) >= 0)

return(
<MealList listData={displayedMeals} navigation={props.navigation}/>
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


export default CategoriesMealsScreen;
