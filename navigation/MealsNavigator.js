import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import CategoriesScreen from '../Screens/CategoriesScreen';
import CategoriesMealsScreen from '../Screens/CategoryMealsScreen';
import MealDetailScreen from '../Screens/MealDetailScreen';

 const MealsNavigator = createStackNavigator({
 Categories:   CategoriesScreen,
 CategoryMeals: {
    screen:CategoriesMealsScreen
 },
 MealDetail: MealDetailScreen
 

})


export default createAppContainer( MealsNavigator)