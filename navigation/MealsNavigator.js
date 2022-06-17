import { Platform } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import CategoriesScreen from '../Screens/CategoriesScreen';
import CategoriesMealsScreen from '../Screens/CategoryMealsScreen';
import MealDetailScreen from '../Screens/MealDetailScreen';
import Colors from '../constants/Colors'


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


export default createAppContainer( MealsNavigator)