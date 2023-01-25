
import { View,StyleSheet,Text,FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

//Object destructing because this component is a child of a stack.screen
function MealsOverviewScreen({route}){
    //extracting categoryId 
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter((mealItem) => {
        //It is true if there is a match
        return mealItem.categoryIds.indexOf(catId) >=0;
    } );
    function renderMealItem(itemData){
        const item = itemData.item; //conecting a variable to an object :)
        // An helper object :) using this syntax inside a component as Props
        const mealItemProps ={
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
        };

        // Imagenes
        return(
            <MealItem {...mealItemProps}
            /> //Passing data prop . a new way :) because there are very much propps
        );
    }
    return(
        <View style={styles.container}>
            <FlatList
             data ={displayedMeals}
             keyExtractor={(item)=> item.id}
             renderItem={renderMealItem} //passing params automatic :)
            />
        </View>
    );
};
export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:16
    }
})