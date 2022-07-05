import React from 'react'
import {View, Image, ScrollView, Text, StyleSheet} from 'react-native';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import HeaderButton from '../Components/HeaderButton'
import DefaultText from '../Components/DefaultText';

const ListItem = props =>{

    return<View style ={styles.listItem}>
<DefaultText>{props.children}</DefaultText>
    </View> 
}

const MealDetailScreen = props=>{
const mealId = props.navigation.getParam('mealId')
const selectedMeal = MEALS.find(meal => meal.id === mealId)
    return(
<ScrollView>
    <Image source={{uri:selectedMeal.imageUrl}} style={styles.image}/>
    <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}</DefaultText>
            <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
           {selectedMeal.ingredients.map(ingredient => <ListItem key={ingredient}>{ingredient}</ListItem>)}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => <ListItem key={step}>{step}</ListItem>)}
<View style={styles.screen}>
            <Text> The Meal Detail Screen</Text>
            <Text>{selectedMeal.ingredients}</Text>
        </View>
</ScrollView>
        
    )
};

MealDetailScreen.navigationOptions = navigationData =>{
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId)
return{
    headerTitle: selectedMeal.title,
    headerRight:()=> <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Favourite' iconName='ios-star' onPress={()=>{console.log('Favouriet icon pressed')}}/>
    </HeaderButtons>
}
}


const styles = StyleSheet.create({

    image:{
        width:'100%',
        height:200
    },
    details:{
        flexDirection:'row',
        padding:15,
        justifyContent:'space-around'
    },
    title:{
        fontSize:22,
        textAlign:'center',
    },
    listItem:{
        marginVertical:10,
        marginHorizontal:20,
        borderColor:'#ccc',
        borderWidth:1
    }

})

export default MealDetailScreen;
