import { Text } from "react-native"
//route give access to the parent component and a reference
function MealDetailScreen({route}){
    const mealId =  route.params.mealId; // this comes from MealsItem
    return<Text> Meal details ({mealId})</Text>
}
export default MealDetailScreen;
