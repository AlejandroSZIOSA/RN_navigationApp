import { StyleSheet,FlatList } from "react-native";

import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/dummy-data";


//destructing = ? a prop 
//Nested functions
//navigation is the navigation component
function CategoriesScreen({navigation}){
  function renderCategoryItem(itemData){
    //Initiate the navigation
    function pressHandler(){
      //Passing Prop object as params in the navigation
      navigation.navigate('MealsOverview',{categoryId: itemData.item.id});
    }
      return( 
      <CategoryGridTile 
        title={itemData.item.title}
        color={itemData.item.color} 
        myOnPress={pressHandler} // sending a function as Prop
      />
      )
  }
    return( 
    <FlatList 
      data={CATEGORIES} 
      keyExtractor={(item) => item.id}
      renderItem= {renderCategoryItem}  
      numColumns={2}
    />
    );
}
export default CategoriesScreen;

const styles = StyleSheet.create({
    
});