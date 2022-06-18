import { Platform } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CategoriesScreen from '../Screens/CategoriesScreen';
import CategoriesMealsScreen from '../Screens/CategoryMealsScreen';
import MealDetailScreen from '../Screens/MealDetailScreen';
import Colors from '../constants/Colors'
import FavouritesScreen from '../Screens/FavouritesScreen'

 const MealsNavigator = createStackNavigator({
 Categories:{
   screen:CategoriesScreen,
   navigationOptions:{
      headerTitle:'Meal Categories'
   }
},
 CategoryMeals: {
    screen:CategoriesMealsScreen,
   
 },
 MealDetail: MealDetailScreen
 

},{  node:'modal', //visible in iOS
// initialRouteName: 'MealDetail',
   defaultNavigationOptions:{
      headerStyle:{ 
         backgroundColor: Platform.OS ==='android'? Colors.primaryColor :'',
     },
     headerTintColor: Platform.OS=== 'android'? 'white' :Colors.primaryColor
    
}})

const MealsFavTabNavigator = createBottomTabNavigator({
   Meals:MealsNavigator,
   Favourite: FavouritesScreen
})

export default createAppContainer( MealsFavTabNavigator)