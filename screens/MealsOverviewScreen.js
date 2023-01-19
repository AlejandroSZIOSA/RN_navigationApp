
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
        return(
            <MealItem title={itemData.item.title}/> //passin data prop
        )
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