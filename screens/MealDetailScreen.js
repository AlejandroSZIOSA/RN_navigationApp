import { Text, View,Image,StyleSheet, ScrollView } from "react-native"
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
//route give access to the parent component and a reference
function MealDetailScreen({route}){
    const mealId =  route.params.mealId; // this comes from MealsItem
    const selectedMeal = MEALS.find((meal)=> meal.id === mealId );
    return (
    <ScrollView styles={styles.rootContainer}>
        <Image style={styles.image} source={{uri:selectedMeal.imageUrl}}  />

        <Text style={styles.title}> {selectedMeal.title}</Text>
        
        <MealDetails 
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          texStyle={styles.detailText}
          />
        <View style={styles.listOutherContainer}>
          <View style={styles.listContainer}> 
            <Subtitle>Ingredients</Subtitle>
            <List data={selectedMeal.ingredients}/>
            <Subtitle>steps</Subtitle>
            <List data={selectedMeal.steps}/>
          </View>
        </View>
    </ScrollView>
    )
}
export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer:{
        marginBottom: 32
    },
    image:{
        width: '100%',
        height: 350
    },
    title: {
        fontWeight:'bold',
        fontSize:24,
        margin: 8, //all directions
        textAlign: 'center',
        color: 'white',
    },
    detailText:{
        color:'white'
    },
    listContainer:{
        width: '80%'
    },
    listOutherContainer:{
        alignItems: 'center'
       
    },
})
