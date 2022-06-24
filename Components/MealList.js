import React from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import MealItem from './MealItem'
const MealList =props =>{

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
    return(
    
    <View style={styles.screen}>
    <Text> The Categories Meals Screen</Text>
<FlatList data={props.listData} keyExtractor={(item, index)=> item.id} renderItem={renderMealItem} style={{width:'100%'}}/>
    {/* <Button title="Go to Meal Detail" onPress={()=>{
        props.navigation.navigate({routeName:'MealDetail'})}} /> */}
</View>
)
}
 const styles = StyleSheet.create({
    flex: 1,
    justifyContent:'center',
    alignItems:'center'

 }
 )

export default MealList