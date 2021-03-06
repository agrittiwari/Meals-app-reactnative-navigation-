 
import { Platform } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CategoriesScreen from '../Screens/CategoriesScreen';
import CategoriesMealsScreen from '../Screens/CategoryMealsScreen';
import MealDetailScreen from '../Screens/MealDetailScreen';
import Colors from '../constants/Colors'
import FavouritesScreen from '../Screens/FavouritesScreen'
import {Ionicons} from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import FiltersScreen from '../Screens/FiltersScreen'

const defaultStackNavOptions= {
   headerStyle:{ 
      backgroundColor: Platform.OS ==='android'? Colors.primaryColor :'',
  },

  headerTintColor: Platform.OS=== 'android'? 'white' :Colors.primaryColor
}

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
   defaultNavigationOptions:defaultStackNavOptions})

const FavNavigator= createStackNavigator({
   Favourites: FavouritesScreen,
   MealDetail:MealDetailScreen
},{
 defaultNavigationOptions:defaultStackNavOptions  
})

const tabScreenConfig ={
   Meals:{screen:MealsNavigator,navigationOptions:{
      tabBarIcon:(tabInfo)=>{
         return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
      },
      tabBarColor: Colors.primaryColor
   }},
   Favourite: {screen:FavNavigator, navigationOptions:{
      tabBarIcon:(tabInfo)=>{
         return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
      },
      tabBarColor:Colors.accentColor,
      
   }}
}
const MealsFavTabNavigator = Platform.OS === 'android' ?createMaterialBottomTabNavigator(tabScreenConfig,{
   activeColor:'white',
   shifting:true,
   barStyle:{
      backgroundColor:Colors.primaryColor
   }
})
: createBottomTabNavigator(tabScreenConfig,{
   tabBarOptions:{
      activeTintColor:Colors.accentColor,
      
   }
})

const FiltersNavigator = createStackNavigator({
   screen: FiltersScreen
},{
   // navigationOptions:,
   defaultNavigationOptions:defaultStackNavOptions  
  })

const MainNavigator = createDrawerNavigator({
   MealsFav: {screen:MealsFavTabNavigator,navigationOptions:{
      drawerLabel:' Meals'
   }},
   Filters: FiltersNavigator
},{
    contentOptions:{
      activeTintColor:Colors.accentColor,
      activeBackgroundColor: Colors.primaryColor,
      itemsContainerStyle:{
         marginVertical:50
      }
   }
})

export default createAppContainer( MainNavigator )