import { Text, View,Image } from "react-native"
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
//route give access to the parent component and a reference
function MealDetailScreen({route}){
    const mealId =  route.params.mealId; // this comes from MealsItem
    const selectedMeal = MEALS.find((meal)=> meal.id === mealId );
    return <View>
        <Image source={{uri:selectedMeal.imageUrl}}  />

        <Text> {selectedMeal.title}</Text>
        
        <MealDetails 
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          />

        <Text> Ingredients </Text>
        {selectedMeal.ingredients.map(ingredient => 
            <Text key={ingredient}> {ingredient}</Text>)}
        <Text> steps </Text>
        {selectedMeal.steps.map(step => 
            <Text key={step}> {step}</Text>)}

    </View>
}
export default MealDetailScreen;
